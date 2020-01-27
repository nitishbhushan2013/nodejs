const TodoModel = require('../model/todo.model');
const allTodos = require('../tests/mockData/all.todo.json');

createToDo = async (req, res, next) => {
   // console.log(`req -> ${JSON.stringify(req.body)}`)
   try{
    const createdModel = await TodoModel.create(req.body); // API call outside the app env, need to wait to be 
    res.status(201).json(createdModel);
   }catch(err){
       next(err);
   }
}

getTodos =  async (req, res, next) => {
    try{
        const response = await TodoModel.find({});
       // console.log(`response ::: ${JSON.stringify(response)}`);
        res.status(200).json(response);
    }catch(err){
        next(err);
    }
}

getTodoById = async (req, res, next)=>{
    try{
        const id = req.params.todoId;
        console.log(`id is : ${id}`)
        await TodoModel.findById(id);
    } catch(err){
        console.log(`error thrown is :: ${JSON.stringify(err)}`)
    }

    
}


module.exports = {
    createToDo, getTodos, getTodoById
}