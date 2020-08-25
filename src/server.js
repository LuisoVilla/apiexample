import express, {json} from 'express'

const app = express();

//Routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from  './routes/tasks.routes';

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);


export default app;