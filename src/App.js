import React from "react"
import Map from "./mapcomponent"
import Navbar from "./Components/nav.js"
import Body from "./Components/body"
import Posting from "./Components/Body/Postings"
import LoginPage from "./Components/LoginPage/LoginPage"
import JobPosting from "./Components/props/Props"
import ContactUsPage from "./Components/ContactUsPage/ContactUs"
import MapSearch from "./OtherMap"
import createAccount from "./Components/createAccount"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../src/index.css'

function App() {
  return( 

<div>

<Router>

      <Navbar/>
      
      <Route path="/JobPosting" component={JobPosting} />
      <Route path="/Map" component={Map} />
      <Route path="/Body" component={Body} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/MapSearch" component={MapSearch} />
      <Route path="/createAccount" component={createAccount} />


</Router>





         {/* 
       
       <Map/> 
       <Body/>
       <LoginPage/>  
       <Posting/>
          
         <LoginPage/>

         
         */} 
          
      
          
</div>

  )
}

export default App;
