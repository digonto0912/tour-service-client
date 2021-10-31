import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const ManagesDeal = () => {
    const [deal, setDeal] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/deals')
        .then(res =>res.json())
        .then(data =>setDeal(data))

    }, [])
//delete operation
    const handleDelete = id =>{
        const proceed = window.confirm('do you want to delete')
        if(proceed){
            const url = `http://localhost:5000/deals/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                    }
                    const remainingDeal = deal.filter(dl => dl._id !== id)
                    setDeal(remainingDeal);
                });

        }
        
        
        
    } 
    return (
        <div>
            {
                deal.map(dl => <div className=" d-flex justify-content-center align-items-center mt-5 ">

                    <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
                        <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={deal?.img} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{dl?.name}</h3>
                                <h5 className="card-title">{dl?.duration}</h5>
                                <p>booking ID: {dl._id}</p>

                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <h3 className="text-danger fw-bold">${dl?.price} </h3>
                                    <Link to={`/orderDeal/${dl._id}`}>
                                        <button className="btn btn-primary">Book Order </button>
                                    </Link>
                                  
                                       {
                                        <button onClick={() => handleDelete(dl._id)} className="btn btn-danger">delete </button>
                                       }
                                    


                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default ManagesDeal;