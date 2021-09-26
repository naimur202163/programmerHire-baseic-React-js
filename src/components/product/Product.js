import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

   console.log(props)
   const {name,img,price,about,address,company}=props.product;

   const element = <FontAwesomeIcon icon={faAddressBook} />
    return (

        <div className="card">
        <img src={img} alt=""/>
        <div className="details">
            <h2><b>{name}</b></h2>
            <p>{about}</p>
            <h4>Address:{address}</h4>
            <h5>Working At :{company}</h5>
            <h6>Sallary :{price} $</h6>
            <button onClick= {()=>props.handleAdToCart(props.product)}   className="btn"><span>{element}</span>   ADD TO Cart</button>
        </div>
    </div>





        

    );
};

export default Product;