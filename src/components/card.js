import React, {useRef, useState,useEffect}from 'react'
import { useDispatch,useCart } from './contextreducer';


export default function Card(props) {
    let dispatch = useDispatch();
    let data = useCart();
    let options = props.options;
    let priceoptions = Object.keys(options)
    const [qty, setqty] = useState(1)
    const [size, setsize] = useState("")
    const priceref = useRef();

    const handleaddtocart = async ()=>{

        let food = []
        for (const item of data) {
          if (item.id === props.fooditem._id) {
            food = item;
    
            break;
          }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: props.fooditem._id, price: finalprice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: props.fooditem._id, name: props.fooditem.name, price: finalprice, qty: qty, size: size,img: props.ImgSrc })
            console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice,qty:qty,size:size})
 
    }
    let finalprice =qty*parseInt(options[size])
    useEffect(() => {
      
    
     setsize(priceref.current.value)
    }, [])
    
    return (
        <div>
            <div>

                <div
                    className="card mt-5 "
                    style={{ width: "18rem", maxHeight: "460px" }}
                >
                    <img src={props.fooditem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}} />
                    <div className="card-body">
                        <h4 className="card-title">{props.fooditem.name}</h4>
                        <p className="card-text">
                           
                        </p>
                        <div className="container w-100"></div>
                        <select className="m-2 h-100 fs-4 bg-success rounded" onChange={(e)=>setqty(e.target.value)}  id="">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>

                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100 fs-4 bg-success rounded"  ref ={priceref} onChange={(e)=>setsize(e.target.value)} id="">
                           {priceoptions.map((data)=>{
                            return <option key = {data} value = {data}>{data} </option>
                           })}

                        </select>
                        <div className="d-inline h-100 fs-4"> Rs{finalprice}/-</div>
                    </div>
                    <hr />
                    <div>

                    <button className={" btn btn-success justify-center mb-2 ms-2"} onClick = {handleaddtocart}> Add To Cart </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
