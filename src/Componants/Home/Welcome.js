import React from 'react';
import WelcomeImage from '../../images/welcome.webp'
const Welcome = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex- justify-content-center align-items-center py-5 my-5">
                    <div className="col-md-6">
                        <h1>Welcome to University</h1>
                        <p>Explore our welcome website and find out all you need to know about joining us as a new student.

                            We can’t wait to welcome all our new students, as well as our returning students for the 2021-22 academic year.

                            Get ready to join us by completing your welcome steps before you arrive. The steps include essential tasks for you to be able to register as a student with us.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={WelcomeImage} alt="" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;