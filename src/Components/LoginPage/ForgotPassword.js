import React from "react";

const ForgotPassword = (props) => {


    const {
        email,
        setEmail,
        handleForgotPassword
    } = props;
    return(
        <section className ="login">
    <div className='loginContainer'>
               
               <label>Email</label><br></br>
               <input type="text" 
               autoFocus 
               required 
               value={email} 
               onChange ={(e) => setEmail(e.target.value)} 
               
               />
     </div>
     <div className="btnContainer">
                 
                <button onClick={handleForgotPassword}>
                 Submit
                </button>
           </div>
</section>



    )
}
export default ForgotPassword;