import * as Types from '../constants/index';

export const actSelectMeal= (meal) => {
    return {
        type: Types.SELECT_MEAL,
        meal
    }
}
export const actSelectPeople= (people) => {
    return {
        type: Types.SELECT_PEOPLE,
        people
    }
}
export const actSelectRestaurant = (restaurant) =>{
    return{
        type: Types.SELECT_RESTAURANT,
        restaurant
    }
}
export const actSelectFood = (name,count) =>{
    var food = {};
    food.name = name;
    food.count = count;
    return{
        type: Types.SELECT_FOOD,
        food
    }
}

export const actResetValue = () =>{
    return{
        type : Types.RESET_VALUE
    }
}

export const actDeleteFood = (food) =>{
    console.log(food);
    return{
        type:Types.DELETE_FOOD ,
        food
    }
}
