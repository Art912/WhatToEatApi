import {Router} from "express";
import {create,update, getById, getAll, remove } from "../ingredient.controller";

const ingredientRouter = Router();

ingredientRouter.post('/', create);
ingredientRouter.put('/:id', update);
ingredientRouter.get('/:id', getById);
ingredientRouter.get('/', getAll);
ingredientRouter.delete('/:id', remove);


export default ingredientRouter;
