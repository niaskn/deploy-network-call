import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../../components/Input";
import TailwindButton from "../../components/TailwindButton";
import {data} from "../../dummy/credentials";

const AuthPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState ({email:"", password:""});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };
    const handleSubmit =(e:React.FormEvent) => {
        e.preventDefault();
        if (
            credentials.email !== data.email &&
            credentials.password!== data.password
        ) {
            Swal.fire({
                icon: "error",
                title: "Incorrect password or email",
                text: "Please enter your correct password or email address",
                confirmButtonText: "OK",
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Succes Login",
                text: "You have successfully login!",
                confirmButtonText: "OK",
            }).then((response)=> {
                if (response.isConfirmed) {
                    navigate("/auth-page/landing-page/23")
        }
            })
        }}
    

  return (
    <main className="w-screen h-full flex justify-center items-center">
        <div className="w-60 grid grid-cols-1">
            <form onSubmit={handleSubmit} className="space-y-5">
            <Input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            placeholder="type your email here ..."
            onChange={handleChange}
        />
        <Input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            placeholder="type your password here ..."
            onChange={handleChange}
        />
            <TailwindButton
            id="login-button" title="Login" type="submit"
            />
            </form>
        </div>
    </main>
  )
};


export default AuthPage