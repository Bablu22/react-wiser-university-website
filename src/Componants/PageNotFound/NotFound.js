import React from 'react';
import Image from '../../images/4O4.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <h1 className="text-center text-danger fw-bold mt-4">PAGE NOT FOUND</h1>
                <img src={Image} alt="" className="img-fluid w-100 me-auto" />
            </div>
        </div>
    );
};

export default NotFound;