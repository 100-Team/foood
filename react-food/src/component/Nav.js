import React from "react";
import { Link } from 'react-router-dom';
import Counter from './Counter'

export default function Nav() {
  
    
      return(
          <>

<nav className="navbar navbar-expand-lg navbar-light bg-light row">
 <h1 className="col-3" >Hunger Free</h1>
 <div className="col-5" >

</div>
<div className="collapse navbar-collapse col-3 row" id="navbarNav">
<ul className="navbar-nav">
<Link  to="/" > <li className="nav-item active  col-2 ">Home</li> </Link>
<Link  to="/About" > <li className="nav-item col ">About Us</li> </Link>
<Link to="/Contact" ><li className="nav-item col">Contact Us</li></Link>

</ul>
<div className="col-4">
<Counter/>
</div>
</div>
</nav>
      </>
      ); 
    
  }
  
