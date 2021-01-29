import React from 'react'
import Grid from '@material-ui/core/Grid';
import PostItems from './PostItems'
import './PostCatalog.css'
import CommentHistory from '../Comments/CommentHistory'




interface CatalogProps {
    updateUser: (userID: string) => any
    fetchHomePosts: any;
    sessionToken: any
    homePosts: Array<object>
    
}

interface CatalogState {
    postId: string;
}




// homePosts are the post objects that the PostCatalog will map(display) to the page. fetchHomePosts allow us to update the posts if user decides to delete. sessionToken needed for delete endpoint. .map needs a return for every element mapped over in the array

class PostCatalog extends React.Component<CatalogProps, CatalogState> {
    constructor(props: CatalogProps) {
        super(props)



        this.state = {
            postId: ""
        }
        // Displays all Logs 


    }

    render() {
        return (
            <div>
                <h2 className="Catalog">PawPost History</h2>
                {
                    this.props.homePosts?.map((Obj: any, index: any) => {
                        console.log(Obj)
                        return (
                            <div key={Obj.id} onMouseEnter={() => {
                                this.setState({ postId: Obj.id })
                                console.log(Obj.id)
                            }}>
                                <Grid container spacing={2}  >
                                    <Grid item xs={4} sm={12} zeroMinWidth>
                                        <p>Id:{Obj.id}</p>
                                        <p>Title:{Obj.title}</p>
                                        <p>Animal:{Obj.animal}</p>
                                        <p>Color:{Obj.color}</p>
                                        <p>City:{Obj.city}</p>
                                        <p>State:{Obj.state}</p>
                                        <p>Description:{Obj.description}</p>
                                        <p>Date:{Obj.date}</p>
                                        <p>Time:{Obj.time}</p>
                                        <p>Username:{Obj.owner}</p>
                                    </Grid>
                                    <div>
                                        <PostItems updateUser={this.props.updateUser} ObjId={Obj.id} fetchHomePosts={this.props.fetchHomePosts} sessionToken={this.props.sessionToken} homePosts={this.props.homePosts} />
                                      
                                        <CommentHistory Obj={Obj} />


                                    </div>
                                </Grid>
                            </div>
                        )
                    }
                    )}

            </div>


        )

    }
}
export default PostCatalog