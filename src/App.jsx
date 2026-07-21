import React from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div>
			{/* <Routes>
				<Route
					path='/'
					element={<LoginPage />}
				/>
				<Route
					path='/register'
					element={<RegisterPage />}
				/>
			</Routes> */}
			<Navbar />
		</div>
	);
};

export default App;
