import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import "./accountCreation.css"

function createAccount (){
    return(

        <div>
              <form>

  <div className="form-group-sign">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group-sign">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group-sign">
    <label for="name">Full Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full Name"/>
  </div>
  </form>

  <Link to = "/LoginPage"> 
  <button type="submit" className="CreateAccountButton">Create Account</button> 
  </Link>
  
        </div>
        

    )
} export default createAccount;