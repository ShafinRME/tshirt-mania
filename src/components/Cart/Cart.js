import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditonal Rendering ....
    // 1.Element variable
    // Ternary Operator...condition ? true : false....
    // And operator or shorthand/.....
    // Or operation...
    let command;
    if (cart.length === 0) {
        command = <p>Please add At least 1 Item.</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add More item...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Items selected</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} >X</button>
                </p>)
            }
            {cart.length === 0 || <p>Yay you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal </h3>
                <p>Tinjon ke ki gift diba naki</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>CLear all</button>}
            {cart.length === 4 && <button>Review Order</button>}
        </div>
    );
};

export default Cart;