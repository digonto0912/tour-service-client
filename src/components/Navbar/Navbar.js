import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
    const {user,logOut} = useAuth();
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid ">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">

                          
                            
                          
                            <Link to="/home" className='nav-link text-black'>home</Link>
                            <Link to="/deals" className='nav-link text-black'>Todays Deal</Link>
                            <Link to="/admin" className='nav-link text-black'>ADMIN</Link>
                            <Link to="/partner" className='nav-link text-black'>our partner</Link>
                            
                            
                            

                            
                            
                            <Link to="" className='nav-link text-black'>signed by :<span style={{ color: 'blue' }}>{user.displayName} </span></Link>
                        
                            
                            
                            

                            {
                            user.email ? <Link to="/myOrder" className='nav-link text-black'>My order</Link>

                                    
                               
                                    :
                                    <Link to="/login">
                                        <button className="btn btn-warning me-2" >Log In</button>
                                    </Link> 
                                   


                            }
                        <button onClick={logOut} className="btn btn-primary me-2" >Log-out</button>









                        </div>

                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;