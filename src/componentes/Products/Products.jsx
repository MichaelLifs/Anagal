import React from 'react';
import { Grid } from '@material-ui/core';
import Pruduct from '../Pruduct/Product';
import useStyles from "./styles";
import logo from '../../assets/photobar.jpg';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <img src={logo} alt="Photobar.js" height="80%" width="100%" />
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={9}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={8} md={6} lg={4}>
                        <Pruduct product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main >
    );
}

export default Products;