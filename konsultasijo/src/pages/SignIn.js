import React,{useContext,useRef,useState} from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../configs/firebase'
import {AuthContext} from '../context/AuthContext'
import '../assets/signIn.css'

const SignIn = ({navigation}) => {
  const username = useRef('')
  const password = useRef('')
  const [message,setMessage] = useState(null)
  const {dispatch} = useContext(AuthContext)
// console.log(username.current.value,password.current.value);
  const writeUserData = (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    // console.log(true);
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/`))
    .then((snapshot) => {
      // console.log(true);
      if (snapshot.exists()) {
        let userData = Object.values(snapshot.val());
        userData.filter((item)=>{
          // console.log(item.role);
          if (item.role!=='admin') {
            setMessage("Not an admin!");
            return false;
          }
          if(item.name === username?.current?.value && item.password === password?.current?.value){
            // console.log(item);
            dispatch({ type: "LOGIN_SUCCESS", payload: item });
            return true
          } else{
            // console.log('Incorrect email or password!')
            setMessage('Incorrect email or password!')
            return false
          }
        })
        setTimeout(()=>{
          setMessage(null);
        },2000)
      } else {
        // console.log("No data available");
        dispatch({type:"LOGIN_FAILURE", payload: null})
      }
    }).catch((error) => {
      // console.error(error);
      dispatch({type:"LOGIN_FAILURE", payload: error})
    });
  }

    return(
      <div style={{display:'flex',flexDirection:'column',width:"100%",height:"100vh",alignItems:'center',justifyContent:'center',backgroundColor:"#0085FA"}}>
        <div style={{display:'flex',flexDirection:'column',width:"30%",alignItems:'center',backgroundColor:"#fff",borderRadius:20,padding:'35px 25px'}}>
          <h1>MASUK</h1>
          {message ? <p>{message}</p> : null}
          <form  style={{display:'flex',flexDirection:'column',width:"100%"}} className="mt-5">
            <label>Username</label>
            <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-3" name="Username" ref={username} type="text" required/>
            <label>Password</label>
            <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-5" name="Password" ref={password} type="text" required/>
            <button type="button" onClick={writeUserData} style={{width:"100%",height:38,border:'none',borderRadius:5,backgroundColor:"#000",color:"#fff"}}>Masuk</button>
          </form>
        </div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    );
}

export default SignIn;
