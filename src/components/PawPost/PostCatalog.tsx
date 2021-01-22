import React from 'react'
import Grid, { GridSpacing } from '@material-ui/core/Grid';



interface CatalogProps {
    fetchHomePosts: any;
    homePosts: ([])
    sessionToken: any
}


// homePosts are the post objects that the PostCatalog will map(display) to the page. fetchHomePosts allow us to update the posts if user decides to delete. sessionToken needed for delete endpoint. .map needs a return for every element mapped over in the array

class PostCatalog extends React.Component<CatalogProps> {
    constructor(props: CatalogProps) {
        super(props)

    }
    render() {
        return (
            <div>
                <h2 className="Catalog">
                    PawPost History
                </h2>
                <Grid container className="LogHistory" spacing={2}>
                    
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
                <button className ="deleteBtn" color="warning">
                    Delete
                </button>
            </div>
        )
    }
}

export default PostCatalog