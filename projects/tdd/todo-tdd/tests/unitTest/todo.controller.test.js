const TodoController = require('../../controllers/todo.controller');
const TodoModel = require('../../model/todo.model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mockData/new.todo.json');
const allTodos = require('../mockData/all.todo.json');

 


describe('todo.controller', ()=>{ 
    var req, res, next;
    beforeEach(()=>{
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = jest.fn();
    })
    
    
    describe('createToDo', ()=>{
        beforeEach(()=>{
            // mock the model create behavior
            TodoModel.create = jest.fn();
            req.body = newTodo 
    
        })

        it('should have createTodo function', ()=>{
            TodoController.createToDo(req, res, next);
            expect(typeof TodoController.createToDo).toStrictEqual("function");
        }) 

        it('should have called ToDoModel.create function', ()=>{
            TodoController.createToDo(req, res, next);
            expect(TodoModel.create).toBeCalled();
            expect(TodoModel.create).toHaveBeenCalledWith(newTodo);
        });
        
        it('should have correct todo details in the req',()=>{
            TodoController.createToDo(req, res, next);
            expect(req.body).toStrictEqual(newTodo);
        })
        
        it('should returns 201 status code',async ()=>{
            await TodoController.createToDo(req, res, next);
           expect(res.statusCode).toBe(201);
           expect(res._isEndCalled()).toBeTruthy();

        })
        it('Should return the valid json', async()=>{ 
            TodoModel.create.mockReturnValue(newTodo);
            await TodoController.createToDo(req, res, next);
            var data = res._getJSONData();
            expect(data.done).toBe(false);
            expect(data.title).toBe("This is first task");

        })
        /*
        In case of any error, TodoModel.create() would returned rejetion Promise, which we need to simulate over here. 
        
        */
        it('should have handled error conditions', async()=>{
            const errorMessage = "Some thing went wrong.";
            const rejectedPromise = Promise.reject(errorMessage);
             TodoModel.create.mockReturnValue(rejectedPromise); // mock the returned response to return RejectedPromise
             await TodoController.createToDo(req, res, next); // next must be mock object 
            expect(next).toBeCalledWith(errorMessage);
           
        })
    })


    describe('getTodos', ()=>{
        beforeEach(()=>{
             // since its an APi call to mongo DB, we need to mock it
            TodoModel.find = jest.fn();
            res.body = allTodos;
        })

        it('should have getTodo function', async ()=>{
            await TodoController.getTodos(req, res, next);
            expect(typeof TodoController.getTodos).toStrictEqual("function");
        })  

        it('should have called TodoModel.find()',async ()=>{
            await TodoController.getTodos(req, res, next);
            expect(TodoModel.find).toBeCalled();
            expect(TodoModel.find).toHaveBeenCalledWith({});
        })

        it('should return response with status 200 and all the todos', async ()=>{
            TodoModel.find.mockReturnValue(allTodos);
            await TodoController.getTodos(req, res, next);

            const responseData = res._getJSONData(); 
            //console.log(`Returned data is ${JSON.stringify(responseData)}`)
            expect(res.statusCode).toBe(200);
            expect(res._isEndCalled()).toBeTruthy();
            expect(res._isJSON()).toStrictEqual(true);
            expect(responseData.length).toBe(2);
        })

        it('should have handled error conditions and return 500 status code', async ()=>{
            // find() will returns RejectPromise
            const errorMessage = "Some thing went wrong.";
            const RejectedPromise = Promise.reject(errorMessage);
            TodoModel.find.mockReturnValue(RejectedPromise);
            await TodoController.getTodos(req, res, next);
            expect(next).toBeCalledWith(errorMessage);
        })

    })

    describe('getTodoById', ()=>{

        beforeEach(()=>{
            req.params.todoId = "5dc646506a3d8af18eedb126";
            // since its an APi call to mongo DB, we need to mock it
            TodoModel.findById = jest.fn(); 
       })

        it('should have getTodoById', async (req, res, next) => {
             await  TodoController.getTodoById(req, res, next);
            expect(typeof TodoController.getTodoById).toStrictEqual("function");
        })

        it('should have called TodoModel.findById with route parameter',async()=>{
           
            await TodoController.getTodoById(req, res, next);
            expect(TodoModel.findById).toBeCalled();
            expect(TodoModel.findById).toBeCalledWith("5dc646506a3d8af18eedb126");
        })

    })


})