import React, { useEffect, useState } from 'react';
import Shoping from '../ShopSection/Shoping';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const [cart, setCart] = useState([])
    const addCart = (id) => {
        const quentity = [...cart, id];
        setCart(quentity)
        console.log(quentity)
    }
    return (
        <div className='grid grid-cols-5 gap-3'>
            <div className='col-span-4 grid grid-cols-3 gap-3 my-24'>
                {
                    product.map(product => <Shoping product={product} addCart={addCart} key={product.id}></Shoping>)
                }

            </div>

            <div className='bg-orange-400'>
                <h1 className='font-semibold text-lg capitalize my-9 text-center'>order  summary</h1>
                <ul>
                    <li>selected item: {cart.length}</li>
                    <li>total price: $4114</li>
                    <li>total shopping carge: $6</li>
                    <li>tax:$400</li>
                    <li className='capitalize text-lg font-bold'>grand total:</li>
                </ul>
                <div className='flex flex-col'>
                    <button className='capitalize btn mt-3 bg-red-600 border-0'>clear cart</button>
                    <button className='capitalize btn mt-3 bg-orange-500 border-0'>review order</button>
                </div>
            </div>
        </div >
    );
};

export default Products;