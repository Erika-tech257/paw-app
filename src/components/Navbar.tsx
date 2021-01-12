import { Component } from 'react'
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
import Logout from './Logout'

interface NavProps {
  clearToken: () => void
}

type NavbarComp = {
  Home: string;
  About: string;
  Posts: string;
  Contact: string;
}
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

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
        <nav>
          <Link href="#" onClick={preventDefault}>
            Home
          </Link>
          <Link href="#" onClick={preventDefault} variant="body2" >
            {/* {'color="inherit"'} */}
            About
          </Link>
          <Link href="#" onClick={preventDefault} variant="body2">
            {/* {'variant="body2"'} */}
            Posts
          </Link>
          <Link href="#" onClick={preventDefault} variant="body2">
            {/* {'variant="body2"'} */}
            Contact
          </Link>
          <Logout clearToken={this.props.clearToken} />

        </nav>
      </div>
    )
  }
}
export default Navbar;