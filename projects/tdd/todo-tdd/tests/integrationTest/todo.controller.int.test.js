const request = require('supertest');
const app = require('../../app');
const newTodo = require('../mockData/new.todo.json');
const endpointUrl = "/todos/";

describe('endpointUrl', ()=>{
    it(`POST ${endpointUrl} : should create a new todo`, async()=>{
        const response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
        
        console.log(`response--> ${JSON.stringify(response)}`);
        expect(response.statusCode).toEqual(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
       
    })

    it('POST ${endpointUrl} : should have thrown server error 500 on malformed request',async ()=>{
        const response = await request(app)
            .post(endpointUrl)
            .send({"title": "missing required attribute"}); 
            expect(response.status).toBe(500);
    })

    it('GET ${endpointUrl} : should return all todos', async ()=>{
        const response = await request(app)
            .get(endpointUrl);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0].title).toBeDefined();
        expect(response.body[0].done).toBeDefined();


            
    })
})
