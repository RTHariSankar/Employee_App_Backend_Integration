const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    position:{
        type:String,
        required:true
    },

    salary:{
        type:Number,
        required:true
    },


    collection: 'employee_list'

});

const employeeModel = mongoose.model('Employee',employeeSchema);
module.exports = employeeModel;