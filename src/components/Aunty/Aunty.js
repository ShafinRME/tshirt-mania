import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <p>House:{house}</p>
            <button onClick={handleHouseIncrease}>Aunty magic</button>
            <h2>Aunty</h2>
        </div>
    );
};

export default Aunty;