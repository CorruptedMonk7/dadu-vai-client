import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='gradient-overlay'>
                <img src={image} alt='' className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 top-1/3 ">
                <h1 className='text-6xl mb-5 font-semibold text-white'>
                    Specialized Care
                    <br />
                    for
                    <br />
                    Old Age People
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 top-1/2 ">
                <p className='font-s mb-5 font-semibold text-gray-300'>
                    We will take care of your parents while you are away.
                </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-40 mx-auto top-2/3 ">
                <button className="btn btn-error mx-5">Details</button>
                <button className="btn btn-outline btn-warning ">Book Service</button>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-10 right-10 bottom-0 justify-start">
                <a href={`#slide${prev}`} className="btn btn-circle mr-10">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;