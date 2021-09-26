import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'


const Shop = () => {
        const[employs,setEmploy]=useState([]);
        const [cart,setCart]=useState([])
      
        useEffect(()=>{
            fetch('./progmer.JSON')
            .then(res=>res.json())
            .then(data=>setEmploy((data)))
        },[]);

        const handleAdToCart=(employ)=>{
          const newCart=[...cart,employ];
          setCart(newCart)
        }


    return (
        <div className="container">
            <div className="employ-container">
            {
             employs.map(product=>
                <Product product={product}
                key={product.id}
                  handleAdToCart={handleAdToCart}
                ></Product>
             )
         }
         
            </div>
            <div className="Cart-container">
                <Cart cart={cart}></Cart>
            </div>
         
        </div>
    );
};

export default Shop;