import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { withStyles, Theme } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import PostCreate from "./PostCreate";
import PostCatalog from "./PostCatalog";
import APIURL from "../../environment";
import { Divider } from "@material-ui/core";

// Displays all posts

interface IndexProps {
  updateUser: (username: string) => void;
  sessionToken: any;
}

interface IState {
  homePosts: Array<object>;
  open: boolean;
  setHomePosts: (e: any) => void;
  comments: Array<object>;
}

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    "&:hover": {
      backgroundColor: cyan[700],
    },
  },
}))(Button);

class PostIndex extends Component<IndexProps, IState> {
  constructor(props: IndexProps) {
    super(props);

    this.state = {
      homePosts: [],
      open: false,
      setHomePosts: (e: any) =>
        this.setState({
          homePosts: e,
        }),
      comments: [],
    };

    // this.setState({homePosts: [] })
    // this.setState({ Posts: false})
    this.setState({ open: false });
  }

  // PostToggle = () => {
  //     this.setState({ Posts: this.state.Posts })
  // }
  HomePostSet = (logdata: any) => {
    this.setState({
      homePosts: logdata,
    });
  };

  // 'http://localhost:5000/pawpost/allLogs'

  fetchHomePosts = () => {
    fetch(`${APIURL}/pawpost/allLogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((logdata) => {
        //     this.setState({
        //         homePosts: logdata
        //     })
        this.state.setHomePosts(logdata);
        console.log(logdata);
        this.fetchComments();
      })
      .catch((err) => console.log(err));
    // console.log(this.fetchHomePosts);
  };

  fetchComments = () => {
    fetch(`${APIURL}/comments/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ comments: data });
        console.log(this.state.comments);
      });
  };

  // Figure out componentdidmount code console should return an empty array or an array to show posts current user created
  // componentDidMount do not put inside fetch function but above render function
  componentDidMount = () => {
    this.fetchHomePosts();
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="PostIndex">
        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
          <p className="Create">Create PawPost</p>
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Container maxWidth="sm">
            <PostCreate
              updateUser={this.props.updateUser}
              fetchHomePosts={this.fetchHomePosts}
              sessionToken={this.props.sessionToken}
            />
            <br />
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
        <br />
        <br />
        <Grid container justify="center">
          {/* <Grid item xs={12} sm={6} md={4}> */}
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={4}> */}
            <Box
              bgcolor=""
              color="primary.contrastText"
              p={0}
              position="relative"
              left="0px"
              width="500px"
            >
              <PostCatalog
                comments={this.state.comments}
                updateUser={this.props.updateUser}
                fetchHomePosts={this.fetchHomePosts}
                sessionToken={this.props.sessionToken}
                homePosts={this.state.homePosts}
              />
            </Box>
            {/* </Grid> */}
          </Grid>
        </Grid>
        <div></div>
      </div>
    );
  }
}

export default PostIndex;
