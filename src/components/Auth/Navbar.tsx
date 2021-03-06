import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import Logout from './Logout'
import './NavBar.css'
import News from '../Auth/News'
import { Container } from '@material-ui/core';





interface NavProps {
  clearToken: () => void
}

type NavbarComp = {
  Home: string;
  About: string;
  Posts: string;
  Contact: string;
}
// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

class Navbar extends Component<NavProps, NavbarComp>{
  constructor(props: NavProps) {
    super(props)

    this.state = {
      Home: "",
      About: "",
      Posts: "",
      Contact: ""

    }

  }



  render() {
    return (
      <div className="mainNav">
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className="Title" variant="h5" >
              Home Bound Paws
          </Typography>

          </Toolbar>
        </AppBar>
        <div className="logBtn">
          <Logout clearToken={this.props.clearToken} />
        </div>
        <Box
          position="relative"
          top="20px"
          width="500px"
          left="100px">
          <News />
        </Box>
      </div>
    )
  }
}
export default Navbar;