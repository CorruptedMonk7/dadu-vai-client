import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, price, description, name } = service;
    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-xl font-semibold text-red-400'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bt-color">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;