import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from "./routes/routes";
import sequelize from "./configs/sequelize";
dotenv.config();

const app:Express = express();
const port = process.env.PORT;

app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize;

app.use("/api", routes);
app.get('/', (req:Request, res:Response) => { return res.status(200).json({message:""})});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
