import React from 'react'
import './Sign.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

interface AcceptProps {
  updateToken: (token: string) => void;
}

// can also use interface/glossary
type SignState = {
  email: string;
  password: string;
  username: string;
  login: boolean;

}
// Props passes first then State Example (<{}, SignState)

class Sign extends React.Component<AcceptProps, SignState>{
  constructor(props:AcceptProps) {
    super(props)

    this.state = {
      email: "",
      password: "",
      username: "",
      login: true

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('Was Clicked');
    this.setState({ email: "" })
    this.setState({ password: "" })
    this.setState({ username: "" })
    this.setState({ login: true })

  }

  loginToggle = () => {
    this.setState({ login:false })
  }


  // updates State
  // switchNameHandler = () => {
  //   console.log('Was Clicked');
  //   this.setState({email: ""})
  //   this.setState({password: ""})
  //   this.setState({username: ""})
  // }
  // Effects are a components 'side effects'.  Effects are actions that occur when there is a state change. 
  // componentDidMount() { **Component mounts when page is loaded, but this app want the fetch to call the api after clicking login or signup button
  //   fetch('http://localhost:5000/user/signup')
  // }

  // place api calls on componentDidMount or on an event, event handling logic
    handleSubmit(e: any) {
    e.preventDefault();

    // let login = "string"

    // Sing up not working 500 error internal server, but login works
    let serverLink = 'http://localhost:5000'

    const url = `${serverLink}/user/${this.state.login ? 'login': 'signup'}`
    
    // const url = ('http://localhost:5000/user/login')
    let reqBody={
        user:{
          username: this.state.username, 
          password: this.state.password, 
          email: this.state.email
        }
    }
    fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody)
    })
      .then(r => r.json())
      .then(rObj => this.props.updateToken(rObj.sessionToken));
  }
  SignupForm = () => {
    if (this.state.login) {
      return null
    } else {
      return (
        <div>
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
            onChange={(e) => {
              this.setState({
                username: e.target.value
              })
              console.log(this.state.username)
            }}
          />
        </div>
      )
    }
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
          onChange={(e) => {
            this.setState({
              email: e.target.value
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
          onChange={(e) => {
            this.setState({
              password: e.target.value
            })
            console.log(this.state.password)
          }}
        />
        {this.SignupForm()}
       
        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          onClick={this.handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className="{classes.submit}"
        >
          {this.state.login ? "Sign In" : "Sign Up"}
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
              </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick=
              {this.loginToggle}>
              {this.state.login ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    );

  }
}


export default Sign;