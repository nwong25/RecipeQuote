import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchRecipes, getData} from '../store/recipe'

export class SearchBarResults extends Component {
  componentDidMount() {
    this.props.fetchRecipes(this.props.match.params.search)
  }

  render() {
    const recipes = this.props.recipe || []

    return (
      <div>
        <div className="result-container">
          <ul className="left-side">
            {recipes.map((recipe, idx) => {
              return (
                <div className="wrapper" key={recipe.recipe.url}>
                  <Link to={`/recipes/search/${idx}`}>
                    <div className="wrapper">
                      <h2 className="recipe-name">{recipe.recipe.label}</h2>
                      <img className="recipe-image" src={recipe.recipe.image} />
                      {/* <div className="ingredients">
                        {recipe.recipe.ingredientLines.map(
                          (ingredient, idx) => {
                            return <li key={idx}>{ingredient}</li>
                          }
                        )}
                      </div> */}
                    </div>
                  </Link>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  recipeSearchInput: state.recipe.recipeSearchInput,
  recipe: state.recipe.recipes
})

const mapDispatchToProps = dispatch => ({
  fetchRecipes: title => dispatch(fetchRecipes(title))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBarResults)
)
