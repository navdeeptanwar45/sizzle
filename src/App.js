import './App.css';
import Home from './screen/home';
import Login from './screen/login';
import Signup from './screen/signup';
import MyOrder from './screen/myorder';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CartProvider } from './components/contextreducer';

function App() {
  return (
    <CartProvider>

   
   <Router>
<div >
  <Routes> 
   < Route exact path = "/" element = {<Home></Home>}/> 
   < Route exact path = "/login" element = {<Login></Login>}/> 
   < Route exact path = "/createuser" element = {<Signup></Signup>}/> 
   < Route exact path = "/myorder" element = {<MyOrder></MyOrder>}/> 


  </Routes>
    </div>
   </Router> 
   </CartProvider>
  );
}

export default App;
