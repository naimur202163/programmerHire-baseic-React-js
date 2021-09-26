import React from 'react';
// import Product from '../product/Product';

const Cart = (props) => {
    const{cart}=props;

    let number=0;
     for(let numbers of cart){
           number=number+numbers.num
     }

    // get the of Programers
    let name=''
    for(let names of cart){
        name=name+names.name
    };
    // get the amount of money
    let total=0;
   for(let   Money of cart){
       total=total+Money.price
   };
   

    return (
        <div>
                    <h2>Total : {number}</h2>
            <h2>Total  Cost: {total.toFixed(2)}$</h2>

               {<h2>Programer Add:{name}</h2>}
            

        </div>
    );
};

export default Cart;