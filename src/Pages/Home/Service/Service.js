import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, body, price } = service;
    const navigate = useNavigate();
    const handleCheckoutButton = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <Card style={{ width: '18rem' }} className='border-2'>
                <Card.Img variant="top" className='card-img' src={img} />
                <Card.Body className='bg-secondary text-white'>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Card.Subtitle className="mb-2 fs-4">Price: ${price}</Card.Subtitle>
                    <Button onClick={handleCheckoutButton} className='checkout-btn' variant='info'>Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;