import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchRecipes, getData, postRecipeCost} from '../store/recipe'
import {fetchFood} from '../store/food'

const selectedRecipe = {
  recipe: {
    label: 'Chicken Teriyaki',
    image:
      'https://www.edamam.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg',
    ingredientLines: [
      '1/2 cup (125ml) mirin',
      '1/2 cup (125ml) soy sauce',
      'One 2-inch (5cm) piece of fresh ginger, peeled and grated'
    ]
  }
}

const doNotInclude = [
  'and',
  'of',
  'tablespoons',
  'tablespoon',
  'teaspoon',
  'teaspoons',
  'cup',
  'cups',
  '.lb',
  '.lbs',
  'pound',
  'pounds',
  'ounce',
  'ounces',
  'oz',
  'the',
  'tbsp',
  'tsp',
  'quarts',
  'pints',
  'qts',
  'pts',
  'preferably',
  'sifted',
  'to',
  'from',
  'handful',
  'removed',
  'pinch',
  'rinsed',
  'stems',
  'for',
  'at',
  'room temperature',
  'room',
  'temperature',
  'chopped',
  'shredded',
  'whole',
  'peeled',
  'cut',
  'uncooked',
  'freshly',
  'grated',
  '¼',
  '½',
  '¾',
  'grams',
  'stewed',
  'strained',
  'minced',
  'finely',
  'additional',
  'garnish',
  'large',
  'small',
  'medium'
]

export class SingleRecipe extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.loadFood()
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.postRecipeCost(this.state)
  }

  render() {
    // const selectedRecipe = this.props.recipe[this.props.match.params.idx]
    const foodList = this.props.food
    let totalCost = []
    let stateTotal
    let allCost
    return (
      <div className="sides">
        <ul className="left-side">
          <div className="wrapper">
            <h2>{selectedRecipe.recipe.label}</h2>
            <img className="recipe-image" src={selectedRecipe.recipe.image} />
            <table>
              <thead>
                <tr>
                  <td>Ingredients</td>
                  <td>Estimated Cost</td>
                </tr>
              </thead>
              {selectedRecipe.recipe.ingredientLines.map((ingredient, idx) => {
                const words = ingredient.toLowerCase().split(' ')

                const referenceWord = words
                  .filter(word => {
                    return !doNotInclude.includes(word) && !/\d/.test(word)
                  })
                  .join(' ')

                const foodLookUp = foodList
                  .reduce((basket, foodItem) => {
                    if (foodItem.food.includes(referenceWord)) {
                      basket.push(foodItem.price)
                    }
                    return basket
                  }, [])
                  .join('')
                  .slice(1, 5)

                let price

                const update = foodLookUp
                  ? ((price = `$${Number(foodLookUp).toFixed(2)}`),
                    totalCost.push(Number(foodLookUp)),
                    this.props.postRecipeCost({
                      [ingredient]: foodLookUp
                    }))
                  : // (price = (
                    //   <form id="search-bar">
                    //     <div className="search-bar-form">
                    //       <input
                    //         className="form-control textbox"
                    //         type="text"
                    //         name={foodLookUp}
                    //         onChange={this.handleChange}
                    //         placeholder="Enter Estimated Price"
                    //       />
                    //     </div>
                    //   </form>
                    // ))
                    (price = (
                      <form id="search-bar">
                        <div className="search-bar-form">
                          <input
                            className="form-control textbox"
                            type="text"
                            name={ingredient}
                            onChange={this.handleChange}
                            placeholder="Enter Estimated Price"
                          />
                        </div>
                      </form>
                    ))

                stateTotal = Object.values(this.state).reduce(
                  (basket, currentValue) => {
                    basket = basket + Number(currentValue)
                    return basket
                  },
                  0
                )

                console.log('actualpopulationcost', totalCost)

                allCost = totalCost.reduce((basket, currentValue) => {
                  basket = basket + currentValue
                  return basket
                }, stateTotal)
                console.log('the real total', allCost)
                return (
                  <tbody key={ingredient}>
                    <tr>
                      <td>{ingredient}</td>
                      <td>{price}</td>
                      <td>
                        <button className="x-button">X</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        </ul>
        <div>total cost ${allCost.toFixed(2)}</div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  recipeSearchInput: state.recipe.recipeSearchInput,
  recipe: state.recipe.recipes,
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  searching: title => dispatch(fetchRecipes(title)),
  initialLoad: () => dispatch(getData()),
  loadFood: () => dispatch(fetchFood()),
  postRecipeCost: newIngredient => dispatch(postRecipeCost(newIngredient))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleRecipe)
)

// {
//   selectedRecipe.recipe.ingredientLines.map((ingredient, idx) => {
//     const words = ingredient.split(' ')
//     const referenceWord = words
//       .filter(word => {
//         return !doNotInclude.includes(word) && !/\d/.test(word)
//       })
//       .join(' ')
//     console.log('reference word', referenceWord)
//     const test = foodList.filter(foodItem => {
//       if (foodItem.food.includes(referenceWord)) {
//         return foodItem.price.slice(0, 5)
//       }
//     })
//     console.log(test)
//     return <li key={idx}>{ingredient}</li>
//   })
// }
