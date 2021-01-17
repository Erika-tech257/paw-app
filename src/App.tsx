import React from 'react';
import './App.css';
import Navbar from './components/Auth/Navbar';
import Sign from './components/Auth/Sign'
// import UserPost from './components/PawPost/UserPost';
import PostIndex from './components/PawPost/PostIndex'

// App is top level component

interface AppProps {

}

type AppState = {
  SessionToken:any
  CurrentUser: any

}
class App extends React.Component<AppProps, AppState>{

  constructor(props: AppProps) {
    super(props);

    this.state = {
      SessionToken: undefined,
      CurrentUser : undefined
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
      console.log(newToken);
     
      }

      updateUser = (userID:string) =>  {
        this.setState({CurrentUser:userID})
        localStorage.setItem('userID', userID);
        console.log(userID);

      }
   
      // We are resetting the state of our sessionToken to an empty string, and then we are also clearing our token from our local storage. This will determine if a user is logged in, based on whether or not sessionToken exists in their local storage.
      clearToken = () => {
      this.setState({SessionToken:undefined})
      this.setState({CurrentUser:undefined})
      localStorage.clear()
      
    }

//      UserViews = () => {
//     return (this.state.SessionToken === localStorage.getItem('token') ? <UserPost token = {this.SessionToken} /> :
//     < Sign updateToken={this.updateToken} />)
// }
  render() {
    return (
      <div className = "App" >
       
     {!this.state.SessionToken ? <Sign updateToken={this.updateToken} /> : <div>
     <Navbar clearToken = {this.clearToken}  />
    <PostIndex updateUser ={this.updateUser} />
      </div>}
</div>
    
    )
    
  }
}
export default App;
