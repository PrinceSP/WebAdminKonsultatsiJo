import React,{useState,useRef} from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const SignIn = () => {
  const username = useRef('')
  const password = useRef('')

  function writeUserData( name, password) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

    return(
      <div style={{display:'flex',flexDirection:'column',width:"100%",height:"100vh",alignItems:'center',justifyContent:'center'}}>
        <h1>MASUK</h1>
        <form action="" style={{display:'flex',flexDirection:'column',width:"30%"}} className="mt-5">
          <label>Username</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-3" name="Username" ref={username} type="text" required/>
          <label>Password</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-5" name="Password" ref={password} type="text" required/>
          <button type="button" style={{width:"100%",height:38,border:'none',borderRadius:5,backgroundColor:"#000",color:"#fff"}}>Masuk</button>
        </form>
      </div>
    );
}

export default SignIn;
