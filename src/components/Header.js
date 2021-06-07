import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from '../StateProvider'

// All The Header Icons are here.....
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SearchIcon from '@material-ui/icons/Search'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import AddIcon from '@material-ui/icons/Add'

const Header = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header__left">
        <img 
        src="https://i.ibb.co/SBC5h1k/f-logo-RGB-Hex-Blue-512.png" 
        alt="fb-logo"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder='Search Facebook'/>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header