import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import UserClient from "./pages/UserClient";
import UserOperator from "./pages/UserOperator";
import ProdukHukum from "./pages/ProdukHukum";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/userClient" element={<UserClient />} />
            <Route path="/userOperator" element={<UserOperator />} />
            <Route path="/news" element={<News />} />
            <Route path="/produkHukum" element={<ProdukHukum />} />
        </Routes>
    );
}

export default App;