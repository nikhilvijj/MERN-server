const mongoose = require('mongoose')
const { describe } = require('node:test')

describe('MongoDB Connected',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://nikhilvijj:manager@cluster0.btrxovb.mongodb.net/'
        await mongoose.connect(url)
    })
    //call test case inside describe and below beforeall
    test('MongoDb connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})