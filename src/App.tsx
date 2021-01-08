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

    this.state = {SessionToken: null}
  }
 
  // ****Error will occur if empty array is not implemented and application won't start will exceed maximum limit/took screenshot*****

    componentWillMount() {
         const token = localStorage.getItem('token')
      if(token) {
        this.setState({SessionToken:token})
      }
    } //[] empty array should be there to allow code to run continuously....


    // User stays logged in if page refeshes or leaves page
      updateToken = (newToken:string) => {
      this.setState({SessionToken:newToken}); 
      localStorage.setItem('token', newToken);
      }

      clearToken = () => {
      this.setState({SessionToken:undefined})
      localStorage.clear()
    }
  
  render() {
    return (
      <div className = "App">
     <Sign updateToken={this.updateToken} />
     <Navbar />
      </div>


    )
  }
}
export default App;
