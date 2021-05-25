import Router from 'express';
import input from '../controllers/inputController';

const inputRouter = Router();
inputRouter
  .get('/input1/:value', input.handleInputOne)
  .get('/input2/:value', input.handleInputTwo);

export default inputRouter;
