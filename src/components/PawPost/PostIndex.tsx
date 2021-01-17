import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserPost from './UserPost'

interface IndexProps{
    updateUser: (userID: string) => any
    
    }

type IState = {
    HomePosts: ([])
    
}

 class PostIndex extends Component<IndexProps, IState> {
    constructor(props:IndexProps){
        super(props)

        this.state ={
            HomePosts: ([])
        }

        this.setState({HomePosts: [] })
    }
    
    

        fetchHomePosts () {
        fetch('http://localhost:5000/pawpost/allLogs', { 
            method: 'GET',
            headers:({
                'Content-Type': 'application/json',
            })
            }).then( (res) => res.json())
            .then((logData) => {
                this.setState({HomePosts:logData})
        })
        // function ComponentDidMount(arg0: () => void, arg1: never[]) {
        //     throw new Error('Function not implemented.');
        // }

    //     ComponentDidMount (
    //         () => {
    //         this.fetchHomePosts()
    //     }, [] )

    // Figure out componentdidmount code
    }

    render() {
        return (
            <div>
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <UserPost updateUser = {this.props.updateUser}/>
      </Container>
      </div>
  );
}

                
         
 }

export default PostIndex


