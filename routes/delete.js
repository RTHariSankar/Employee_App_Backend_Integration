const express = require('express');
const routerDelete = express.Router();


routerDelete.use(express.json());
routerDelete.use(express.urlencoded({extended:true}));

const employeeData = require('../model/model');


//TODO: delete a employee data from db by using api '/api/employeelist/:id'

routerDelete.delete('/employeelist/:id', async(req,res)=>{

    try {
        
        let id = req.params.id;
        console.log('id check', id);
        let updateData = {$set: req.body};
        const updated = await employeeData.findByIdAndDelete(id);
        res.send('Deleted successfully');

    } catch (error) {
     
        console.log(error);
        res.send('error');

    }

})

module.exports = routerDelete;