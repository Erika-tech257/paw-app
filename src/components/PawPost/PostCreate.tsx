import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import APIURL from '../../environment'

interface PostProps{
updateUser: (username: string) => void
fetchHomePosts : any
sessionToken: any
}

// use sessiontoken to access local storage

interface PostState {
    title: string;
    animal: string;
    color: string;
    city: string;
    state: string;
    description: string;
    date: string;
    time: string;
    owner: string;
}
 class PostCreate extends React.Component<PostProps, PostState> {
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
             owner: "" 
            }

         this.handleSubmit = this.handleSubmit.bind(this)
         console.log("User info inputed");
         this.setState({ title: ""})
         this.setState({ animal: ""})
         this.setState({ color: ""})
         this.setState({ city: ""})
         this.setState({ state: ""})
         this.setState({ description: ""})
         this.setState({ date: ""})
         this.setState({ time: ""})
        }
       

         handleSubmit = (e: any) => {
          e.preventDefault();

        //  let serverLink = 'http://localhost:5000'
        
        //  const url = `${serverLink}/pawpost/log`

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
             owner: this.props.updateUser
           }
           
         }

         fetch(`${APIURL}/pawpost/log`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json', 
             'Authorization': this.props.sessionToken,
           },
           body: JSON.stringify(body)
         })
         .then(r => r.json())
         .then(rObj => {
           console.log(rObj); 
           this.props.fetchHomePosts();
         });   
     }
     
    render() {
        return (
            <div>
                <Card className={'mainCard'}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Create PawPost
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
          value={this.state.title}
          onChange={(e) => {
            this.setState({
              title: e.target.value
            })
            console.log(this.state.title);
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
          value={this.state.animal}
          onChange={(e) => {
            this.setState({
              animal: e.target.value
            })
            console.log(this.state.animal);
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
          value={this.state.color}
          onChange={(e) => {
            this.setState({
              color: e.target.value
            })
            console.log(this.state.color);
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
          value={this.state.city}
          onChange={(e) => {
            this.setState({
              city: e.target.value
            })
            console.log(this.state.city);
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
          value={this.state.state}
          onChange={(e) => {
            this.setState({
              state: e.target.value
            })
            console.log(this.state.state);
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
          value={this.state.description}
          onChange={(e) => {
            this.setState({
              description: e.target.value
            })
            console.log(this.state.description);
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
          value={this.state.date}
          onChange={(e) => {
            this.setState({
              date: e.target.value
            })
            console.log(this.state.date);
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
          value={this.state.time}
          onChange={(e) => {
            this.setState({
              time: e.target.value
            })
            console.log(this.state.time);
          }}
          autoFocus
        />
     

          <Button
          type="submit"
          onClick={this.handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className="submitPostBtn"
          startIcon={<PublishIcon />}
        >
          Submit
          
        </Button>
    </Typography>
   </CardContent>
       </Card>
       </div>
            
        )
    }
}

export default PostCreate;