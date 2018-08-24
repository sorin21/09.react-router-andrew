import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from './Header.scss';


const Header = () => (
  <header className={classes.Container}>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName={classes.isActive}>Dashboard</NavLink>
    <NavLink to="/add" activeClassName={classes.isActive}>Add Expense</NavLink>
    {/* <NavLink to="/edit" activeClassName={classes.isActive}>Edit Expense</NavLink> */}
  </header>
);

export default Header;