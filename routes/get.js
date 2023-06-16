const express = require('express');
const routerGet = express.Router();


routerGet.use(express.json());
routerGet.use(express.urlencoded({extended:true}));

const employeeData = require('../model/model');


//TODO: get data from db  using api '/api/employeelist'


routerGet.get('/employeelist', async(req,res)=>{

    try {
        
        let data = await employeeData.find();
        res.send(data);

    } catch (error) {
        
        console.log(error);
        res.send('error');

    }
})


//TODO: get single data from db  using api '/api/employeelist/:id'


routerGet.get('/employeelist/:id', async (req, res) => {

    try {

      const id = req.params.id;
      const data = await employeeData.findById(id);
  
      if (!data) {
        return res.status(404).send('Employee not found');
      }
  
      res.send(data);

    } catch (error) {

      console.log(error);
      res.status(500).send('Error retrieving employee data');
    }
    
  });


module.exports = routerGet;