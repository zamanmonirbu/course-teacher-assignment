import React from 'react';
import { Link } from 'react-router-dom';

const Check = () => {
    return (
        <div>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Course</Link>
            <Link to='/instructor'>Instructor</Link>
            <Link to='/pricing'>Pricing</Link>

        </div>
    );
};

export default Check;