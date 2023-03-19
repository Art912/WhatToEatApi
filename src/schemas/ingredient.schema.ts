import {model, Schema} from "mongoose";
import {Tobacco} from "../entities/tobacco";
import {Ingredient} from "../entities/ingredient";

const ingredientSchema = new Schema({
    name: {type: String, required: true},
    // _id: {type: String, required: true},
    creationDate: {type: String, required: true},
});

export default model<Ingredient>('Ingredients', ingredientSchema);
