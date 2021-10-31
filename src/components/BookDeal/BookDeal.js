import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import './BookDeal.css';

const BookDeal = () => {
    const { id} = useParams();
    console.log(id);
    const [deal,setDeals] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/deals')
        .then(res => res.json())
        .then(data =>setDeals(data))
    },[])
    const matchedDeal = deal.filter(dl =>dl._id===id);
    console.log(matchedDeal);
    return (
        <div className=" d-flex justify-content-center align-items-center mt-5 ">
            <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
                <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={matchedDeal[0]?.img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{matchedDeal[0]?.name}</h3>
                        <h5 className="card-title">{matchedDeal[0]?.duration}</h5>

                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between ">
                            <h3 className="text-danger fw-bold">${matchedDeal[0]?.price} </h3>
                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDeal;