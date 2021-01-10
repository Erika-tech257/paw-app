import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


// interface OutProps {
//     clearToken: () => void
//   }

  type OutState = {
    logout: boolean;
    
}

class Logout extends Component<{},OutState> {
    constructor(props:any){
        super(props)
    
        this.state = {
            logout: true
           
        }

        //     handleSubmit(e:any) {
        //     e.preventDefault();
        //     this.props.clearToken()

        // }
   
}
    render() {
        return (
            <div className="mainDiv">
             <Button
          type="submit"
        //   onClick={this.handleSubmit}
          
          variant="contained"
          color="primary"
          className="{classes.submit}"
        >
          {this.state.logout}  Logout
          </Button>

            </div>
        )
    }
}

export default Logout;