import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PublishIcon from '@material-ui/icons/Publish';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ImagePost from './ImagePost'

interface PostEditProps {
  fetchHomePosts: any
  sessionToken: any
  homePosts: Array<object>
  ObjId: string

}


interface PostEditState {
  title: string;
  animal: string;
  color: string;
  city: string;
  state: string;
  description: string;
  date: string;
  time: string;
  


}


// Displays user posts and has an edit and delete button
class PostEdit extends Component<PostEditProps, PostEditState> {
  constructor(props: PostEditProps) {
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
      


    }
    //  Passing props to update/edit info in post usre created. passing homePosts from postindex compoenet


    // this.handleSubmit = this.handleSubmit.bind(this)
    // console.log("User info updated");
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log("User info inputed");
    this.setState({ title: "" })
    this.setState({ animal: "" })
    this.setState({ color: "" })
    this.setState({ city: "" })
    this.setState({ state: "" })
    this.setState({ description: "" })
    this.setState({ date: "" })
    this.setState({ time: "" })
    


  }
  // Allows User to Toggle to update their own post


  handleSubmit = (e: any) => {
    e.preventDefault();


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

      console.log(this.props.ObjId);
    fetch(`http://localhost:5000/pawpost/${this.props.ObjId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken,
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(rObj => {
        console.log(rObj)
        this.props.fetchHomePosts();
      })
      .catch((err) => console.log(err))
  }


  componentDidUpdate = () => {
    this.props.fetchHomePosts()
  }


  render() {
    return (
      <div className="PostEdit">

        <Card className={''}>

          <CardActionArea>
            <ImagePost sessionToken />
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
                {/* <Button
                  type="button"
                  onClick={this.handleSubmit}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className="deleteBtn"
                >
                  Delete
        </Button> */}

                <br />
                <br />

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
          </CardActionArea>
        </Card>

      </div>
    )
  }
}

export default PostEdit