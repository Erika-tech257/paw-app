import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';



interface CommentProps {
    Obj: any
    // fetchHomePosts: any;

}

interface CommentState {
    postId: string;
}

// Comment belongs to pawpost id and userID(username)
// ObjId = postId(pawpost id)


class CommentHistory extends Component<CommentProps, CommentState> {
    constructor(props: CommentProps) {
        super(props)

        this.state = {
            postId: ""
        }
        // Display all Comments
    }

    CommentMapper = () => {
        return this.props.Obj.comments?.map(
            (comment: any, index: any) => {
                return (
                    <Grid container>
                        <Grid item xs={4} zeroMinWidth>
                            <p>Username:{this.props.Obj.owner}</p>
                            <p>Comment:{comment.description}</p>

                        </Grid>
                    </Grid>
                )
            }
        )
    }
    render() {
        return (
            <div>
                <h3 className="ComTitle">Comments</h3>

                <div onMouseEnter={() => {

                }}>
                    {this.CommentMapper()}
                </div>
            </div>
        )





    }
}
export default CommentHistory