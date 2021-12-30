import express from 'express';
import path from 'path';
import { userRouter } from './routes/user';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: `${process.env.NODE_ENV}.env` });

//init middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//test middleware
app.use((req, res, next) => {
  console.log('Middleware');
  console.log(process.env.NODE_ENV);
  console.log(process.env.firstname);
  console.log(process.env.lastname);
  next();
});

app.use(express.static(path.join(__dirname, './build')));

//Define Routes
app.use('/api', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
