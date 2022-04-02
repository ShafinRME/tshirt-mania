import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Items selected</h2>
            {
                cart.map(Tshirt => <p>
                    {Tshirt.name}
                    <button onClick={() => handleRemoveFromCart(Tshirt)} >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;