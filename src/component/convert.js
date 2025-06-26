import { useState } from "react";
import './convert.css';
const Converter=()=>{
    const exchangerate=86.40;
    const[dollars,setdollars]=useState("");
    const[rupees,setrupees]=useState("");
    const dollartorupee=(e)=>{
        let dollarvalue=e.target.value;
        setdollars(dollarvalue);
        let rupeevalue= dollarvalue ? (dollarvalue*exchangerate) : "";
        setrupees(rupeevalue);
    }
    const rupeetodollar=(e)=>{
        let rupeevalue=e.target.value;
        setrupees(rupeevalue);
        let dollarvalue= rupeevalue ? (rupeevalue/exchangerate) : "";
        setdollars(dollarvalue);
    }

    return(
        <div className="cont">
            <div className="heading">
                <h1>1 US Dollar = {exchangerate} INDIAN Rupee</h1>
            </div>
            <div>
                <input type="number"
                placeholder="0"
                className="dollar"
                value={dollars}
                onChange={dollartorupee}
                /><span className="d"> : Dollar</span>
            </div>
            <div>
                <input type="number"
                placeholder="0"
                className="rupee"
                value={rupees}
                onChange={rupeetodollar}
                /><span className="r"> : Rupee</span>
            </div>
        </div>
    );
}

export default Converter;