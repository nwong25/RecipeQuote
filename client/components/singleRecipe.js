import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchRecipes, getData, postRecipeCost} from '../store/recipe'
import {fetchFood} from '../store/food'
import SingleIngredient from './singleIngredient'

// const selectedRecipe = {
//   recipe: {
//     label: 'Chicken Teriyaki',
//     image:
//       'https://www.edamam.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg',
//     ingredientLines: [
//       '1/2 cup (125ml) mirin',
//       '1/2 cup (125ml) soy sauce',
//       'One 2-inch (5cm) piece of fresh ginger, peeled and grated'
//     ]
//   }
// }

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
  'medium',
  'optional',
  'ground'
]

export class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.addIngredient = this.addIngredient.bind(this)
    this.parentHandleChange = this.parentHandleChange.bind(this)
    this.parentClear = this.parentClear.bind(this)
  }
  componentDidMount() {
    this.props.loadFood()
  }
  addIngredient(ingredient, price) {
    this.setState({
      [ingredient]: price
    })
    this.props.postRecipeCost(this.state)
  }

  parentHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  parentClear(item) {
    this.setState({
      [item]: ''
    })
  }

  render() {
    console.log('whaaa', this.state)
    const selectedRecipe = this.props.recipe[this.props.match.params.idx]
    let allCost = Object.values(this.state).reduce((basket, currentValue) => {
      basket = basket + Number(currentValue)
      return basket
    }, 0)

    return (
      <div className="single-recipe-container">
        <div className="wrapper">
          <h2 className="ingredient-name">{selectedRecipe.recipe.label}</h2>
          <div className="image-div">
            <img
              className="single-recipe-image"
              src={selectedRecipe.recipe.image}
            />
          </div>
          <table id="table">
            <thead>
              <tr>
                <th className="table-label">Ingredients</th>
                <th className="table-label">Estimated Initial Cost</th>
              </tr>
            </thead>
            {selectedRecipe.recipe.ingredientLines.map(ingredient => {
              return (
                <SingleIngredient
                  key={ingredient}
                  onClick={this.onClick}
                  ingredient={ingredient}
                  addIngredient={this.addIngredient}
                  parentHandleChange={this.parentHandleChange}
                  parentClear={this.parentClear}
                />
              )
            })}
          </table>
          <div className="total-cost">
            <h3>Estimated Total Cost ${allCost.toFixed(2)}</h3>

            <div className="disclaimer">
              Please note ingredient prices may vary based on store and location
            </div>
            <div className="div-button">
              <a href={selectedRecipe.recipe.url}>
                <button className="visit-recipe">
                  See Recipe Instructions
                </button>
              </a>
            </div>
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
