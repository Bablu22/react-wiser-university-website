import React from 'react';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const SingleService = (props) => {
    const { image, name, people, price, desc } = props.item
    const description = desc.slice(0, 100)
    const element = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="mb-4 mt-5">
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Price: ${price}</h5>
                        <p className="card-text text-muted w-100">{description}</p>
                    </div>
                    <div className="card-footer py-3 border-0 bg-white d-flex justify-content-between">
                        <button className="btn lern-btn text-white py-0">See More</button>
                        <small className="text-muted">{element} {people}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;