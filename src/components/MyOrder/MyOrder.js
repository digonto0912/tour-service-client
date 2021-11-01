import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const MyOrder = () => {
    const {user} =useAuth();
    const [orders,setOrders] =useState([]);
    useEffect(()=>{
        fetch(`https://ghastly-spirit-92297.herokuapp.com/myorders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
    //delate 
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('do you want to delete')
        if (proceed) {
            const url = `https://ghastly-spirit-92297.herokuapp.com/myorders/${id}`
            fetch(url, { 
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0) {
                        alert('deleted successfully');
                    }
                    const remainingOrders = orders.filter(order => order._id !== id)
                    setOrders(remainingOrders);
                });

        }



    }
    return (
        <div>
            <h1 className="text-primary">Total booking order {orders.length}</h1>
            {
                orders.map(order => <div className=" d-flex justify-content-center align-items-center mt-5 ">

                    <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
                        <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                <img src={order?.img} className="card-img-top h-75 w-75" alt="" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Name:{order?.name}</h3>
                                <h5 className="card-title">Duration:{order?.duration}</h5>
                                <p>booking status: {order.status}</p>
                                <h5 className="text-danger fw-bold">${order?.price} </h5>

                            </div>
                            <div className="card-footer">
                                
                                <div className="d-flex align-items-center justify-content-center ">
                                    

                                    


                                    {
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger">delete </button>
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

export default MyOrder;