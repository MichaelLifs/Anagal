import { Container, Grid, Typography, Button } from '@mui/material'
import React from 'react';
import useStyles from './styles';
import CartItem from './Cartitem/Cartitem';
import { Link, } from 'react-router-dom'
import error from '../../assets/404.png';

const Cart = ({ cart, handleUpdateToCart, handleRemoveToCart, handleEmptyToCart }) => {

    const classes = useStyles();


    const EmptyCart = () => (

        <Typography component={Link} to="/"  >
            <img src={error} alt="erros.js" height="80%" width="100%" />
        </Typography >
    );



    const FillCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid container item xs={12} sm={6} key={item.id}>
                        <CartItem item={item} UpdateCart={handleUpdateToCart} RemoveCart={handleRemoveToCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyToCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} to="/checkout" size="large" type="button" variant="contained" color="primary" >Checkout</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography textAlign="center" className={classes.title} variant="h3" gutterBottom>Your Shoping Cart </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
        </Container >

    );
};

export default Cart;
