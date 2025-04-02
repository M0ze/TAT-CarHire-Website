import React, { useEffect, useState } from 'react';
import { fetchAvailableCars } from '../services/api';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCars = async () => {
            try {
                const data = await fetchAvailableCars();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getCars();
    }, []);

    if (loading) {
        return <div>Loading cars...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Available Cars for Hire</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        <h3>{car.make} {car.model}</h3>
                        <p>Price: ${car.price} per day</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;