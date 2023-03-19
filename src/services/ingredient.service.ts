import {CreateIngredientDto} from "../models/ingredient/create-ingredient.dto";
import {UpdateIngredientDto} from "../models/ingredient/update-ingredient.dto";
import ingredientRepository from "../repositories/ingredient.repository";

const create = async (body: CreateIngredientDto) => {
    await ingredientRepository.create(body);
}

const update = async (id: string, body: UpdateIngredientDto) => {
    await ingredientRepository.update(id, body);
}

const getById = async (id: string) => {
    return await ingredientRepository.getById(id);
}

const getAll = async () => {
    const a =  await ingredientRepository.getAll();
    return a;
}
const remove = async (id: string) => {
    await ingredientRepository.remove(id);
}

export default {create, update, getById, getAll, remove};

