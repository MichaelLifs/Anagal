import React from 'react';
import error404 from '../../assets/404.jpg';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material'
import Grid from '@material-ui/core/Grid';



const Error = () => {

    return (

        <Grid container justifyContent="center" spacing={0}>
            <Grid item justifyContent="center" xs={12} sm={10} md={8} lg={6}>
                <img src={error404} postition="center" alt="error.js" height="90%" />
            </Grid>
        </Grid>

    )
};

export default Error;


