import React from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
	return <AppRoutes />;
};

export default App;
