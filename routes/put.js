const express = require('express');
const routerPut = express.Router();


routerPut.use(express.json());
routerPut.use(express.urlencoded({extended:true}));

const employeeData = require('../model/model');


//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

routerPut.put('/:id',async(req,res)=>{

    try {

        let id = req.params.id
        console.log('id check',id);
        let updateData ={$set: req.body};
        const updated = await employeeData.findByIdAndUpdate(id,updateData, {new:true} );
        res.json(updated);

    } catch (error) {

        res.send('error');
        
    }
})

module.exports = routerPut;