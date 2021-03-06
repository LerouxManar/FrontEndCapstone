import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from"react-bootstrap";
import {Form,Button} from "react-bootstrap"
import * as styles from "./LoginPage.css"
import Rightside from "./Rightside"
import {Link} from 'react-router-dom';
function LoginPage (){
    return (
<div className="loginForm">


<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <Link to = "/Body"> 
  <button type="submit" className="submitButtons">Submit</button> 
  </Link>
  <Link to = "/createAccount"> 
  <button type="create" className="submitButton">Create Account</button>
      </Link>
</form>


<Rightside/> 
</div>



    );

}

export default LoginPage; 