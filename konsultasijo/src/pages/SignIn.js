import React,{useState} from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const SignIn = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  function writeUserData( name, password) {
    const db = getDatabase();
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      updateStarCount(postElement, data);
    });
  }

    return(
      <div style={{display:'flex',flexDirection:'column',width:"100%",height:"100vh",alignItems:'center',justifyContent:'center'}}>
        <h1>MASUK</h1>
        <form action="" style={{display:'flex',flexDirection:'column',width:"30%"}} className="mt-5">
          <label>Username</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-3" name="Username" value={username} type="text" onChange={(value)=>setUsername(value)}/>
          <label>Password</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-5" name="Password" value={password} type="text" onChange={(value)=>setPassword(value)}/>
          <button type="button" style={{width:"100%",height:38,border:'none',borderRadius:5,backgroundColor:"#000",color:"#fff"}}>Masuk</button>
        </form>
      </div>
    );
}

export default SignIn;
