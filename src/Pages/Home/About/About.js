import React from 'react';
import image from '../../../Asset/about.jpg'
import image2 from '../../../Asset/about2.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-20 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2 mb-40'>
                    <img src={image} alt='' className="max-w-sm border-8 ml-5 h-1/2 rounded-lg shadow-2xl" />
                    <img src={image2} alt='' className="absolute border-8 top-3/4 w-2/3 right-20 max-w-lg rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;