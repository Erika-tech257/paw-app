import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import { withStyles, Theme } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import APIURL from '../../environment'

interface EditProps {
    // updateUser: (username: string) => void
    fetchHomePosts: any
    sessionToken: any
    ObjId: string

}
interface EditState{
    description: string
}


const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(cyan[500]),
        backgroundColor: cyan[500],
        '&:hover': {
            backgroundColor: cyan[700],
        },
    },
}))(Button);

 class CommentItems extends Component<EditProps,EditState>
  {
      constructor(props:EditProps){
          super(props)

          this.state ={
              description:""
          }

          this.handleSubmit = this.handleSubmit.bind(this)
          console.log('Comment Updated')
          this.setState({ description: "" })
      }
      handleSubmit = (e: any) => {
          e.preventDefault();

          let data = {
              comments: {
                  description: this.state.description
              }
          }

        //   `http://localhost:5000/comments/my/${this.props.ObjId}`

          fetch(`${APIURL}/comments/my/${this.props.ObjId}`,{
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': this.props.sessionToken
              },
              body:JSON.stringify(data)
          })
          .then(r => r.json())
          .then(rObj => {
              console.log(rObj);
              this.props.fetchHomePosts();
          })
          .catch((err) => console.log(err))

      }
    render() {
        return (
            <div>
                   <ColorButton
                    type="submit"
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                    startIcon={<PublishIcon />}>
                    Update
                    </ColorButton>
                
            </div>
        )
    }
}
export default CommentItems