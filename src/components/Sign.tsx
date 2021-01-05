import React from 'react'
import './Sign.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { type } from 'os';

// can also use interface/glossary
type SignState = {
  email: string;
  password: string;
  username: string;
  login: boolean;
  
}

class Sign extends React.Component<{},SignState>{
  constructor(props:any) {
    super(props)

    this.state = {
      email: "",
      password: "",
      username: "",
      login: true,
      
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('Was Clicked');
    this.setState({email: ""})
    this.setState({password: ""})
    this.setState({username: ""})
    this.setState({login:true})
    
  }



// updates State
// switchNameHandler = () => {
//   console.log('Was Clicked');
//   this.setState({email: ""})
//   this.setState({password: ""})
//   this.setState({username: ""})
// }

// componentDidMount() { **Component mounts when page is loaded, but this app want the fetch to call the api after clicking login or signup button
//   fetch('http://localhost:5000/user/signup')
// }

// place api calls on componentDidMount or on an event, event handling logic
handleSubmit(e:any){
  e.preventDefault();


  // let userData = {user: {
  //   email: userEmail, password:userPass, username:userName}}

  fetch('http://loclahost:5000/user/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})
})
.then(r => r.json())
// ****Figure out props.updateToken*********************************************
// .then(rObj => props.updateToken(rObj.sessionToken, 
//   rObj.user.id)); 
}
  render() {
    return (

      <Container component="main" maxWidth="xs">
        <h1>Home Bound Paws</h1>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={this.state.email}
          onChange = {(e) => {
            this.setState({
              email:e.target.value
            })
            console.log(this.state.email);
          }}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange = {(e) => {
            this.setState({
              password:e.target.value
            })
            console.log(this.state.password)
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          type="username"
          id="username"
          autoComplete="username"
          value={this.state.username}
          onChange = {(e) => {
            this.setState({
              username:e.target.value
            })
            console.log(this.state.username)
          }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button 
          type="submit"
          onClick = {this.handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className="{classes.submit}"
        >
          Sign In
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
              </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {/* Put toggle button on link to switch to sign up and use ternary */}
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    );

    }
  }
  
export default Sign;