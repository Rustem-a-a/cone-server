import express from 'express'
import cors from 'cors'
import coordinatesRouter from "./routes/coordinatesRouter.js";
import 'dotenv/config'

const app= express();
app.use(express.json());
app.use(cors(
    {
        credentials:true,
        origin:  process.env.URL_FRONT
    }
));
app.use('/',coordinatesRouter);
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