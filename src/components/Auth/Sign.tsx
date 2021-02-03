import React from 'react'
import './Sign.css';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import APIURL from '../../environment'

interface AcceptProps {
  updateToken: (token: string) => void;
  updateUser: (username: string) => void

}

// can also use interface/glossary
interface SignState {
  email: string;
  password: string;
  username: string;
  login: boolean;
  emailError: string;
  passwordError: string;
  usernameError: string;

}
const initialState = {
  email: "",
  password: "",
  username: "",
  login: true,
  emailError: "",
  passwordError: "",
  usernameError: ""
}
// Props passes first then State Example (<{}, SignState)

class Sign extends React.Component<AcceptProps, SignState>{
  constructor(props: AcceptProps) {
    super(props)

    this.state = {
      email: "",
      password: "",
      username: "",
      login: true,
      emailError: "",
      passwordError: "",
      usernameError: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('Was Clicked');
    this.setState({ email: "" })
    this.setState({ password: "" })
    this.setState({ username: "" })
    this.setState({ login: true })

  }

  loginToggle = () => {
    this.setState({ login: !this.state.login })
  }


  // Effects are a components 'side effects'.  Effects are actions that occur when there is a state change. 
  // componentDidMount() { **Component mounts when page is loaded, but this app want the fetch to call the api after clicking login or signup button
  //   fetch('http://localhost:5000/user/signup')
  // }

  // place api calls on componentDidMount or on an event, event handling logic

  state = initialState

  validate = () => {
    let emailError = "";
    let passwordError = "";
    let usernameError = "";

    if (this.state.password?.length! < 5) {
      passwordError = 'Password must atleast be 5 characters';
    }

    if (!this.state.username) {
      usernameError = "Must provide a Username";
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Invalid Email';
    }
    if (emailError || usernameError || passwordError) {
      this.setState({ emailError, usernameError, passwordError });
      return false;
    }
    return true;
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state)
      this.setState(initialState)
    }

    // let serverLink = 'http://localhost:5000'

    // const url = `${serverLink}/user/${this.state.login ? 'login': 'signup'}`
    const url = `${APIURL}user/${this.state.login ? 'login' : 'signup'}`

    let reqBody = {
      user: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody)
    })
      .then(r => r.json())
      .then(rObj => {
        this.props.updateToken(rObj.sessiontoken)
        this.props.updateUser(rObj.user.username)
        console.log(rObj.user.username)
      });
  }
  SignupForm = () => {
    if (this.state.login) {
      return null
    } else {
      return (
        
        <div >
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
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.usernameError}
          </div>
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
        <div style={{ fontSize: 12, color: 'red' }}>
          {this.state.emailError}
        </div>

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
        <div style={{ fontSize: 12, color: 'red' }}>
          {this.state.passwordError}
        </div>
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
          startIcon={<LockIcon />}
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