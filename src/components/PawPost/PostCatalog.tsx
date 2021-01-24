import React from 'react'
import Grid from '@material-ui/core/Grid';
import PostEdit from './PostEdit';
import PostItems from './PostItems'
import './PostCatalog.css'



interface CatalogProps {
    fetchHomePosts: any;
    sessionToken: any
    homePosts: Array<object>
}



// homePosts are the post objects that the PostCatalog will map(display) to the page. fetchHomePosts allow us to update the posts if user decides to delete. sessionToken needed for delete endpoint. .map needs a return for every element mapped over in the array

class PostCatalog extends React.Component<CatalogProps,{}> {
    constructor(props: CatalogProps) {
        super(props)


       }
    
           
    render() {
        return(
            <div>
          
               
             <h2 className="Catalog">PawPost History</h2>
               {
                   this.props.homePosts?.map((Obj:any,index:any) => { return(
                   <div key = {Obj.id}>
                       <Grid container spacing={2} >
                       <Grid item xs={4}>
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
                       <PostItems fetchHomePosts={this.props.fetchHomePosts} sessionToken={this.props.sessionToken} homePosts={this.props.homePosts}/>
                  
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