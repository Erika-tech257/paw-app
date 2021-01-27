import React, { Component } from 'react'


//Pass props of ObjId=postId to get pawpost user and obj.owner to get who the post belongs to

interface CommentProps{
    updateUser: (userID: string) => any
    fetchHomePosts : any
    sessionToken: any
    ObjId: string    

    }

interface CommentState{
    description: string;
    
}

 class ComCreate extends Component<CommentProps,CommentState> {
     constructor(props:CommentProps){
         super(props)

         this.state ={
             description: "",
            
         }
       
         console.log('comment posted')
         this.setState({ description: ""})
         
     }
     
  
     componentDidMount(){
        let data = {
            comments:{
                description: this.state.description,
                owner: this.props.updateUser
            }
        }
   
         fetch(`http://localhost:5000/comments/new/${this.props.ObjId}/comment`,{
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