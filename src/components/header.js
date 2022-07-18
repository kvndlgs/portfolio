import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kd from '../images/kd.svg'


const StyledMenu = () => {
  return (
    <div>
       <Link to="/projects"> PROJECTS </Link>
       <Link to="/contact">CONTACT</Link> 
    </div>
  )
}

const Header = () => (
  <header>
    <StyledMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
