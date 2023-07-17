import { GET_ALL, GET_DIETS, FILTER_DIET, ORDER_AZ, ORDER_BY_DB_API, FILTER_SCORE, GET_BY_ID, GET_BY_NAME, MORE_DETAIL, ADD_FAV, REMOVE_FAV, POST_RECIPE } from "./actionType";
import axios from 'axios'

export const getAll = () => {
    return async function (dispatch) {
        let aux = await axios('http://localhost:3001/recipes')

        return dispatch({ type: GET_ALL, payload: aux.data })
    }
}

export const getDiets = () => {
    return async function (dispatch) {
        let aux = await axios('http://localhost:3001/diets')

        return dispatch({ type: GET_DIETS, payload: aux.data })
    }
}

export const filterDiet = (payload) => {
    return { type: FILTER_DIET, payload: payload }
}

export const orderBy = (payload) => {
    return { type: ORDER_AZ, payload: payload }
}
export const orderBy_db_api = (payload) => {
    return { type: ORDER_BY_DB_API, payload: payload }
}
export const filterScore = (payload) => {
    return { type: FILTER_SCORE, payload: payload }
}

export const getDetail = (payload) => {

    return { type: GET_BY_ID, payload: payload }
}

export const getRecipeByName = (name) => {
    return async function (dispatch) {
        try {
           
            const getRecipe = await axios(`http://localhost:3001/recipes?name=${name}`)
            

            if(getRecipe.data.length === 21){
                return alert("No recipe found")
            }else{
                
                dispatch({ type: GET_BY_NAME, payload: getRecipe.data })
            }


            
            
      
        } catch (error) {
            console.log(error.message);

        }
    }
}

export const moreDetail=(payload)=>{
    return{type: MORE_DETAIL, payload:payload}
}

export const addFav = (payload) => {
    return { type: ADD_FAV, payload: payload }
}

export const removeFav = (payload) => {
    return { type: REMOVE_FAV, payload: payload }
}

export const createRecipe = (payload) => {
    return async function (dispatch) {
        await axios.post("http://localhost:3001/recipes", payload)

    }
};