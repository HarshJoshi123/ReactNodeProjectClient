import React,{Component} from "react"
import {Route,Redirect} from "react-router-dom"
import {isAuthenticated}  from "./util.js"

const PrivateRoute=({component:Component})=>(

<Route  
    
    render={props=>
              isAuthenticated() ? (
               <Component {...props} />
              	) : (
                  <Redirect to={{
                  	 pathname:"/login",
                  	 state:{ from: props.location}
                  }}
          />
       	) 


    }
/>

);
export default PrivateRoute