import * as React from 'react';

import Button from '@mui/material/Button';
import { AppBar, Toolbar, Badge, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'


import logo from '../../assets/logo.jpg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar postition="fixed" className={classes.appBar} color="inherit" style={{ background: '#f7f7f7' }}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="AnagalShop.js" height="55px" className={classes.image} />

                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <Button variant="contained" size="medium">
                            Sign in
                        </Button>
                        <Button variant="outlined" size="medium">
                            Register
                        </Button>
                        <IconButton component={Link} to="/cart" aria-label='Show Card Items' color="inherit" >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>


        </>
    )
}

export default Navbar
