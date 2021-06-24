import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsvxI-cGsF7dSoYBmfQ3ufH76ekG7d9FZTA&usqp=CAU' alt='logo' />
    </header>
  )
}

export default Header;