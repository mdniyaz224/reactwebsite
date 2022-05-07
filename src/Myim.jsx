import React from "react";
import imm from './Image/cav.png'
import imm1 from './Image/bn.png'
import imm2 from './Image/gr.png'
const Myim = ()=>{
    return(
        <>
        <section className="">
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col-lg-7 m-auto">
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <img src={imm} class="img-luid" height="100px" width="100px"
                               />
                            <h6>NATURAL</h6>
                        </div>
                        <div className="col-lg-4">
                            <img src={imm1} class="img-luid" height="100px" width="100px"
                               />
                            <h6>NATURAL</h6>
                        </div>
                        <div className="col-lg-4">
                            <img src={imm2} className="img-luid" height="100px" width="100px"
                                />
                            <h6>NATURAL</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

       

        </>
    )
}
export default Myim;