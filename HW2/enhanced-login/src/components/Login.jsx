import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import '../App.scss';

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginState, setLoginState] = useState(true)

    const database = [
        {
            username: "admin",
            password: "adminpassword"
        }
    ]

    const userData = {
        "username": username,
        "password": password
    }

    const loginHandle = (e) => {
        e.preventDefault();

        //CHECK-USERNAME-IF-EXISTING-IN-DB
        const userCredentials = database.find((user) => user.username === userData.username)

        //CHECK-IF-PASSWORD-MATCHES-TO-USERNAME
        if (userCredentials.password === userData.password) {
            alert("Succesfully Signed-In")
            setLoginState(false)
        }else{
            alert("Wrong-Password")
        }
    }

    const logoutHandle = () => {
        setLoginState(true)
        alert("Succesfully Signed-Out")
    }

    return (
        <div className="loginWrapper">
            {loginState ? (
            <form className="loginForm">
                <Input type="text" change={(e)=>setUsername(e.target.value)} name="username" placeholder="Username"/>
                <Input type="password" change={(e)=>setPassword(e.target.value)} name="password" placeholder="Password"/>
                <Button onClick={loginHandle}>Login</Button>
            </form>
    ) : (
        <form className="loginForm">
            <h1>Welcome! {userData.username}</h1>
            <Button onClick={logoutHandle}>Logout</Button>
        </form>
    )}
        </div>
    );
}

export default Login;