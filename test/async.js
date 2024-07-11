function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },3000)
}
module.exports={fetchData,MyData};