import React, { Component } from 'react'
// import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Popper from '@material-ui/core/Popper';
import PostCreate from './PostCreate';
import PostCatalog from './PostCatalog';


interface IndexProps {
    updateUser: (userID: string) => any
    sessionToken: any
    
    
   
    

}

interface IState {
    homePosts: ([]),
    Posts: boolean
    open: boolean


}




class PostIndex extends Component<IndexProps, IState> {
    constructor(props: IndexProps) {
        super(props)

        this.state = {
            homePosts: ([]),
            Posts: false,
            open: true
        }

        // this.setState({homePosts: [] })
        // this.setState({ Posts: false})
        this.setState({ open: true })
    }

    PostToggle = () => {
        this.setState({ Posts: !this.state.Posts })
    }

    fetchHomePosts() {
        fetch('http://localhost:5000/pawpost/allLogs', {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
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
                        {/* <PostEdit updateUser = {this.props.updateUser} fetchHomePosts={this.fetchHomePosts} sessionToken={this.props.sessionToken}/> */}

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



