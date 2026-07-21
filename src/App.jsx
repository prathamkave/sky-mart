import React from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, Route } from "react-router";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<LoginPage />}
				/>
				<Route
					path='/register'
					element={<RegisterPage />}
				/>
			</Routes>
		</div>
	);
};

export default App;
