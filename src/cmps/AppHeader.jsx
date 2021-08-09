import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
  console.log(' AppHeader props: ', props);
  

  return (
    <div className="app-header">
      <nav>
        <NavLink activeClassName="active-nav" exact to="/" >Home</NavLink>
        <NavLink activeClassName="active-nav" to="/about" >About</NavLink>
      </nav>
    </div>
  )
}

export const AppHeader = withRouter(_AppHeader)
