import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from "./routes/routes";
import passport from "./configs/passport";

dotenv.config();

const app:Express = express();
const port = process.env.PORT;

app.use(passport.initialize());

app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


