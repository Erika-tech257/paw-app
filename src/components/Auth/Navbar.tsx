import { Component } from 'react'




import Logout from './Logout'
import './NavBar.css'

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
       
        <h1 className= "MainName">
          Home Bound Paws</h1>
        <nav>
          <Logout clearToken={this.props.clearToken} />

        </nav>
      </div>
    )
  }
}
export default Navbar;