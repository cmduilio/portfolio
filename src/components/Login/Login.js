import React, {useState} from 'react';
import './Login.css';
import loginIcon from '../../resources/login-icon.png'

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const validate = () => {
        console.log(email);
    }

    return (
            <form className={"login-form"}>
                <img className={"login-icon"} src={loginIcon} alt={""}/>
                <input className={"login-input"} type={"email"}
                       placeholder={"email"}
                       value={email}
                       onChange={ event => setEmail(event.target.value)}/>
                <input className={"login-input"} type={"password"}
                       placeholder={"password"}
                       value={pass}
                       onChange={ event => setPass(event.target.value)}/>
                <input className={"login-submit"} type={"submit"} value={"Login"} onClick={validate}/>
            </form>
    )
}

export default Login;