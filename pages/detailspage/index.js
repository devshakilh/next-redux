import React from 'react';
import './detailspage.css'
const DetailsPage = () => {
    return (

        <div className="wrapper">
            <figure>
                <div className="hover-animation">
                    <img className="img-back" src="https://i.postimg.cc/L64f0Hdt/1.jpg" alt="" />
                    <img class="img-front" src="https://i.postimg.cc/6qp3zp7T/2.jpg" alt="" />
                </div>

                <figcaption>
                    <h2>Rolex Watch</h2>
                    <p>$999.99</p>

                </figcaption>
            </figure>
            <figure>
                <div className="hover-animation">
                    <img className="img-back" src="https://i.postimg.cc/MTWKKpmt/3.jpg" alt="" />
                    <img className="img-front" src="https://i.postimg.cc/R0mvXZy9/4.jpg" alt="" />
                </div>

                <figcaption>
                    <h2>Samsung Mobile</h2>
                    <p>$599.99</p>

                </figcaption>
            </figure>

            <figure>
                <div className="hover-animation">
                    <img className="img-back" src="https://i.postimg.cc/1zyZDYV3/5.jpg" alt="" />
                    <img className="img-front" src="https://i.postimg.cc/Vk8NHg03/6.jpg
                                  " alt="" />
                </div>

                <figcaption>
                    <h2>Flower Vase</h2>
                    <p>$59.99</p>

                </figcaption>
            </figure>

        </div>

    );
};

export default DetailsPage;