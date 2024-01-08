import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-8'>
                <p className="text-2xl font-bold text-red-400">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 bg-image p-4 rounded-lg'>
                {
                    services.map(service =>
                        <ServicesCard
                            key={service.id}
                            service={service}
                        >

                        </ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;