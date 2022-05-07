import React from "react";
import img2 from './Image/la.jfif'
import img3 from './Image/ftrimg.jpg'
const Content = () => {
    return (
        <>
            <section className="about">
                <div className="container ">
                    <div className="row py-5">
                        <div className="col-lg-8 m-auto text-center">
                            <h1 className=" hh animate__animated  animate__lightSpeedInRight"> Welcome To Our Organic Food sociaty </h1>
                            <h6 className=" hh animate__animated animate__lightSpeedInLeft "> BE Healthy Organic Foot</h6>
                        </div>
                        <div className="row about1">
                            <div className="col-lg-4">
                                <img src={img2} />
                                <h4> Best Quality product</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. 
                                Doloribus cumque, unde,<br /> consequatur voluptates perferendis quisquam <br/>
                                ad consectetur alias atque placeat modi? Cupiditate,<br /> natus sint eius cumque nemo esse fuga iure?
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <img src={img3} />
                                <h4> Best Quality product</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. 
                                Doloribus cumque, unde,<br /> consequatur voluptates perferendis quisquam <br/>
                                ad consectetur alias atque placeat modi? Cupiditate,<br /> natus sint eius cumque nemo esse fuga iure?
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <img src={img2} />
                                <h4> Best Quality product</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. 
                                Doloribus cumque, unde,<br /> consequatur voluptates perferendis quisquam <br/>
                                ad consectetur alias atque placeat modi? Cupiditate,<br /> natus sint eius cumque nemo esse fuga iure?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Content;