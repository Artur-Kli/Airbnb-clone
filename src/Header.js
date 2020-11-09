import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Button } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import './Header.css'
import Search from './Search'



const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="header">
      <Link to="/">
        <img 
          className="header__icon" 
          src="https://www.travelweekly-asia.com/uploadedImages/Industry/Hotels/airbnb%20190305.jpg?n=6983" 
          alt="" 
        />
      </Link>
      <div className="header__search">
        <Button className="header__searchButton" variant="outlined" onClick={() => setShowSearch(!showSearch)}>
          <div className="header__searchText">{showSearch ? "Спрятать поиск" : "Начать поиск"}</div>
          <SearchIcon className="header__searchIcon" />
        </Button>
          {showSearch && <Search />}
      </div>
      <div className="header__right">
        <p>Сдайте жилье</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
