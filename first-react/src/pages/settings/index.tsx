import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Settings = () => {
    const navigate = useNavigate();
    const {theme, toggleTheme} = useTheme();

  return (
    <main className={theme === "light"
        ? "bg-black text-white w-screen h-screen flex justify-center items-center"
        : "bg-white text-black w-screen h-screen flex justify-center items-center"
    }>
        <div className="grid grid-cols-1 gap-y-4">
            <div className="my-5">
                <div
            className= {theme === "light" ? "Night Mode" : "Light Mode"}>
                {theme === "light" ? "Night Mode" : "Light Mode"}
                </div>
            </div>
            <div className="my-5 grid grid-cols-1 gap-y-5">
                <button
                onClick={()=> navigate("/")}
                className="bg-green-500 hover:bg-green-600 focus:outline-none">
                    Go To Home
                </button>
            <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none">
                Change Theme
            </button>
        </div>
        </div>
    </main>
  )
}

export default Settings;