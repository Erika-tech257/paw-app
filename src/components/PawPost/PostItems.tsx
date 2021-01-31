import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import PostEdit from './PostEdit'
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CommentIndex from '../Comments/CommentIndex'
import APIURL from '../../environment'


interface ButtonProps {
    updateUser: (username: string) => void
    fetchHomePosts: any;
    sessionToken: any
    homePosts: Array<object>
    ObjId: string
}
interface ButtonState {
    open: boolean
}

// Delete Post



class PostItems extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props)

        this.state = {
            open: false
        }

        this.setState({ open: false })



        this.handleSubmit = this.handleSubmit.bind(this)
        console.log("User info inputed");
    }
    handleSubmit = (e: any) => {
        e.preventDefault();

        // `http://localhost:5000/pawpost/${this.props.ObjId}

        console.log(this.props.ObjId)
        fetch(`${APIURL}/pawpost/${this.props.ObjId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            }
        })
            .then((res) => res.json())
            .then((results) => {
                console.log(results)
                this.props.fetchHomePosts()
            })
            .catch((err) => console.log(err))


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
                    onClick={this.handleOpen}
                    startIcon={<UpdateIcon />}
                >
                    Update
                    </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title">
                    <Container maxWidth="sm">
                        <PostEdit fetchHomePosts={this.props.fetchHomePosts} sessionToken={this.props.sessionToken} homePosts={this.props.homePosts} ObjId={this.props.ObjId} />
                        <br />
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                             </Button>
                        </DialogActions>
                    </Container>
                </Dialog>
                <CommentIndex ObjId={this.props.ObjId} updateUser={this.props.updateUser} fetchHomePosts={this.props.fetchHomePosts} sessionToken={this.props.sessionToken}  />
            </div>
        )
    }
}
export default PostItems