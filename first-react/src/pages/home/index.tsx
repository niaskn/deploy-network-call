import { useTheme } from "../../context/ThemeContext";
import { useCounter } from "../../hooks/useCounter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Home = () => {
    const navigate = useNavigate();
    const {theme} = useTheme();
    const {count, increment, decrement} = useCounter();
    const [isToggled, toggle] = useToggle();
    const themeContainer = {
        black: "bg-black w-screen h-screen flex justify-center items-center",
        white: "bg-white w-screen h-screen flex justify-center items-center"
    }
    useEffect(()=> {
        const auth = Cookies.get("auth");
        if (!auth) {
            navigate("/auth-cookie");
        } else {
            return;
        }
    }, []);
    const handleLogout = () => {
        Swal.fire ({
            icon: "success",
            text :"success",
            title: "logout",
            confirmButtonText: "OK",
        }).then((response)=> {
            if (response.isConfirmed) {
                Cookies.remove("auth");
                navigate("/auth-cookie");
            }
        })
    };
   
  return (
    <main className= {
        theme === "light" ? themeContainer.black : themeContainer.white
    }
    >
        <div className="grid grid-cols-1 gap-y-3">
            <div className="my-3">
                <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                    Logout
                </button>
            </div>
            <div className="my-3">
                <h4>{isToggled ? "ON" : "OFF"}</h4>
            </div>
        </div>
        <div className="my-3">
            <button
            onClick={toggle}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                Toggle
            </button>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
            <div className="my-3">
            <button
                onClick={increment}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                    Increment
                </button>
                </div>

                <div className="mx-5">
                    <h4>Counter : {count}</h4>
                </div>
                <div className="my-3">
                <button
                onClick={decrement}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                    Decrement
                </button>
            </div>
        </div>
        <div
        className={
            theme === "light" ? "text-white font-bold" : "text-black font-bold"}
        >
            <h4>Home Page</h4>
            <p>Mode : {theme === "light" ? "Night Mode" : "Light Mode"}</p>
        </div>
    </main>
  )
}

export default Home;