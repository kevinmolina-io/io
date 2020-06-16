import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">KevMo</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Work</Link>
            {/* <a to="/contact">Contact</a> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
