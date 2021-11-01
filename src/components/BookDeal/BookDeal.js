
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './BookDeal.css';
import { Link } from 'react-router-dom';

//
const BookDeal = () => {
    const { id} = useParams();
    console.log(id);
    const [deal,setDeals] = useState([]);
    useEffect(()=>{
        fetch(`https://ghastly-spirit-92297.herokuapp.com/deals/${id}`)
        .then(res => res.json())
        .then(data =>setDeals(data))
    },[])
    // const matchedDeal = deal.filter(dl =>dl._id===id);
    // console.log(matchedDeal);
    return (
        
        <div className=" d-flex justify-content-center align-items-center mt-5 ">
            
            <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
                <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={deal?.img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{deal?.name}</h3>
                        <h5 className="card-title">{deal?.duration}</h5>
                        <p>booking ID: {id}</p>

                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between ">
                            <h3 className="text-danger fw-bold">${deal?.price} </h3>
                            <Link to={`/orderDeal/${id}`}>
                                <button className="btn btn-primary">Book Order </button>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDeal;