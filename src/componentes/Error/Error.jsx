import React from 'react';
import error404 from '../../assets/404.jpg';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Container, IconButton, Typography } from '@mui/material'



const Error = () => {

    return (
        <Container>
            <Typography textAlign="center" variant="h3" gutterBottom>404</Typography>

            <Container maxWidth="lg" component={Link} to="/" aria-label='home' >
                <Box textAlign="center"  >
                    <IconButton component={Link} to="/" color="inherit" >
                        <img src={error404} alt="error.js" height="500px" />
                    </IconButton>

                </Box>
            </Container>
        </Container >
    )
};

export default Error;
