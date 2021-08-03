import React from "react";
// import Grid from '@material-ui/core/Grid';
import { Grid } from "@material-ui/core";
// import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostItems from "./PostItems";
import "./PostCatalog.css";
import CommentHistory from "../Comments/CommentHistory";
import ImagePost from "./ImagePost";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

interface CatalogProps {
  updateUser: (username: string) => void;
  fetchHomePosts: any;
  sessionToken: any;
  homePosts: Array<object>;
  comments: Array<object>;
}

interface CatalogState {
  postId: string;
  open: boolean;
  username: string;
}

// PawPost use card and grid

// homePosts are the post objects that the PostCatalog will map(display) to the page. fetchHomePosts allow us to update the posts if user decides to delete. sessionToken needed for delete endpoint. .map needs a return for every element mapped over in the array

class PostCatalog extends React.Component<CatalogProps, CatalogState> {
  constructor(props: CatalogProps) {
    super(props);

    this.state = {
      postId: "",
      open: false,
      username: "",
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <h2 className="Catalog">PawPosts</h2>
        {this.props.homePosts?.map((Obj: any, index: any) => {
          console.log(Obj);

          return (
            <div
              key={Obj.id}
              onMouseEnter={() => {
                this.setState({ postId: Obj.id });
                console.log(Obj.id);
              }}
            >
              <Card className="mainCard" variant="outlined">
                <CardContent>
                  <Typography className="" color="textSecondary" gutterBottom>
                    PawPost {Obj.id}
                  </Typography>

                  {/* Added obj.id to imagepost so each image is specific to each post = post id */}

                  <ImagePost
                    sessionToken={this.props.sessionToken}
                    id={Obj.id}
                  />

                  <Typography variant="body2" component="p">
                    {/* <p>Id:{Obj.id}</p> */}
                    <p>Title:{Obj.title}</p>
                    <p>Animal:{Obj.animal}</p>
                    <p>Color:{Obj.color}</p>
                    <p>City:{Obj.city}</p>
                    <p>State:{Obj.state}</p>
                    <p>Description:{Obj.description}</p>
                    <p>Date:{Obj.date}</p>
                    <p>Time:{Obj.time}</p>
                    <p>Username:{Obj.newPost.username}</p>
                  </Typography>

                  <div>
                    <PostItems
                      updateUser={this.props.updateUser}
                      ObjId={Obj.id}
                      fetchHomePosts={this.props.fetchHomePosts}
                      sessionToken={this.props.sessionToken}
                      homePosts={this.props.homePosts}
                    />
                  </div>
                  <div className="CommentDiv">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className="CommentTitle">
                          Comments
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Typography>
                            <CommentHistory
                              Obj={Obj}
                              comments={this.props.comments}
                              updateUser={this.props.updateUser}
                            />
                          </Typography>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PostCatalog;
