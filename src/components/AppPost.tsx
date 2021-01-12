import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface PostProps{

}

type PostState = {
    title: string;
    animal: string;
    color: string;
    city: string;
    state: string;
    description: string;
    date: string;
    time: string;
}


 class AppPost extends Component<PostProps, PostState> {
     constructor(props:PostProps){
         super(props)

         this.state = {
             title: "",
             animal: "",
             color: "",
             city: "",
             state: "",
             description: "",
             date: "",
             time: ""

         }
        
     }
    render() {
        return (
            <div className = "pawpost">
                <Card className={''}>
      <CardActionArea>
        <CardMedia
          className={''}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                
            </div>
        )
    }
}

export default AppPost;