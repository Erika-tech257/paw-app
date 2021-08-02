import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logout from './Logout'
import './NavBar.css'
// import News from '../Auth/News'
// import Box from '@material-ui/core/Box';

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
        {/* <AppBar position = "static"  color="primary">
          <Toolbar>
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
          display = "block"
          top="20px"
          width="300px"
          left="10px">
          <News />
        </Box> */}

<div className="mainDiv">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={""} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={""}>
            Home Bound Paws
          </Typography>
          <Logout clearToken={this.props.clearToken} />
        </Toolbar>
      </AppBar>
    </div>
      </div>
    )
  }
}
export default Navbar;