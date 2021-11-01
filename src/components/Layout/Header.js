import React from 'react'
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import { HeaderButton } from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        React Meals
        <HeaderButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img alt='meals' src={meals}/>
      </div>
    </React.Fragment>
  )
}

export default Header