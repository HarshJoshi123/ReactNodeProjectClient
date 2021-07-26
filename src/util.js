export const isAuthenticated=()=>{
   if(localStorage.getItem("currentUser")){
       return true;
   }
   return false;


}