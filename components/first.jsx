//import React, { useEffect } from "react";
import axios from "axios";




import { FaMoneyBillTransfer } from "react-icons/fa6";

import { FaArrowRight } from "react-icons/fa";

import { useState } from "react";



// const base_url="http://localhost:3005";


// const my_url="fca_live_q1ta8TjxMf8h5X3XUSaVkG0FTqa0zCHPJjAFn9Ja";

// console.log(my_url.data);


let base_url="https://api.freecurrencyapi.com/v1/latest";
let APİ_key="fca_live_q1ta8TjxMf8h5X3XUSaVkG0FTqa0zCHPJjAFn9Ja";

function First(){

    
// const getallusers= async()=>{
//     const data = await axios.get(base_url+ "/user");
//     console.log(data.data);
// }

// const getuserbyID=async (id)=>{
//     const data= await axios.get(base_url+ "/user/"+ id);
//     console.log(data.data);
// }

// const adduser=async (user)=>{
//     const new_data=await axios.post(`${base_url}/user`,user)
//     console.log("User added "+new_data);
// }

// useEffect(()=>{

//getallusers();
// getuserbyID(2);
// adduser({id:"4",name:"Ümit",
//         username:"umitangara",
//         password:"ümit1717"});

// },[])

const [mouse,setmouse]=useState(false);

function mouse_in(){
    setmouse(true);
}

const [amount,setamount]=useState(0);

const [fromCurrency, setFromCurrency] = useState('USD');

const [toCurrency, setToCurrency] = useState('TRY');

const[result,setresult]=useState(0);

console.log(toCurrency);

function delete_click(){
    setamount(0);
    setresult(0);
}



async function final_result () {
    const input =await axios.get(`${base_url}?apikey=${APİ_key}&base_cuurency=${fromCurrency}`);
    console.log(input.data );

    setresult((amount*input.data.data[toCurrency]).toFixed(2));
}


    return(
        <div className="container">

            <div className="nav">
                <h1>HUZİconverter</h1>

            </div>
            <div className="calc">
                
                    
                    <input value={amount} onChange={(e) =>setamount(e.target.value)} type="number" name="number1" className="amount text" placeholder="Plase enter " required />
                    <select onChange={(e) => setFromCurrency(e.target.value)} className="to-currency select">

                        <option >USD</option>
                        <option>EUR</option>
                        <option >TRY</option>
                        <option >GBP</option>
                    </select>
                    
                    <button style={{marginTop:"20px"}}>
                    
                    <FaMoneyBillTransfer style={{fontSize:"50px",cursor:"pointer"}} />
                    
                    
                   
                    </button>

                    <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency select">
                        
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                        <option >GBP</option>
                    </select>

                    <input value={result} onChange={(e) => setresult(e.target.value)} type="number" name="number2" className="result text" placeholder="Plase enter " required />
                

            </div>

            <button  onClick={final_result} style={{marginTop:"5px"}} className="calculate">Calculate <FaArrowRight style={{marginTop:"2px"}}/></button>

            <button onMouseOut={()=>{setmouse(false)}} onClick={delete_click} onMouseOver={mouse_in}  style={{backgroundColor: mouse ? "red" :"bisque",borderRadius:"50px",cursor:"pointer",marginTop:"20px",height:"50px",width:"60px"}} className="delete">Delete</button>
        </div>
    )

}


export default First;


