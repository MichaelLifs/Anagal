import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Navbar, Products, Cart, Footer } from './componentes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router-dom";



const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});


    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);

    }

    const handleUpdateToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);

    }


    const handleRemoveToCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);

    }

    const handleEmptyToCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);

    }

    useEffect(() => {
        fetchProducts();
        fetchCart();

    }, []);



    console.log(cart);


    return (

        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/cart">
                        {<Cart
                            cart={cart}
                            handleUpdateToCart={handleUpdateToCart}
                            handleRemoveToCart={handleRemoveToCart}
                            handleEmptyToCart={handleEmptyToCart}
                        />}
                    </Route>
                </Switch>
                <Footer />
            </div >

        </Router >



    )

}



export default App;