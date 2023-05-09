import React from 'react';
import { useParams } from 'react-router-dom';

const Instructor = () => {
    const {name}=useParams();
    return (
        <div>
            <p>From istructor{name}</p>
        </div>
    );
};

export default Instructor;