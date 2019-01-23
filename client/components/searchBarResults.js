import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchRecipes} from '../store/recipe'

export class SearchBarResults extends Component {
  componentDidMount() {
    this.props.fetchRecipes(this.props.match.params.search)
  }

  render() {
    const recipes = this.props.recipe || []
    const upperCase = string => {
      return string.toUpperCase()
    }
    const titleCase = string => {
      var firstLetterRx = /(^|\s)[a-z]/g
      return string.replace(firstLetterRx, upperCase)
    }
    return (
      <div>
        <div className="result-container">
          <ul className="left-side">
            {recipes.map((recipe, idx) => {
              return (
                <div className="wrapper" key={recipe.recipe.url}>
                  <Link to={`/recipes/search/${idx}`}>
                    <div
                      className="wrapper"
                      style={{backgroundImage: `url(${recipe.recipe.image})`}}
                    >
                      <div className="recipe-box">
                        <div className="recipe-name">
                          {`${titleCase(recipe.recipe.label)}`}
                        </div>
                      </div>
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
