import React, {Component} from 'react'
import {connect} from 'react-redux'
import {typeSearchInput, fetchRecipes, getData} from '../store/recipe'
import {withRouter, Link} from 'react-router-dom'

export class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      recipeSearchInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.props.typeSearchInput(this.state.recipeSearchInput)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.typeSearchInput(this.state.recipeSearchInput)
    this.props.fetchRecipes(this.state.recipeSearchInput)
    this.setState({
      recipeSearchInput: ''
    })
    this.props.history.push(`/${this.state.recipeSearchInput}`)
  }

  render() {
    const {recipeSearchInput} = this.state
    return (
      <div>
        <form id="search-bar" onSubmit={this.handleSubmit}>
          <div className="search-bar-form">
            <h1 className="recipe-title">Recipe Quote</h1>

            <input
              className="nav-bar-textbox"
              type="text"
              name="recipeSearchInput"
              value={recipeSearchInput}
              onChange={this.handleChange}
              placeholder="Find A Recipe Now"
            />
            <button className="nav-search-btn" type="submit">
              Search
            </button>
            <Link to="/" className="links">
              Home
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipeSearchInput: state.recipe.recipeSearchInput,
    recipe: state.recipe.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    typeSearchInput: input => dispatch(typeSearchInput(input)),
    fetchRecipes: query => dispatch(fetchRecipes(query)),
    getData: () => dispatch(getData())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
)
