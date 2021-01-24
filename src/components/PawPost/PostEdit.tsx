import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImagePost from './ImagePost'

interface PostEditProps{
    updateUser: (userID: string) => any
    fetchHomePosts : any
    sessionToken: any
    homePostsUpdate: any
    }

    
interface PostEditState {
    edtitle: string;
    edanimal: string;
    edcolor: string;
    edcity: string;
    edstate: string;
    eddescription: string;
    eddate: string;
    edtime: string;
    
}


// Displays user posts and has an edit and delete button
 class PostEdit extends Component<PostEditProps,PostEditState> {

  

  state: PostEditState;

     constructor(props:PostEditProps){
        super(props)
        
        this.state = {
            edtitle: "",
            edanimal: "",
            edcolor: "",
            edcity: "",
            edstate: "",
            eddescription: "",
            eddate: "",
            edtime: ""
         
          
        }
      //  Passing props to update/edit info in post usre created. passing homePosts from postindex compoenet
       
        this.handleSubmit=this.handleSubmit.bind(this)
        console.log('Post Updated');
        this.setState({ edtitle: this.props.homePostsUpdate.title})
        this.setState({ edanimal: this.props.homePostsUpdate.animal})
        this.setState({ edcolor: this.props.homePostsUpdate.color})
        this.setState({ edcity: this.props.homePostsUpdate.city})
        this.setState({ edstate: this.props.homePostsUpdate.state})
        this.setState({ eddescription: this.props.homePostsUpdate.description})
        this.setState({ eddate: this.props.homePostsUpdate.date})
        this.setState({ edtime: this.props.homePostsUpdate.time})
        
      }


       // updates State
      //  switchPostHandler = () => {
      //   this.setState({ title: ""})
      //   this.setState({ animal: ""})
      //   this.setState({ color: ""})
      //   this.setState({ city: ""})
      //   this.setState({ state: ""})
      //   this.setState({ description: ""})
      //   this.setState({ date: ""})
      //   this.setState({ time: ""})
      //  }
       

        handleSubmit (e: any) {
            e.preventDefault();

            
            
            const editurl = `http://localhost:5000/pawpost/${this.props.homePostsUpdate.id}`

          

            let editbody = {
              pawpost: {
              title: this.state.edtitle,
              animal: this.state.edanimal,
              color: this.state.edcolor,
              city: this.state.edcity,
              state: this.state.edstate,
              description: this.state.eddescription,
              date: this.state.eddate,
              time: this.state.edtime,
              owner: this.props.updateUser
            }
          }
          
          fetch(editurl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.props.sessionToken,
            },
            body: JSON.stringify(editbody)
          })
          .then(r => r.json())
          .then(rObj => {
            console.log(rObj)
            this.props.fetchHomePosts();
          }) 
        }
        
        componentDidUpdate = () => {
          this.props.fetchHomePosts()
        }

        
     
    render() {
        return (
            <div className ="PostEdit">
               
                <Card className={''}>
                
      <CardActionArea>
      {/* <ImagePost SessionToken /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Edit PawPost
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {/* Text input field goes here */}
          
           <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          value={this.state.edtitle}
          onChange={(e) => {
            this.setState({
              edtitle: e.target.value
            })
            console.log(this.state.edtitle);
          }}
          autoFocus
        />

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="animal"
          label="Animal"
          name="animal"
          autoComplete="animal"
          value={this.state.edanimal}
          onChange={(e) => {
            this.setState({
              edanimal: e.target.value
            })
            console.log(this.state.edanimal);
          }}
          autoFocus
        />

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="color"
          label="Color"
          name="color"
          autoComplete="color"
          value={this.state.edcolor}
          onChange={(e) => {
            this.setState({
              edcolor: e.target.value
            })
            console.log(this.state.edcolor);
          }}
          autoFocus
        />

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
          value={this.state.edcity}
          onChange={(e) => {
            this.setState({
              edcity: e.target.value
            })
            console.log(this.state.edcity);
          }}
          autoFocus
        />

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          autoComplete="state"
          value={this.state.edstate}
          onChange={(e) => {
            this.setState({
              edstate: e.target.value
            })
            console.log(this.state.edstate);
          }}
          autoFocus
        />

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          autoComplete="description"
          value={this.state.eddescription}
          onChange={(e) => {
            this.setState({
              eddescription: e.target.value
            })
            console.log(this.state.eddescription);
          }}
          autoFocus
        />    

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="date"
          label="Date"
          name="date"
          autoComplete="date"
          value={this.state.eddate}
          onChange={(e) => {
            this.setState({
              eddate: e.target.value
            })
            console.log(this.state.eddate);
          }}
          autoFocus
        />    

          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="time"
          label="Time"
          name="time"
          autoComplete="time"
          value={this.state.edtime}
          onChange={(e) => {
            this.setState({
              edtime: e.target.value
            })
            console.log(this.state.edtime);
          }}
          autoFocus
        />
         <Button
          type="button"
          onClick={this.handleSubmit}
          fullWidth
          variant="contained"
          color="secondary"
          className="deleteBtn"
        >
         Delete 
        </Button>

          <br />
          <br/>

          <Button
          type="submit"
          onClick={this.handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className="submitPostBtn"
        >
         Update
        </Button>

          </Typography>
      
        </CardContent>
      </CardActionArea>
    </Card>
               
            </div>
        )
    }
}

export default PostEdit