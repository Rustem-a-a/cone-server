import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app =express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const start = async()=>{
    try{
        app.listen(PORT,()=> {
            console.log('Server is running in port ' + PORT);
        })
    }
    catch (e){
        console.log(e);
    }
}
start();