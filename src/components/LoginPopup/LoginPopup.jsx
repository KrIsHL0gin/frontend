import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>
                        {currState}
                    </h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                    
                    <input type="email" placeholder='Your Email' required/>
                    <input type="password" placeholder='Password' required/>

                </div>
                <button>{currState==="Sign up"?"Creat account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms</p>
                </div>
                {currState==="Login"
                ?<p>Creat a new Account? <span onClick={()=>setCurrState("Sign up")}>Click here</span> </p>
                :<p>Alredy have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
                
                
            </form>

        </div>
    )
}

export default LoginPopup
