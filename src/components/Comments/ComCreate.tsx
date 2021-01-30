import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';


// ComCreate component located in PostItems

//Pass props of ObjId=postId to get pawpost user and obj.owner to get who the post belongs to

interface CommentProps {
    updateUser: (username: string) => void
    fetchHomePosts: any
    sessionToken: any
    ObjId: string

}

interface CommentState {
    description: string;
    owner: string;


}

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(cyan[500]),
        backgroundColor: cyan[500],
        '&:hover': {
            backgroundColor: cyan[700],
        },
    },
}))(Button);


class ComCreate extends Component<CommentProps, CommentState> {
    constructor(props: CommentProps) {
        super(props)




        this.state = {
            description: "",
            owner: ""

        }


        this.handleSubmit = this.handleSubmit.bind(this)
        console.log('comment posted')
        this.setState({ description: "" })

    }


    handleSubmit = (e: any) => {
        e.preventDefault();
        let data = {
            comments: {
                description: this.state.description,
                owner: this.props.updateUser
            }
        }

        fetch(`http://localhost:5000/comments/new/${this.props.ObjId}/comment`, {
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

                <form className="commentBox" noValidate autoComplete="off">
                    <TextField
                        id="outlined-textarea"
                        label="Comment"
                        placeholder="Leave a Paw Comment"
                        multiline
                        variant="outlined"
                        margin="normal"
                        required fullWidth
                        value={this.state.description}
                        onChange={(e) => {
                            this.setState({
                                description: e.target.value
                            })
                            console.log(this.state.description);
                        }}
                        autoFocus
                    />

                    <div className="mainComment">
                        <ColorButton
                            type="submit"
                            onClick={this.handleSubmit}
                            variant="contained"
                            color="primary"
                            className="{classes.margin}">
                            Reply
                        </ColorButton>

                    </div>
                    <br />

                </form>
                

            </div>
        )
    }
}
export default ComCreate