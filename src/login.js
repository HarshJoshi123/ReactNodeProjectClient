import React,{Component} from "react"
import {Redirect,Link} from "react-router-dom";

export default class Login extends Component{
 constructor(){
    super();
    this.state={
        email:'',
        password:'',
        message:'',
        redirect:''
    } 

 }

validate=()=>{
 let users=JSON.parse(localStorage.getItem("users"));
  for(let i=0;i<users.length;i++){
      if(users[i].email == this.state.email && users[i].password==this.state.password){
       console.log("login success");
       localStorage.setItem("currentUser",JSON.stringify(users[i]));
       this.setState({redirect:true})
    }
  }
  this.setState({message:"login failed"});


}

 render(){
      if(this.state.redirect){
          return (<Redirect to="/" />)
      }
     return(
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",marginTop:"50px",flexDirection:"column"}}>
        <div style={{backgroundColor:"#f2f2f2",borderRadius:"5px",padding:"20px",display:"flex",height:"400px",width:"400px",flexDirection:"column",justifyContent:'space-around'}}> 
         
          <div >
           <div>EMAIL ID</div>   
          <input className="inp" placeholder="Enter Email" required onChange={(e)=>this.setState({email:e.target.value})} />
          </div>
          <div>
           <div>PASSWORD</div>
          <input  className="inp" placeholder="Enter Password" required type="password" onChange={(e)=>this.setState({password:e.target.value})} />
          </div>
          <button onClick={()=>this.validate()}> Login</button> 
           <span style={{color:"red"}}>{this.state.message}</span>
                   
     
       </div>
       <span> New User ? <Link to="/signup">Signup Here</Link>  </span>

    </div>
    

     )
 }

}