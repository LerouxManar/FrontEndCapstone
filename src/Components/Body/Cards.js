import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from"react-bootstrap";
import * as styles from "./Cards.css"
import { FcManager, FcBusinesswoman,FcBusinessman  } from 'react-icons/fc';
import manager from './manager.png'
import {Link} from "react-router-dom"



function Cards () {
    return(
        

<div class="card-deck">
        <div>
          <Link to ="/JobPosting">
        <button className="btn-size">  <img src={manager} alt="manager" /> </button>
        </Link>
        <h4 className="title"> Looking for a Job </h4>
        </div>
        <div>
        <Link to ="/Map">
        <button className="btn-size">  <img src={manager} alt="manager" /> </button>
        </Link>
        <h4 className="title">Hiring for a Job</h4>
        </div>
  </div>

        
    ); 
}

export default Cards;