import React, { useState,useEffect } from "react";
import Body from "../components/body";
import Card from "../components/card";
// import Carousel from "../components/carousel";


import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  const [search,setsearch]= useState("");
const [foodcat,setfoodcat]= useState([]);
const [fooditem,setfooditem]= useState([]);

const loaddata = async()=>{
  let response = await fetch("http://localhost:4000/api/fooddata",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    }
  }) 
  response = await response.json();
  setfooditem(response[0])
  setfoodcat(response[1])
} 
useEffect(() => {
  loaddata()

}, [])


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id ="carousel">
                    <div className='carousel-caption ' style={{zIndex:'10'}}>
                    <div className="d-flex justify-content-center ">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value ={search} onChange={(e)=>{setsearch(e.target.value)}} />
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700?pastry" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700?pizza" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>

      <div className="container">
      { foodcat!==[]?
       foodcat.map((data)=>{
return(
  <div className="row mb-3"> 
  <div key = {data._id} className='fs-3 m-3 '>   {data.CategoryName}</div>
  <hr />
  {
  fooditem!==[]?fooditem.filter((item)=>item.CategoryName===data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase())).map(filtereditems=>{
return(
  <div key={filtereditems._id} className=" col-12 col-md-6 col-lg-3">  
  <Card  fooditem = {filtereditems}
options ={ filtereditems.options[0]}  
 ></Card>    </div>
)
  }

  ): <div>"no such data found"</div>
  }
  </div>
)


       }):<div> """""""</div>
       
      }
       
        </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
