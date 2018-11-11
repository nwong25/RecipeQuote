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

let ingred = {}

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
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.loadFood()
    // {
    //   selectedRecipe.recipe.ingredientLines.map((ingredient, idx) => {
    //     const words = ingredient.toLowerCase().split(' ')

    //     const referenceWord = words
    //       .filter(word => {
    //         return !doNotInclude.includes(word) && !/\d/.test(word)
    //       })
    //       .join(' ')

    //     const foodLookUp = this.props.food
    //       .reduce((basket, foodItem) => {
    //         if (foodItem.food.includes(referenceWord)) {
    //           basket.push(foodItem.price)
    //         }
    //         return basket
    //       }, [])
    //       .join('')
    //       .slice(1, 5)
    //     ingred[ingredient] = foodLookUp
    //     this.props.postRecipeCost((ingred[ingredient] = foodLookUp))
    //   })
    // }
    // this.setState(ingred)
  }
  handleChange(event) {
    ingred[event.target.name] = event.target.value
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.postRecipeCost(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: ''
    })
  }

  render() {
    // const selectedRecipe = this.props.recipe[this.props.match.params.idx]
    const foodList = this.props.food
    let totalCost = []
    let stateTotal
    let allCost
    console.log('whattttttup', ingred)
    console.log('the stateeeee', this.state)
    console.log('recipeCost', this.props.recipeCost)
    {
      selectedRecipe.recipe.ingredientLines.map((ingredient, idx) => {
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

        ingred[ingredient] = foodLookUp
      })
    }

    return (
      <div className="container">
        <div className="wrapper">
          <h2 className="ingredient-name">{selectedRecipe.recipe.label}</h2>
          <div className="image-div">
            <img className="recipe-image" src={selectedRecipe.recipe.image} />
          </div>
          <table id="table">
            <thead>
              <tr>
                <th className="table-label">Ingredients</th>
                <th className="table-label">Estimated Cost</th>
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
                  totalCost.push(Number(foodLookUp)))
                : // ((price = (
                  //   <form id="search-bar" onSubmit={this.handleSubmit}>
                  //     <div className="search-bar-form">
                  //       <input
                  //         className="form-control textbox"
                  //         type="text"
                  //         value={this.state.ingredient}
                  //         name={ingredient}
                  //         onChange={this.handleChange}
                  //         placeholder="Enter Estimated Price"
                  //       />
                  //     </div>
                  //   </form>
                  // )),
                  (price = (
                    <div className="search-bar-form">
                      <input
                        className="form-control textbox"
                        type="text"
                        name={ingredient}
                        value={this.state.ingredient}
                        onChange={this.handleChange}
                        placeholder="Enter Estimated Price"
                      />
                    </div>
                  ))

              stateTotal = Object.values(this.state).reduce(
                (basket, currentValue) => {
                  basket = basket + Number(currentValue)
                  return basket
                },
                0
              )

              allCost = totalCost.reduce((basket, currentValue) => {
                basket = basket + currentValue
                return basket
              }, stateTotal)
              console.log('the real total', allCost)
              return (
                <tbody key={ingredient}>
                  <tr>
                    <td className="info">{ingredient}</td>
                    <td className="info">{price}</td>
                    <td>
                      <button
                        onClick={() => this.setState({[ingredient]: ''})}
                        className="x-button"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
          </table>
          <p />
          <div className="total-cost">
            <h3>Estimated Total Cost ${allCost.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  recipeSearchInput: state.recipe.recipeSearchInput,
  recipe: state.recipe.recipes,
  food: state.food,
  recipeCost: state.recipe.recipeCost
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
