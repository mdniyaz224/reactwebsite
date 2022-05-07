import React from "react";
const Nav = ()=>{
    return(
        <>
       <nav className="navbar navbar-expand-lg " >
        <div className="container">
            <a className="navbar-brand" href="#">Organic</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TRENDING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ORGANIC</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">STORE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className=" px-2 search" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn0 " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
        </>
    )
}
export default Nav;