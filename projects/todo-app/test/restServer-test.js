const express =  require("express");
const expect = require("expect");
const request = require("supertest");

var {app} = require("./../restServer");
var {Todo} = require("./../models/todo");

//Write unit test
var topic = "mocha unit test"
describe('POST /todo',()=> {
    it('record should have saved in the db',(done)=>{
        request(app)
            .send({topic})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(topic);
                expect(res.body.text).toBeA('String');
            })
            .end((err, res)=>{
                if(err) {
                    console.log("Error details -->", err);
                    return done(err);
              
                }
                console.log("success details -->", res);
                done(res);    
            })
        // check the record in the Mongo DB 
       Todo.find({topic}).then((record)=>{
           console.log("content fetched from MongoDB--->", record);
            expect(record.topic).toBe(topic);
            done();
       }).catch((err)=> done(err));   
    });

    it('record should not have created with invalid data', (done)=>{
        request(app)
            .post('/todo')
            .send({})
            .expect(400)
            .end((err, res)=>{
                if(err)
                    return done(err);
                done(res);    
            })
    });
})
 
