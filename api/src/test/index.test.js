const app = require("../app")

const session = require("supertest") 

const request = session(app) 
// aca se esta guarando un objeto con una ano de {get,post} sin necesidad de levantarlo
//http://localhost:3001/rickandmorty/character/all
//http://localhost:3001/rickandmorty/character/:id
//http://localhost:3001/rickandmorty/favorite

// ASYNC por que cuando lo pide el cliente lo hace con promesas

const char = {
    id:1,
    status: "alive",
    name: "",
    species: "",
    origin: "",
    image: "",
    gender:"",
    location:""
}


describe("Test Routes",()=>{
    describe("Test GET Characters by Id (in params) ",()=>{
    it("Response status 200 in route /character/:id ",()=>{
        request.get("/rickandmorty/character/1").then((res)=>{
            expect(res.statusCode).toBe(200)
        })
    })
    })

    //retorna el characater{}

    describe("Test POST favorite by body ",()=>{
        it("Response Character in route /character/:id ",()=>{
            request.get("/rickandmorty/character/1").then((res)=>{
                expect(res.body).toEqual(char)
            })
        })
    
    })
    //retorna myFavorites[]

    it("Response status 200 in route /character/:id ",()=>{
        request.get("/rickandmorty/character/1").then((res)=>{
            expect(res.statusCode).toBe(200)
        })
    })
    

    

})