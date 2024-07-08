const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const port = 3001
const url='mongodb+srv://nikhilvijj:manager@cluster0.btrxovb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())//parsing
mongoose.connect(url).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
StartServer();