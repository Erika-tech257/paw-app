import React from 'react'


interface CatalogProps  {
    fetchHomePosts : any;
    homePosts: ([])
    sessionToken: any
}

// homePosts are the post objects that the PostCatalog will map to the page. fetchHomePosts allow us to update the posts if user decides to delete. sessionToken needed for delete endpoint.

 class PostCatalog extends React.Component<CatalogProps> {
     constructor(props:CatalogProps){
         super(props)


     }
    render() {
        return (
            <div>
                <h2 className ="Catalog">
                    PawPosts
                </h2>
                
            </div>
        )
    }
}

export default PostCatalog