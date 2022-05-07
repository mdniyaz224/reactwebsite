import React from "react";
import './App.css';
import img1 from './Image/img1.jpg'
const Header = () => {
    return (
        <>
            <section className="main">
                <img src={img1} />
                <div class="container py-5">
                    <div class="row py-4">
                        <div class="col-lg-12 pt-5 text-center">
                            <h1 className="animate__animated animate__slideInDown">Nature Has Always Cared For Us !</h1>
                            <button className="btn1 animate__animated animate__lightSpeedInRight">More Tips</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header;
<img className="main" src={img1} />