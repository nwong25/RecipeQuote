import React from 'react'
import {connect} from 'react-redux'
import SearchBar from './searchBar'

const Navbar = () => (
  <div className="nav-bar">
    <nav>
      <SearchBar />
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */

export default connect(null, null)(Navbar)
