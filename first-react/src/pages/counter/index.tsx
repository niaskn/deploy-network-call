import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmout } from "../../redux/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(
        (state: {counter: {value: number}}) => state?.counter?.value);
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-x-5">
            <button 
            onClick={()=> dispatch(increment())}
            className="p-5 w-full h-20 bg-green-500 text-white">
                Increment
            </button>
            <h3 className="font-bold">Count :{count}</h3>
            <button 
            onClick={() => dispatch(decrement())}
            className="p-5 w-full h-20 bg-red-500 text-white">
                Decrement
            </button>
            <div className="my-5">
                <button
                onClick={()=> dispatch(incrementByAmout(count))}
                className="p-5 w-full h-20 flex items-center bg-orange-500 text-white">
                    Increment By Amount
                </button>
            </div>
        </div>
    </main>
  )
}

export default Counter;