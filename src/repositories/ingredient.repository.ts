import ingredientSchema from "../schemas/ingredient.schema";
import moment from "moment";
import {CreateIngredientDto} from "../models/ingredient/create-ingredient.dto";
import {UpdateIngredientDto} from "../models/ingredient/update-ingredient.dto";


const create = async (body: CreateIngredientDto) => {
    body.creationDate = moment().format("MM/DD/YYYY, HH:mm:ss");
    await ingredientSchema.create(body);
}

const update = async (id: string, body: UpdateIngredientDto) => {
    await ingredientSchema.findByIdAndUpdate(id, body);
}

const getById = async (id: string) => {
    const a = await ingredientSchema.findById(id);
    return a;
}

const getAll = async () => {
    // return await ingredientSchema.find();
    const a = await ingredientSchema.find();
    return a;
}
const remove = async (id: string) => {
    await ingredientSchema.findByIdAndDelete(id);
}

export default {create, update, getById, getAll, remove};
