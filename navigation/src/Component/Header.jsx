import React from 'react';
import Home from './Home';
import Lunch from './Lunch';
import Breakfast from './Breakfast';
import Dinner from './Dinner';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function Header(props) {

    const Menu = {'/home':"Home",'/breakfast':'Breakfast','/lunch':'Lunch','/dinner':'Dinner'};
    
    const myData = Object.entries(Menu).map((res,i)=>{
        return <li className="nav-item" key={i}>
            <Link to={res[0]} className="nav-link">{res[1]}</Link>
        </li>
    })

    return (
        <><Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {myData}
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/breakfast" element={<Breakfast/>}/>
    <Route path="/lunch" element={<Lunch/>}/>
    <Route path="/dinner" element={<Dinner/>}/>
</Routes>
</Router>
        </>
    );
}

export default Header;