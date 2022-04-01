import InputBox from "./InputBox";
import './Login.scss';

const Login = () => {
    return (
        <div className="login-wrapper">
            <InputBox />
            <InputBox />
            <button>Login</button>
        </div>
    );
}

export default Login;