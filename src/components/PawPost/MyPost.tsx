import React from 'react'
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core'


 class MyPost extends React.Component {

    

    render() {
        return (
            <div className = "MyPostDiv">
                <h3>My Post History</h3>
                <br/>
                <Container>
                <Grid container spacing={1}>
                
                </Grid>
                
                </Container>
                
            </div>
        )
    }
}

export default MyPost