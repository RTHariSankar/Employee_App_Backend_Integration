const express = require('express');
const routerPost = express.Router();


routerPost.use(express.json());
routerPost.use(express.urlencoded({extended:true}));

const employeeData = require('../model/model');


//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

routerPost.post('/employeelist', async(req,res)=>{

    try {
        
        console.log(req.body);
        let item = req.body;
        const saveData = await employeeData(item);
        saveData.save();
        res.send('success');

    } catch (error) {
        
        console.log(error);
        res.send('error');

    }

})

module.exports = routerPost;