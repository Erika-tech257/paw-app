import React, { Component } from 'react'




interface CommentProps{
    updateUser: (userID: string) => any
    fetchHomePosts : any
    sessionToken: any
    

    }

interface CommentState{
    description: string;
    owner: string;
}

 class ComCreate extends Component<CommentProps,CommentState> {
     constructor(props:CommentProps){
         super(props)

         this.state ={
             description: "",
             owner:""
         }
       
         console.log('comment posted')
         this.setState({ description: ""})
         this.setState({ owner: ""})
     }
     
  
     componentDidMount(){
        let data = {
            comments:{
                description: this.state.description,
                owner: this.props.updateUser
            }
        }
   
         fetch('http://localhost:5000/comments/new/comment',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': this.props.sessionToken,
                },
                body: JSON.stringify(data)
         })
         .then(r => r.json())
         .then(rObj => {
             console.log(rObj);
             this.props.fetchHomePosts();
         })
     }
    render() {
        return (

            <div>
                
            </div>
        )
    }
}
export default ComCreate