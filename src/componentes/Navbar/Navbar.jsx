import * as React from 'react';

import { AppBar, Toolbar, Badge, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';
import AccountCircle from '@mui/icons-material/AccountCircle';




const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar postition="fixed" className={classes.appBar} color="inherit" style={{ background: '#f7f7f7' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} postition="center" alt="AnagalShop.js" height="55px" className={classes.image} />
                    </Typography>
                    <div className={classes.grow} />

                    <IconButton component={Link} to="/404" aria-label='Search' color="inherit" >
                        <SearchIcon />
                    </IconButton>
                    <IconButton component={Link} to="/404" aria-label='Profile' color="inherit"  >
                        <AccountCircle />
                    </IconButton>

                    <div className={classes.button} >
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
