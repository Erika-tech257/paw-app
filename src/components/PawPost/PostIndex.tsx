import React, { Component } from 'react'
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';


interface IndexProps{
    updateUser: (userID: string) => any
    sessionToken: any
    
    }

type IState = {
    homePosts: ([])
    
}




 class PostIndex extends Component<IndexProps, IState> {
    constructor(props:IndexProps){
        super(props)

        this.state ={
            homePosts: ([])
        }

        // this.setState({homePosts: [] })
    }

    // PostToggle = () => {
    //     this.setState({ Post: !this.state.Post})
    // }

        fetchHomePosts () {
        fetch('http://localhost:5000/pawpost/allLogs', { 
            method: 'GET',
            headers:({
                'Content-Type': 'application/json',
            })
            }).then( (res) => res.json())
            .then((logdata) => {
                this.setState({
                    homePosts: logdata
                })
            }).catch(err => console.log(err))
        console.log(this.fetchHomePosts);

      }
      

    // Figure out componentdidmount code console should return an empty array or an array to show posts current user created
    // componentDidMount do not put inside fetch function but above render function
    componentDidMount = () => {
      this.fetchHomePosts()
  }
    render() {
        return (
            <div>
        {/* <Button variant="outlined" color="primary">
         Create PawPost
        </Button> */}
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <PostCreate updateUser = {this.props.updateUser} fetchHomePosts={this.fetchHomePosts} sessionToken={this.props.sessionToken}/>
      </Container>
      </div>
  );
}

                
         
 }

export default PostIndex


