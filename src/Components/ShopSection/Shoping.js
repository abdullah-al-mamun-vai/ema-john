import React from 'react';
import './Shopping.css'
const Shoping = ({ product, addCart }) => {
    const { img, name, price, ratings, seller } = product
    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl relative p-2 rounded-lg">
                <figure><img src={img} className='h-72 w-full rounded-lg' alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>price: ${price}</p>
                    <p>manufacuring: {seller}</p>
                    <p>rating: {ratings}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => addCart(product)} className="btn btn-primary w-full absolute bottom-0 left-0 rounded-t-none">add to cart</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Shoping;