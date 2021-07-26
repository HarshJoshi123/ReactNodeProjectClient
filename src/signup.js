import React,{Component} from "react";
export default class Signup extends Component{
     constructor(){
     super();
     this.state={
         email:'',
         password:'',
         error:''
     }
        
    }
signup=()=>{
  let users=JSON.parse(localStorage.getItem("users")) || [];
 
  for(let i=0;i<users.length;i++){
       if(this.state.email == users[i].email){
           this.setState({error:"User already exists!!"})
           return ;
       } 
  }
 
  let user={email:this.state.email,password:this.state.password};
  users.push(user);
localStorage.setItem("users",JSON.stringify(users));
this.setState({error:'Signup Success'});
}
 

    render(){
        return(
     <div style={{display:'flex',justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
         <div style={{backgroundColor:"#f2f2f2",borderRadius:"5px",padding:"20px",display:"flex",height:"400px",width:"400px",flexDirection:"column",justifyContent:'space-around'}}> 
           
          
           <div style={{width:"100%"}}>
            <div>EMAIL ID</div>   
           <input className="inp" placeholder="Enter Email" required onChange={(e)=>this.setState({email:e.target.value})} />
           </div>
           <div>
            <div>PASSWORD</div>
           <input  className="inp" placeholder="Enter Password" required type="password" onChange={(e)=>this.setState({password:e.target.value})} />
           </div>
           <button onClick={()=>this.signup()}> Sign Up</button> 
           <span style={{color:"red"}}>{this.state.error}</span>
   
        </div>


     </div>

        )
    }



}



