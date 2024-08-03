import { connect, set } from "mongoose";
import { UserModel } from "../model/user.model.js";
import { FoodModel } from "../model/food.model.js";
import { sample_users } from "../data.js";
import { sample_foods } from "../data.js";
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true)

export const dbconnect = async () => {
    try {
        connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        await seedUsers();
        await seedFoods();

        console.log('Connect Successfully ');
    } catch (error) {
        console.log("Error Connecting To MongoDB", error);
    }
};

async function seedUsers(){
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0){
        console.log('Users Seed is already done!');
        return;
    }
    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log("User Seed is Done!");
}

async function seedFoods(){
    const foods = await FoodModel.countDocuments();
    if(foods > 0){
        console.log('Foods seed is already done!');
        return;
    }
    for(let food of sample_foods){
        food.imageUrl = `/img/${food.imageUrl}`
        await FoodModel.create(food);
    }

    console.log("Foods Seed is Done!");
}