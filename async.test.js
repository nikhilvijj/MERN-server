const {fetchData,MyData} = require('./test/async');

test('Callback Data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(err){done(err);}
    }
    fetchData(callback);
})

test('Callback Mydata',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001);
            done();
        }catch(err){done(err);}

    }
    MyData(callback);
})


test('Mocking call back function',done=>{
    const MockFunction=jest.fn(data=>{
        expect(data).toBe('admin');
        //console.log('MOCK FUNCTION')
        done();
    })
    fetchData(MockFunction);
})