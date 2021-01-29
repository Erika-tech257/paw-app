import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Container from '@material-ui/core/Container';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ComCreate from './ComCreate';


// All comments

interface CommentProps {
    updateUser: (userID: string) => any
    fetchHomePosts: any;
    sessionToken: any
    ObjId: string
}

interface CommentState {
    open: boolean
    homePosts: ([]),
    setHomePosts:(e:any)=> void
}


export default class CommentIndex extends Component<CommentProps, CommentState> {
    constructor(props: CommentProps) {
        super(props)

        this.state = {
            homePosts: ([]),
            open: false,
            setHomePosts:(e)=>
            this.setState({
                homePosts:e
            })
        }

        this.setState({ open: false })
    }

    HomePostSet=(allData:any)=>{
        this.setState({
            homePosts: allData
        })
    }
    

    fetchComments = () => {
        fetch('http://localhost:5000/comments/all', {
            method: 'GET',
            headers: ({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
            .then((allData) => {
           
            this.state.setHomePosts(allData)
            console.log(allData)
            }).catch(err => console.log(err))
     

    }

    componentDidMount = () => {
        
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
                
                <Button color="primary" onClick={this.handleOpen} startIcon={<AddCommentIcon />}>
                        Paw Comment
                </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title">
                        <Container maxWidth="sm">
                            <ComCreate ObjId={this.props.ObjId} updateUser={this.props.updateUser} fetchHomePosts={this.props.fetchHomePosts} sessionToken={this.props.sessionToken} />
                            <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                             </Button>
                        </DialogActions>
                        </Container>
                    </Dialog>
                   
               
            </div>
        )
    }
}
