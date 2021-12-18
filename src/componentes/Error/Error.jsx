import React from 'react';
import error404 from '../../assets/404.jpg';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material'
import Grid from '@material-ui/core/Grid';



const Error = () => {

    return (

        <Container maxWidth="lg">
            <Typography textAlign="center" variant="h3" gutterBottom> </Typography>
            <Grid container justifyContent="center" spacing={6}>
                <Grid container justifyContent="center" item xs={12} sm={8} md={6} lg={4} component={Link} to="/404" aria-label='404'>
                    <img src={error404} postition="center" alt="error.js" height="90%" />
                </Grid>

            </Grid>
        </Container>

    )
};

export default Error;


