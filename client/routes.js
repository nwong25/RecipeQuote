import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import SearchBarResults from './components/searchBarResults'
import SingleRecipe from './components/singleRecipe'
import searchBar from './components/searchBar'
import MainSearchBar from './components/mainSearchBar'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props
    console.log('routeeeeee', this.props)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/recipes/search/:idx" component={SingleRecipe} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
        {/* <Route path="/recipes/search/0" component={SingleRecipe} /> */}

        <Route exact path="/:search" component={SearchBarResults} />

        {/* {isLoggedIn && (
          <Switch> */}
        {/* Routes placed here are only available after logging in */}
        {/* <Route path="/home" component={UserHome} />
          </Switch>
        )} */}
        {/* Displays our Login component as a fallback */}
        <Route path="/" component={MainSearchBar} />
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    recipeSearchInput: state.recipe.recipeSearchInput,
    recipe: state.recipe.recipes,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
