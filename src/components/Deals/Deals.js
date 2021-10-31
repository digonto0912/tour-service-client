import React, { useEffect, useState } from 'react';
import MyDeals from '../MyDeals/MyDeals';
import './Deals.css';

const Deals = () => {
    const [deals,setDeals] = useState([]);
    useEffect(()=>{
        fetch('https://ghastly-spirit-92297.herokuapp.com/deals')
        .then(res =>res.json())
        .then(data =>setDeals(data));
    },[])
    return (
        <div>
           
            <div id="deals">
                <h2 className="text-primary mt-5">Our Services :{deals.length}</h2>
                <div className="deals-container">
                    {
                       deals.map((deal,index) =><MyDeals deal={deal}></MyDeals>)
                      
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Deals;