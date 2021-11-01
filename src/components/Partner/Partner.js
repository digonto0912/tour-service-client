import React from 'react';

const Partner = ({deal}) => {
    console.log(deal);
    const {name,duration,price,img} = deal;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{duration}</h5>
        </div>
    );
};

export default Partner;