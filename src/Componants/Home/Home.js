import React from 'react';
import useService from '../../Hooks/UseService';
import Banner from '../Header/Banner';
import '../Header/Header.css'
import SingleService from '../SingleService/SingleService';
import Welcome from './Welcome';




const Home = () => {

    const [services] = useService()
    const sliceService = services.slice(0, 4);

    return (
        <div>

            <Banner></Banner>
            <Welcome></Welcome>
            <div>
                <h2 className="text-center fst-italic py-5">Our services</h2>

                <div className="row row-cols-1 row-cols-md-4 g-2 container mx-auto">
                    {
                        sliceService.map(service => <SingleService
                            key={service.id}
                            item={service}
                        ></SingleService>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;