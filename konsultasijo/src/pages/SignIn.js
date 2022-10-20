import React,{useContext,useRef} from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../configs/firebase'
import {AuthContext} from '../context/AuthContext'

const SignIn = ({navigation}) => {
  const username = useRef('')
  const password = useRef('')
  const {isFetching,dispatch} = useContext(AuthContext)

  // try{
  //   if (res.message === 'success login' && res.datas.role === "admin") {
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.datas });
  //   } else {
  //     dispatch({type:"LOGIN_FAILURE", payload: res})
  //   }
  // }catch (e){
  //   dispatch({type:"LOGIN_FAILURE", payload: e})
  // }

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
        userData.map((item)=>{
          // console.log(username.current.value);
          if(item.name === username?.current?.value){
            // console.log(item);
            dispatch({ type: "LOGIN_SUCCESS", payload: item });
            return true
          }
        })
      } else {
        console.log("No data available");
        dispatch({type:"LOGIN_FAILURE", payload: null})

      }
    }).catch((error) => {
      console.error(error);
      dispatch({type:"LOGIN_FAILURE", payload: error})
    });
  }

    return(
      <div style={{display:'flex',flexDirection:'column',width:"100%",height:"100vh",alignItems:'center',justifyContent:'center'}}>
        <h1>MASUK</h1>
        <form  style={{display:'flex',flexDirection:'column',width:"30%"}} className="mt-5">
          <label>Username</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-3" name="Username" ref={username} type="text" required/>
          <label>Password</label>
          <input style={{borderRadius:5,border:'1px solid #000',height:38}} className="mb-5" name="Password" ref={password} type="text" required/>
          <button type="button" onClick={writeUserData} style={{width:"100%",height:38,border:'none',borderRadius:5,backgroundColor:"#000",color:"#fff"}}>Masuk</button>
        </form>
      </div>
    );
}

export default SignIn;
