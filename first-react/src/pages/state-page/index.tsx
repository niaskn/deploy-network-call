import {useState} from "react";
import Button from "../../components/Button"
import Swal from "sweetalert2"
const StatePage = () => {
    const[count, setCount]= useState<number>(0);
    const[color, setColor]= useState<boolean>(false);
    const incrementCount = () => {
        setCount(count+1);
    }
    const decrementCount = () => {
        setCount(count-1);
        if(count <= 0) {
            Swal.fire("Out of range");
            setCount(0);
        }
    }
    const changeColor = () => {
        setColor(!color);
    }
  return (
    <main className="container">
        <div className="button-group">
            <Button 
            style={color===true ? "button-reusable-green" : "button-reusable-red"}
            title="+" 
            onClick={incrementCount}/>
           <div>
           <h3>Number Count : {count} </h3>
           <Button 
           style={color===true ? "button-reusable-green" : "button-reusable-red"}
           title="Change Color" onClick={changeColor}/>
           </div>
            <Button 
            style={color===true ? "button-reusable-green" : "button-reusable-red"}
            title="-" onClick={decrementCount}/>
        </div>
    </main>
  )
}

export default StatePage