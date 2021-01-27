import React, { Component } from 'react'
// import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Popper from '@material-ui/core/Popper';
import PostCreate from './PostCreate';
import PostCatalog from './PostCatalog';
import PostEdit from './PostEdit'


interface IndexProps {
    updateUser: (userID: string) => any
    sessionToken: any


}

interface IState {
    homePosts: ([]),
    open: boolean
    setHomePosts:(e:any)=>void

}




class PostIndex extends Component<IndexProps, IState> {
    constructor(props: IndexProps) {
        super(props)

        this.state = {
            homePosts: ([]),
            open: false,
            setHomePosts:(e)=>
            this.setState({
                homePosts:e
            })
        }
      

        // this.setState({homePosts: [] })
        // this.setState({ Posts: false})
        this.setState({ open: false })
    }

    // PostToggle = () => {
    //     this.setState({ Posts: this.state.Posts })
    // }
    HomePostSet=(logdata:any)=>{
        this.setState({
            homePosts: logdata
        })
    }

    fetchHomePosts = () => {
        fetch('http://localhost:5000/pawpost/allLogs', {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
            .then((logdata) => {
            //     this.setState({
            //         homePosts: logdata
            //     })
            this.state.setHomePosts(logdata)
            console.log(logdata)
            }).catch(err => console.log(err))
        // console.log(this.fetchHomePosts);

    }
  


    // Figure out componentdidmount code console should return an empty array or an array to show posts current user created
    // componentDidMount do not put inside fetch function but above render function
    componentDidMount = () => {
        this.fetchHomePosts()
    }


    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                    Create PawPost
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title">
                    <Container maxWidth="sm">
                        <PostCreate updateUser={this.props.updateUser} fetchHomePosts={this.fetchHomePosts} sessionToken={this.props.sessionToken} />
                        <br />
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                             </Button>
                        </DialogActions>
                    </Container>
                </Dialog>
                <PostCatalog fetchHomePosts={this.fetchHomePosts} sessionToken={this.props.sessionToken} homePosts={this.state.homePosts} />
            </div>
        );
    }



}

export default PostIndex;



