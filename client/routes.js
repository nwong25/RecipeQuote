import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import SearchBarResults from './components/searchBarResults'
import SingleRecipe from './components/singleRecipe'
import MainSearchBar from './components/mainSearchBar'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/recipes/search/:idx" component={SingleRecipe} />
        <Route exact path="/:search" component={SearchBarResults} />
        <Route path="/" component={MainSearchBar} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    recipeSearchInput: state.recipe.recipeSearchInput,
    recipe: state.recipe.recipes
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, null)(Routes))
