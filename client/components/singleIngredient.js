import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchRecipes, getData, postRecipeCost} from '../store/recipe'
import {fetchFood} from '../store/food'

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

export class SingleIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      [props.ingredient]: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.clear = this.clear.bind(this)
  }
  async componentDidMount() {
    await this.props.loadFood()
    await this.addItem()
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.postRecipeCost(this.state)
    this.props.parentHandleChange(event)
  }
  clear(item) {
    this.setState({
      [item]: ''
    })
    this.props.parentClear(item)
  }

  addItem() {
    const foodList = this.props.food
    const ingredient = this.props.ingredient
    const words = ingredient.toLowerCase().split(' ')
    const referenceWord = words
      .filter(word => {
        return !doNotInclude.includes(word) && !/\d/.test(word)
      })
      .join(' ')
    foodList.forEach(foodItem => {
      if (foodItem.food.includes(referenceWord)) {
        this.setState({[ingredient]: `${foodItem.price.slice(1, 5)}`})
        this.props.addIngredient(ingredient, `${foodItem.price.slice(1, 5)}`)
      }
    })
  }

  render() {
    const ingredient = this.props.ingredient
    return (
      <tbody key={ingredient}>
        <tr>
          <td className="info">{ingredient}</td>
          <td className="info">
            <div className="price-input">
              $<input
                className="recipe-price"
                type="text"
                name={ingredient}
                value={this.state[ingredient]}
                onChange={this.handleChange}
                placeholder={
                  this.state.ingredient ? this.state.ingredient : 'Enter Price'
                }
              />
            </div>
            <button
              id="remove-cost-btn"
              onClick={() => this.clear(ingredient)}
              className="clear-button"
            >
              Already Have
            </button>
          </td>
        </tr>
      </tbody>
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
  connect(mapStateToProps, mapDispatchToProps)(SingleIngredient)
)
