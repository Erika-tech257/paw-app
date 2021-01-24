import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


interface ButtonProps {
    fetchHomePosts: any;
    sessionToken: any
    homePosts: Array<object>
  
}

 class PostItems extends Component<ButtonProps,{}> {
    constructor(props: ButtonProps) {
        super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log("User info inputed");
}
       handleSubmit (e: any) {
       e.preventDefault();
    //    `http://localhost:5000/pawpost/${this.props.id}`
       fetch('http://localhost:5000/pawpost/id',{
           method:'DELETE',
           headers: {
                   'Content-Type':'application/json',
                   'Authorization':'this.props.sessionToken'
           }
       })
       .then(() => this.props.fetchHomePosts)
   }
    render() {
        return (
            <div>
                  <Button
                    size="medium"
                    variant="contained"
                    onClick={this.handleSubmit}
                    >
                        Delete
                    </Button>
                
            </div>
        )
    }
}
export default PostItems