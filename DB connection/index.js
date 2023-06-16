const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, {

    useNewUrlParser : true,
    useUnifiedTopology : true

})

.then(()=>{
    console.log('Mongo DB connection is established successfully')
})

.catch(
    (error) => console.log('Failed to connect to MongoDB:',error)
);