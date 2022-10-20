import React,{useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import {Dashboard,News,UserClient,UserOperator,ProdukHukum,CreateOperator,SignIn} from '../pages'
import { AuthContext } from "../context/AuthContext";

const Router = (props) => {
  const {user} = useContext(AuthContext)
  // console.log(user);

  return (
    <Routes>
      <Route exact path="/" element={user ? <Dashboard /> : <SignIn />} />
      <Route path="/signIn" element={user ? <Navigate to="/" /> : <SignIn />} />
      <Route path="/userClient" element={<UserClient />} />
      <Route path="/userOperator" element={<UserOperator />} />
      <Route path="/news" element={<News />} />
      <Route path="/produkHukum" element={<ProdukHukum />} />
      <Route path="/createOperator" element={<CreateOperator />} />
    </Routes>
  )
}

export default Router
