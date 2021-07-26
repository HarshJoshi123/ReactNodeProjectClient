import React,{Component} from "react"
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./login.js";
import Signup from "./signup";
import App from "./App.js";
export default class Home extends Component{
 
 render(){
     return(
    <Router>
   <Switch>
  <PrivateRoute exact path="/" component={App} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={Signup} />
   </Switch>

   </Router>

     )
 }


}