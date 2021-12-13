import { useState,useRef } from "react";
import { useAuth } from "../../Contexts/AuthContext";



function Signup() {

    //inputs..
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordRef = useRef();

    //states..
    const [isLoading,setIsLoading] = useState(false);
    const [info,setInfo] = useState('');

    //const {currentUser} = useAuth();
    const { signup }  = useAuth()
    function signupHandler(e) {
        e.preventDefault();
        if(passwordInputRef.current.value!==confirmPasswordRef.current.value){
            setInfo('Passwords do not match!!');
        }else{
            setInfo('');
        setIsLoading(true);
        signup(emailInputRef.current.value,passwordInputRef.current.value).then(()=>{
            setInfo('successfull');
        }).catch(err=>{
            setInfo(err.message)
        }).finally(()=>setIsLoading(false));
    }
    }

        //input form goes here ..

        return(
            <div>
                <h2>Sign Up</h2>
                <text>{info}</text>
                <form onSubmit={signupHandler}>
                    <div>
                        <input disabled={isLoading} type='email' ref={emailInputRef} placeholder="Email Address"/>
                    </div>
                    <div>
                        <input disabled={isLoading} type='password' ref={passwordInputRef} placeholder="Password" />
                    </div>
                    <div>
                        <input disabled={isLoading} type='password' ref={confirmPasswordRef} placeholder="Confirm Password" />
                    </div>
                    <div>
                        <input disabled={isLoading} type='submit' value="Register" />
                    </div>
                </form>
            </div>
        )

}

export default Signup;