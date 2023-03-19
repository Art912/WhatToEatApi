import {Router} from "express";
import tobaccoRouter from "./tobacco.router";
import ingredientRouter from "./ingredient.router";

export const baseRouter = Router();

baseRouter.use('/tobacco', tobaccoRouter);
baseRouter.use('/ingredient', ingredientRouter);
