import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import SignIn from "./signin"; 
class App extends Component{
constructor(){
  super();
  this.state={
   posts:[],
   toggle:false
  }
}

getPost=()=>{
  return fetch('http://localhost:8080/getpost',{
    method:"GET",
    headers: {
      Accept: 'application/json',
  }
  }).then((response)=>{
    //console.log(p);
    return response.json();
  }).catch(err=>console.log(err));
  
  
  }
  
fetchPosts=()=>{
 
  this.getPost().then(resp=>this.setState({posts:resp}));
}

componentDidMount(){
  //this.getPost().then(resp=>this.setState({posts:resp}));
  this.fetchPosts();
}
deletePost=(id)=>{
  fetch(`http://localhost:8080/deletepost/${id}`,{
    method:"DELETE",
    headers:{
    Accept:"application/json",
    "Content-type":"application/json"
    }
 
  }).then(response=>{
    this.fetchPosts();
  }).catch(err=>console.log(err));
 }
 
 logout=()=>{
  localStorage.removeItem("currentUser");
}


render(){

  return(
    <div className="app">
   <a href="/login" onClick={()=>this.logout()} >Logout</a>     
   <button style={{height:'50px',width:'80px',alignSelf:"center"}} onClick={()=>this.setState({toggle:!this.state.toggle})}>Toggle </button>    
  <div id="inp" style={{display:this.state.toggle ? 'block':'none'}}> <SignIn fetchPosts={this.fetchPosts}/> </div> 
   {this.state.posts.map((v,i)=>(
   <div className="card"> 
   
  
 
  <div className="title">{v.title} <button className="delB" onClick={()=>this.deletePost(v._id)}> <span style={{color:"red",fontSize:"30px"}}> &#10006;</span> </button> </div> 
  
  <div>{v.body} </div>
  
</div>

   ))}


    </div>



  )
}


}
export default App;
