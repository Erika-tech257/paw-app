import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

interface ButtonProps {
    fetchHomePosts: any;
    sessionToken: any
    homePosts: Array<object>
    ObjId:string
}



// Getting an error becasue id is not defined



 class PostItems extends Component<ButtonProps,{}> {
    constructor(props: ButtonProps) {
        super(props)
 

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log("User info inputed");
}
       handleSubmit = (e: any) => {
       e.preventDefault();

      
        console.log(this.props.ObjId)
       fetch(`http://localhost:5000/pawpost/${this.props.ObjId}`,{
           method:'DELETE',
           headers: {
                   'Content-Type':'application/json',
                   'Authorization':this.props.sessionToken
           }
       })
       .then((res)=> res.json())
       .then((results) =>{
           console.log(results)
            this.props.fetchHomePosts()
        })
       .catch((err)=>console.log(err))

 
    }
    render() {
        return (
            <div>
                  <Button
                    size="medium"
                    variant="contained"
                    onClick={this.handleSubmit}
                    startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>

                    <Button
                    size="medium"
                    variant="contained"
                    // onClick={this.handleSubmit}
                    startIcon={<UpdateIcon />}
                    >
                        Update
                    </Button>
            </div>
        )
    }
}
export default PostItems