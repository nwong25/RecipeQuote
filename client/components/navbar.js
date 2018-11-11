import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchBar from './searchBar'

const Navbar = () => (
  <div className="nav-bar">
    <nav>
      <h1 className="recipe-title">Recipe Quote</h1>
      <br />
      <div>
        <SearchBar />
      </div>
      <Link to="/" className="links">
        Home
      </Link>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */

export default connect(null, null)(Navbar)
