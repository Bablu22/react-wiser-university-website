import React from 'react';
import useService from '../../Hooks/UseService';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useService()

    return (
        <div>
            <div className="section-banner">
                <div className="overlay">
                    <h2>Our Services</h2>
                </div>
            </div>
            <div>
                <h2 className="text-center fst-italic py-5">Our services</h2>

                <div className="row row-cols-1 row-cols-md-4 g-2 container mx-auto mb-0 pb-0">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            item={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;