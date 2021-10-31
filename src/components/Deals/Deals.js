import React, { useEffect, useState } from 'react';
import MyDeals from '../MyDeals/MyDeals';
import './Deals.css';

const Deals = () => {
    const [deals,setDeals] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/deals')
        .then(res =>res.json())
        .then(data =>setDeals(data));
    },[])
    return (
        <div>
           
            <div id="deals">
                <h2 className="text-primary mt-5">Our services</h2>
                <div className="deals-container">
                    {
                       deals.map(deal =><MyDeals deal={deal}></MyDeals>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Deals;