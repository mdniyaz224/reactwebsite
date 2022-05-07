import React from "react";
import img1 from './Image/myimg.png'
import img2 from './Image/bns.png'
import img3 from './Image/mmlk.png'
import img4 from './Image/mymmmm.png'
const Card = ()=>{
    return(
        <>
         <section className="product">
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-5 m-auto text-center">
                    <div className="row text-center">
                        <h1 className="animate__animated  animate__lightSpeedInRight">What`s Tranding</h1>
                        <h6 className="animate__animated animate__lightSpeedInLeft ">Be Healthy Organic Food</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className ="row ">
            <div className="col-lg-3 text-center ">
                <div className="card border-0 bg-light mb-2">
                    <div className="card-body">
                        <img src={img1} alt="" className="img-fluid" width="343px" height="500px" />
                    </div>
                </div>
                <h6>Energy Food</h6>
                <p>$39.99</p>
            </div>
            <div className="col-lg-3 text-center ">
                <div className="card border-0 bg-light mb-2">
                    <div className="card-body">
                        <img src={img2} alt="" className="img-fluid" width="343px" height="500px" />
                    </div>
                </div>
                <h6>Energy Food</h6>
                <p>$39.99</p>
            </div>
            <div className="col-lg-3 text-center ">
                <div className="card border-0 bg-light mb-2">
                    <div className="card-body">
                        <img src={img3} alt="" className="img-fluid" width="343px" height="500px" />
                    </div>
                </div>
                <h6>Energy Food</h6>
                <p>$39.99</p>
            </div>
            <div className="col-lg-3 text-center ">
                <div className="card border-0 bg-light mb-2">
                    <div className="card-body">
                        <img src={img4} alt="" className="img-fluid" width="343px" height="500px" />
                    </div>
                </div>
                <h6>Energy Food</h6>
                <p>$39.99</p>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center m-auto">
                    <button className="btn1 bt animate__animated animate__lightSpeedInLeft ">Click For More</button>
                </div>
            </div>
        </div>
    </section>
       
        </>
    )
}
export default Card;