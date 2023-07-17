import {
    GET_ALL, GET_DIETS, FILTER_DIET, ORDER_AZ, ORDER_BY_DB_API, FILTER_SCORE,
    GET_BY_ID, GET_BY_NAME, MORE_DETAIL, ADD_FAV,REMOVE_FAV, REMOVE
} from "./actionType";

const initialState = {
    foods: [],
    backup: [],
    diets: [],
    detail: {},
    moreDetails: [],
    favList: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL:
            return {
                ...state,
                foods: action.payload,
                backup: action.payload
            };
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            };
        case FILTER_DIET:
            const allRecipes = state.backup;
            const allRecipesFiltered = state.backup.filter((recipe) => recipe.diets.includes(action.payload));

            return {
                ...state,
                foods: action.payload === 'all' ? allRecipes : allRecipesFiltered
            };
        case ORDER_AZ:
            let allRec = state.backup
            let sortArr = action.payload === 'asc' ?
                state.backup.sort(function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (b.name > a.name) { return -1 }
                    return 0;
                }) :
                state.backup.sort(function (a, b) {
                    if (a.name < b.name) { return 1 }
                    if (b.name < a.name) { return -1 }
                    return 0;
                })
            return {
                ...state,
                foods: action.payload === 'all' ? allRec : [...sortArr]
            }

        case ORDER_BY_DB_API:
            const allGames_api_db = state.backup
            const filterCreate = action.payload === 'db' ? allGames_api_db.filter(item => item.createInDb) : allGames_api_db.filter(item => !item.createInDb)
            return {
                ...state,
                foods: action.payload === 'all' ? state.backup : filterCreate
            }

        case FILTER_SCORE:
            console.log(action.payload);
            console.log(state.foods);
            // let allRecipe = state.backup
            let sortA = action.payload === 'min' ?
                state.backup.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) { return 1 }
                    if (b.healthScore > a.healthScore) { return -1 }
                    return 0;
                }) :
                state.backup.sort(function (a, b) {
                    if (a.healthScore < b.healthScore) { return 1 }
                    if (b.healthScore < a.healthScore) { return -1 }
                    return 0;
                })
            return {
                ...state,
                foods: action.payload === 'all' ? state.backup : [...sortA]
            };


        case GET_BY_ID:
            let aux = state.backup;
            let idFilter = aux.find(item => item.id == action.payload)

            return {
                ...state,
                detail: idFilter
            }

        case GET_BY_NAME:
            return {
                ...state,
                foods: action.payload
            };
        case MORE_DETAIL:
            // let detailx = state.backup
            // let aux3 = detailx.filter(item => item.diets === action.payload)
            // let aux2 = detailx.filter(item=> item.diets.name === action.payload)

            // let aux4 = aux3.concat(aux2)

            return {
                ...state,
                
            }
        case ADD_FAV:
            return {
                ...state,
                favList: [...state.favList, action.payload],
            }
        case REMOVE_FAV:
            const favFilter = state.favList.filter(item=> item.id !== action.payload)  
            return{
                ...state,
                favList: favFilter
            }  
         

        default:
            return {
                ...state
            }
    }



}

export default reducer;