import axios from 'axios'

const initialState = {
  recipes: [],
  recipeSearchInput: '',
  recipeCost: {}
}

const GET_ALL_DATA = 'GET_ALL_DATA'
const TYPE_SEARCH_RECIPE = 'TYPE_SEARCH_RECIPE'
const GET_RECIPES = 'GET RECIPES'
const POST_RECIPE_COST = 'POST_RECIPE_COST'
const GET_RECIPE_FOOD_COST = 'GET_RECIPE_FOOD_COST'

export const getData = () => ({
  type: GET_ALL_DATA
})
export const typeSearchInput = input => ({
  type: TYPE_SEARCH_RECIPE,
  input
})

export const getRecipes = query => ({
  type: GET_RECIPES,
  query
})

export const postRecipeCost = newIngredient => ({
  type: POST_RECIPE_COST,
  newIngredient
})

export const getRecipeFoodCost = costs => ({
  type: GET_RECIPE_FOOD_COST,
  costs
})

export const fetchRecipes = query => async dispatch => {
  try {
    const response = await axios.get(`api/recipes/${query}`)
    const recipes = response.data
    const action = getRecipes(recipes)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const recipe = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA: {
      return {...state}
    }
    case TYPE_SEARCH_RECIPE: {
      return {...state, recipeSearchInput: action.input}
    }
    case GET_RECIPES: {
      return {...state, recipes: action.query.hits}
    }
    case POST_RECIPE_COST: {
      return {
        ...state,
        recipeCost: action.newIngredient
      }
    }

    default:
      return state
  }
}
