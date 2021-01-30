import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';


// Located in PostCatalog


interface CommentProps {
    updateUser: (username: string) => void
    Obj: any
    // fetchHomePosts: any;

}

interface CommentState {
    postId: string;
    open: boolean;

}

// Comment belongs to pawpost id and userID(username)
// ObjId = postId(pawpost id)

// Display all Comments

class CommentHistory extends Component<CommentProps, CommentState> {
    constructor(props: CommentProps) {
        super(props)

        this.state = {
            postId: "",
            open: false

        }



       
    }
 

    CommentMapper = () => {
        return this.props.Obj.comments?.map(
            (comment: any, index: any) => {
                return (
                    <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                           <List>
                                <p>Username:{this.props.Obj.owner}</p>
                                <p>Comment:{comment.description}</p>
                                <Divider />
                            </List>
                           </Grid>
                           </Grid>
                            
                )
            }
        )
        
    }
    render() {
        return (
            <div>
                
                {/* <h3 className="ComTitle">Comments</h3> */}
             
                

                <div onMouseEnter={() => {

                }}>
          
                    {this.CommentMapper()}
                </div>
            </div>
        )





    }
}
export default CommentHistory