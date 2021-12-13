import { useRef, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import {useNavigate} from 'react-router-dom';

function Login() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    //useauth hook..
    const { login } =  useAuth();
    const navigate = useNavigate()

    //state..
    const [info,setInfo] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    //functions
    function loginHandler(e){
        e.preventDefault();
        setIsLoading(true);
        login(emailInputRef.current.value,passwordInputRef.current.value).then(()=>{
            setInfo('Succesfully LoggedIn');
            navigate('/protected-page');
        }).catch((err)=>{
            setInfo(err.message);
        }).finally(()=>{
            setIsLoading(false);
        })
        
    }
    
    return(
        <div>
            <h2>Login Form</h2>
            <text>{info}</text>
            <form onSubmit={loginHandler}>
                <div>
                    <input disabled={isLoading} type='email' ref={emailInputRef} placeholder='Email Address' />
                </div>
                <div>
                    <input disabled={isLoading} type='password' ref={passwordInputRef} placeholder='Password' />
                </div>
                <div>
                    <input disabled={isLoading} type='submit' value='Login' />
                </div>
            </form>
            <div>
                Do not have an account yet?? sign up <button>here</button>
            </div>
        </div>
    )
}

export default Login;