import React from 'react';
import BookDeal from '../BookDeal/BookDeal';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning  mt-3">
            <div className="container-fluid  ">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">




                        <Link to="/addDeal" className='nav-link text-black'>Add Deal</Link>
                        <Link to="/managesDeal" className='nav-link text-black'>Managed Deal</Link>
                        <Link to="/admin" className='nav-link text-black'>Admin</Link>
                        



                        
                             



                        









                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Admin;