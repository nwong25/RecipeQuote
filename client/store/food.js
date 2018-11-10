import axios from 'axios'

const initialState = []

const GET_ALL_FOOD = 'GET_ALL_FOOD'

const getAllFood = foods => ({
  type: GET_ALL_FOOD,
  foods
})

export const fetchFood = () => async dispatch => {
  try {
    const response = await axios.get('/api/foods')
    const allFood = response.data
    const action = getAllFood(allFood)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const food = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FOOD: {
      return action.foods
    }
    default:
      return state
  }
}
