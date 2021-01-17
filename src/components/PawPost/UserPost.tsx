import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface PostProps{
updateUser: (userID: string) => any

}

// use sessiontoken to access local storage

type PostState = {
    title: string;
    animal: string;
    color: string;
    city: string;
    state: string;
    description: string;
    date: string;
    time: string;
    id: string;
}


 class UserPost extends Component<PostProps, PostState> {
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
             time: "",
             id:""

         }

         let serverLink = 'http://localhost:5000'
        
         const url = `${serverLink}/pawpost/log`

         let body = {
           pawpost: {
             title: this.state.title,
             animal: this.state.animal,
             color: this.state.color,
             city: this.state.city,
             state: this.state.state,
             description: this.state.description,
             date: this.state.date,
             time: this.state.time,

           }
         }

         fetch(url, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
             
           },
           body: JSON.stringify(body)
         })
         .then(r => r.json())
         .then(rObj => {
          //finish code here
         });   
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

export default UserPost;