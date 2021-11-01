import React from 'react';
import Partner from '../Partner/Partner';
const deals = [{
    name: 'Air bnb',
    price: '1130',
    duration: '5 days tour',
    img: 'https://i.ibb.co/VmcfZGC/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg'
},
{
    name: 'booking.com',
    price: '1000',
    duration: '3 days tour',
    img: 'https://i.ibb.co/VmcfZGC/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg'
},
{
    name: 'iceland northern light',
    price: '1130',
    duration: '5 days tour',
    img: 'https://i.ibb.co/3NCP1yb/itinerary-mobi-Costa-Rica-San-Miguel-de-Sarapiqui-Mi-Cafecito-Coffee-Plantation-Tour-CEO-Local-Guide.jpg'
},
{
    name: 'best of spain',
    price: '940',
    duration: '7 days tour',
    img: 'https://i.ibb.co/yk7927c/spain-best-places-to-visit-madrid.jpg'
},
{
    name: 'kenya camping safari',
    price: '500',
    duration: '3 days tour',
    img: 'https://i.ibb.co/pQkWM2Q/best-places-to-visit-in-egypt-2.jpg'
}

]

const Partners = () => {
    return (
        <div className="container " >
            <h2>Our partner</h2>
            <div className ="row">
                {
                    deals.map(dl => <Partner deal={dl}></Partner>)
                }

            </div>
          
            
           
        </div>
    );
};

export default Partners;