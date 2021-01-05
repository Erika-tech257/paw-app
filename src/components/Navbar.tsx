import { Component } from 'react'
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

interface NavbarProps  {
    Home: string;
    About: string;
    Posts: string;
    Contact: string;
}
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

 class Navbar extends Component<NavbarProps> {
   
    


    render() {
        return (
          <nav>
    <Link href="#" onClick={preventDefault}>
        Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
          </nav>
        )
    }
}
export default Navbar;