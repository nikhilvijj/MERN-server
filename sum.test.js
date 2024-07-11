const sum=require('./test/sum')


test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
})

test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})

test('Value is null',()=>{
    const n= null;
    expect(n).toBeNull(); 
})

test('Value is Defined',()=>{
    const a = 1;
    expect(a).toBeDefined();
})

test('Value is Truth',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})

test('Value is false',()=>{
    const bool=false
    expect(bool).toBeFalsy();
})