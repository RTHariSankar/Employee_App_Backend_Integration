const express = require('express');
const routerPut = express.Router();

routerPut.use(express.json());
routerPut.use(express.urlencoded({ extended: true }));

const employeeData = require('../model/model');

// TODO: Update an employee's data from the database using the API '/api/employeelist/:id'
// Request body format: { name: '', location: '', position: '', salary: '' }

routerPut.put('/employeelist', async(req,res)=>{

    try {
        const id = req.body._id;
        let updateData = {$set: req.body};
        const updated = await employeeData.findByIdAndUpdate(id,updateData);
        res.send('Updated successfully');

    } catch (error) {
     
        console.log(error);
        res.send('error');

    }

})


module.exports = routerPut;