import React from 'react';
import banner from '../../images/banner1.jpeg'

const Header = () => {
    return (
        <div>
            
            <div className="row d-flex  align-items-center ">
               
                <div className="col-lg col-md">
                    <img className="img-fluid" src={banner} alt="" />

                </div>
                
               

            </div>
        </div>
    );
};

export default Header;