import React from 'react';
import "./Tshirt.css"

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture,name, price, gender} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt=''/>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Gander: {gender}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;