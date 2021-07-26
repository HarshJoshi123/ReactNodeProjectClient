import React,{Component} from "react"
export default class SignIn extends Component{
constructor(){
  super();
this.state={
   title:'',
   body:''
         
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
addPost=()=>{
  
let user={title:this.state.title,body:this.state.body};
    fetch('http://localhost:8080/newpost',{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-type":"application/json"
    },

    body:JSON.stringify(user)
  
  }).then(response=>{
   this.props.fetchPosts();
   this.setState({title:'',body:''});
    console.log(response);
  }).catch(err=>console.log(err));

  
  

}
componentDidMount(){
// this.getPost().then(resp=>console.log(resp));   
}


render(){
    return(
      <div className="form">
      
        <table style={{padding:"10px"}}>
        <tr>
        <td>  
        <span className="label">Enter Title</span>
        </td>
        <td>
        <input  value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} />
        </td>
        </tr>
        <tr>
          <td>
        <span>Enter Body</span>
        </td>
        <td>
        <textarea  value={this.state.body} size="150" rows="4" onChange={(e)=>this.setState({body:e.target.value})} > </textarea>
        </td>
        </tr>
     
      </table>
      <button style={{marginTop:'10px',alignSelf:"flex-end"}} onClick={()=>this.addPost()} >Add Post </button>
      </div>


    )
}      
 


}