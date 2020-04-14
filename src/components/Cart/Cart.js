import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 1000) {
        shipping = 0;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    else if (total > 500) {
        shipping = 6.99;
    }

    const tax = total / 10;
    const grandTotal = (total + shipping + tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div className="cart-container">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;