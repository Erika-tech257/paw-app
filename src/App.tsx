import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sign from './components/Sign'


// App is top level component

interface AppProps {

}

interface AppState {
  
}
class App extends React.Component<AppProps, AppState>{

  constructor(props: AppProps) {
    super(props);

    this.state = {
      SessionToken: null,
      CurrentUser : null
    }
  }
 
  // ****Error will occur if empty array is not implemented and application won't start will exceed maximum limit/took screenshot*****

    componentWillMount() {
         const token = localStorage.getItem('token')
      if(token) {
        this.setState({SessionToken:token})
      }
    } //[] empty array should be there to allow code to run continuously....

    componentDidMount() {
      const currentID = localStorage.getItem('userID');
      if(currentID){
      this.setState({CurrentUser:currentID});
    }
    }
    // User stays logged in if page refeshes or leaves page
      updateToken = (newToken:string) => {
      this.setState({SessionToken:newToken}); 
      localStorage.setItem('token', newToken);
      // localStorage.setItem(('userID', userID));
      }
      SessionToken: any
      // We are resetting the state of our sessionToken to an empty string, and then we are also clearing our token from our local storage. This will determine if a user is logged in, based on whether or not sessionToken exists in their local storage.
      clearToken = () => {
      localStorage.clear()
      this.setState({SessionToken:undefined})
      this.setState({CurrentUser:undefined})
      
    }

   
  
  render() {
    return (
      <div className = "App">
     {!this.SessionToken ? <Sign updateToken={this.updateToken} /> : <div>
     <Navbar clearToken = {this.clearToken}  />
     
        </div>}
      </div>


    )
  }
}
export default App;
