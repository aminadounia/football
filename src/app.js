import express from 'express';//grace au module
import helmet from 'helmet'; //securite 
//import req from 'express/lib/request';
//import router from './routers/index.js'
import "./core/db.js";
const port=3000;
const app = express();//creer un serveur
//si on recoie http req de la path '/' alors la la reponse est dans res.send
//(req,res) dans ce cas est une fonction annonyme 
//app.get c pour l'orientation des req
app.get('/',(req,res)=>{
    res.send("Hello word!");
})

//const router=express.Router()  //instance d'une classe Router c pour crrer un chemin pour une  path

app.use(helmet());
app.listen(port,()=>
{
    console.log(`Server listening on port ${port}`);
})