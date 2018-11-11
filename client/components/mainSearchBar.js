import React, {Component} from 'react'
import {connect} from 'react-redux'
import {typeSearchInput, fetchRecipes, getData} from '../store/recipe'
import {Link, Redirect, withRouter} from 'react-router-dom'

export class MainSearchBar extends Component {
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
      <div className="container">
        <div className="innerContainer" />
        <form id="main-search-bar" onSubmit={this.handleSubmit}>
          <div className="main-search-bar-form">
            <input
              className="form-control-textbox"
              type="text"
              name="recipeSearchInput"
              value={recipeSearchInput}
              onChange={this.handleChange}
              placeholder="Find A Recipe Now"
            />
            <br />
          </div>
          <button className="search-btn" type="submit">
            Search
          </button>
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
  connect(mapStateToProps, mapDispatchToProps)(MainSearchBar)
)
