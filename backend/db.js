const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://aa_dy_aa:Riyacluster04@@cluster0.xwl0fm3.mongodb.net/?appName=Cluster0'
mongoose.connect(mongoURI, ()=>{
    console.log("Connected to MongoDB");
});