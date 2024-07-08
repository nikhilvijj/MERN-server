const { Query } = require('mongoose');
const User=require('./model/userSchema');//parent
const { query } = require('express');

//define our resolver
const resolvers={
    Query:{
        getUser:async(_,{id})=>{
            return await User.findById(id);
        },
        getUsers:async()=>{
            return await User.find();
        },
        searchUsers:async(_,{name})=>{
            return await User.find({name:new RegExp(name,'i')})

        },
    },
    Mutation:{
        createUser: async (_,{input})=>{
            const newUser = new User(input);
            return await newUser.save();
        },
        changePass:async(_,{id,password})=>{
            return await User.findByIdAndUpdate(id,{password:password});
        },
        updateUser: async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input);
        },
        deleteUser: async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        },
},
    User:{
        email:(parent)=>parent.email || '',
    },
};
module.exports=resolvers;