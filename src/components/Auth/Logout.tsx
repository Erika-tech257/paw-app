import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';


interface OutProps {
    clearToken: () => void
  }

  type OutState = {
    logout: boolean;
    
}

class Logout extends Component<OutProps,OutState> {
    constructor(props:any){
        super(props)
    
        this.state = {
            logout: true    
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        // console.log('logout clicked')
        // this.setState({logout:true})
        
      }
          logout = (e:any) => {
          console.log('logout clicked')
          e.preventDefault(); 
          this.setState({logout:true})
          this.props.clearToken()
      }


    render() {
        return (
            <div className = "LogoutBtn">
          <Button
          type="submit"
          onClick={this.logout}
          variant="contained"
          color="secondary"
          startIcon={<BackspaceIcon />}
        >
          {this.state.logout}  Logout
          </Button>
            </div>
           
        )
    }
}

export default Logout;