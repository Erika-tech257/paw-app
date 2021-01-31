import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PostCreate from './PostCreate';
import PostCatalog from './PostCatalog';
import APIURL from '../../environment'


// Displays all posts

interface IndexProps {
    updateUser: (username: string) => void
    sessionToken: any
    
}

interface IState {
    homePosts: ([]),
    open: boolean
    setHomePosts: (e: any) => void

}




class PostIndex extends Component<IndexProps, IState> {
    constructor(props: IndexProps) {
        super(props)

        this.state = {
            homePosts: ([]),
            open: false,
            setHomePosts: (e) =>
                this.setState({
                    homePosts: e
                })
        }


        // this.setState({homePosts: [] })
        // this.setState({ Posts: false})
        this.setState({ open: false })
    }

    // PostToggle = () => {
    //     this.setState({ Posts: this.state.Posts })
    // }
    HomePostSet = (logdata: any) => {
        this.setState({
            homePosts: logdata
        })
    }

    // 'http://localhost:5000/pawpost/allLogs'

    fetchHomePosts = () => {
        fetch(`${APIURL}/pawpost/allLogs`, {
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
                <Grid container direction="row" justify="center" alignItems="center">
                   <Grid item xs={12} sm={6} md={4}>
                        <PostCatalog  updateUser={this.props.updateUser} fetchHomePosts={this.fetchHomePosts} sessionToken={this.props.sessionToken} homePosts={this.state.homePosts} />
                 </Grid>
                </Grid>

            </div>
        );
    }



}

export default PostIndex;



