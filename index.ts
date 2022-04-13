import express from 'express';
import mongoose from 'mongoose';  
import { MongoRUI } from './config/key';  
const items=require('./routes/api/items')    

const app:any = express();

app.use(express.json());

mongoose
           .connect(MongoRUI)
           .then( ()=> console.log('MongoDB Connected ...'))
           .catch( (err: String)=> console.log(err) ) ;
app.use('/api/items', items);

const port:any= process.env.PORT || 4000 ;
app.listen(port, ()=> console.log(`Server started on port ${port}`) );
 
 



