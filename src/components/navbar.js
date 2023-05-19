import React, { useState } from 'react'
import Modal from '../modal';
import Cart from '../screen/Cart';
import { Link, useNavigate } from 'react-router-dom';
import  Badge  from 'react-bootstrap/Badge';
import { useCart } from './contextreducer';
export default function Navbar() {
const [cartview, setcartview] = useState(false);
let data = useCart();
  const navigate = useNavigate();

  const handlelogout = ()=>{
    localStorage.removeItem('authtoken')
    navigate('/login')
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic " to ="/">Sizzle</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem('authtoken'))?<li className="nav-item">
      <Link className="nav-link active fs-5"  aria-current="page" to="/MyOrder">My Orders</Link>
      </li >:
      ""
      
      }
      </ul>
      {(!localStorage.getItem('authtoken'))?<div className='d-flex '>
      <Link className="btn bg-white text-success mx-1"  aria-current="page" to="/login">Login</Link>
      <Link className="btn bg-white text-success mx-1" aria-current="page" to="/createuser">SignUp</Link>
      </div >:
      <div>
         <div className="btn bg-white text-success mx-2" onClick ={ ()=>{setcartview(true)}}> My Cart {" "}
         <Badge pill bg = "danger " >{data.length}</Badge>
         </div>
         {cartview?<Modal onClose={()=>{setcartview(false)}}><Cart></Cart> </Modal>:null}
      <div className="btn bg-white text-danger mx-2" onClick={handlelogout}> Logout</div>
      </div>
      }
      
    </div>
  </div>
</nav>
    </div>
  )
}
