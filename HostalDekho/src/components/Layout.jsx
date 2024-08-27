import React from "react";
import Navbar from "./Navbar";
import CollegeList from "./Collegelist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Signup from "./Signup";
import Home from "./Home";
import Contact from "./Contact";
import Booknow from "./Booknow";
import View from "./View";
import Bookform from "./Bookform";
import Booksee from "./Booksee";
function Layout() {
  const name = useSelector((name) => name.data);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book" element={<Booknow />}></Route>
          <Route path="/collegelist" element={<CollegeList />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/bookform" element={<Bookform />}></Route>
          <Route path="/booksee" element={<Booksee />}></Route>
        </Routes>
      </BrowserRouter>
      {/* {name.map((val) => {
        return <h1 key={val.id}>{val.name}</h1>;
      })} */}
    </div>
  );
}

export default Layout;
