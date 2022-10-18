import React from "react";
import { Routes, Route } from "react-router-dom";
import {Dashboard,News,UserClient,UserOperator,ProdukHukum,CreateOperator,SignIn} from '../pages'

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/userClient" element={<UserClient />} />
      <Route path="/userOperator" element={<UserOperator />} />
      <Route path="/news" element={<News />} />
      <Route path="/produkHukum" element={<ProdukHukum />} />
      <Route path="/createOperator" element={<CreateOperator />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  )
}

export default Router
