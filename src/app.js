import express  from "express";
import morgan from "morgan";
import router from "./Routes/index.routes.js";
import path from 'path';
import { __dirname } from "./path.js";
import { engine } from "express-handlebars";

const app = express();



//middlewares 
app.use(morgan("dev"));
app.use(express.json());
//static
app.use(express.static(path.join(__dirname,'public')));
//engine
app.set('views',path.join(__dirname,'views') );
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
    
}));
app.set('view engine','.hbs');


//Routes
app.use("/",router)




export default app;