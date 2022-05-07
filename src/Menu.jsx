import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Trending from "./Trending";
import Store from "./Store";
import Contact from "./Contact";
import Organic from "./Organic";
const Menu = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Store />} />
            <Route path="teams" element={<Trending />}>
              <Route path=":teamId" element={<Organic />} />
              <Route path="new" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Menu;