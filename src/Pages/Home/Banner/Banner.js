import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/banner1.png';
import banner2 from '../../../images/banners/banner2.png';
import banner3 from '../../../images/banners/banner3.png';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='bg-light bg-gradient rounded-3 px-5'>
                        <h5>Complete your wedding with Wedding-Portrait!</h5>
                        <p className='mb-2 mt-4'>Book whole day special package and keep your whole wedding in frame.</p>
                        <p>I will be very happy to being a part of your memorable day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='bg-light bg-gradient rounded-3 px-5'>
                        <h5>Book the special package today!</h5>
                        <p className='mb-2 mt-4'>There is whole day package in the new launched special package. Many people loved it.</p>
                        <p>I am waiting for you. I hope you will love it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='bg-light bg-gradient rounded-3 px-5'>

                        <h5>A great thing to make your memorable day more special!</h5>
                        <p className='mb-2 mt-4'>A new package is launching in this month.</p>
                        <p>Stay updated with Wedding-Portrait for more excited packages.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;