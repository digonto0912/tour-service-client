import React from 'react';
import { Link } from 'react-router-dom';

const MyDeals = ({deal}) => {
    console.log(deal);
    const {_id, name, price, img, duration}= deal;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{duration}</p>
            <Link to ={`/bookDeal/${_id}`}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>

         
              
            
        </div>
    );
};

export default MyDeals;