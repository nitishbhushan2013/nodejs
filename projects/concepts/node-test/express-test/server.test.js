const request = require("supertest");
const app = require("./server").app;

describe("get /", ()=>{
 
    it("should display hello world", (done) => {
        request(app)
         .get("/")
        .expect("Hello World!!!")
        .end(done);
    });
})
