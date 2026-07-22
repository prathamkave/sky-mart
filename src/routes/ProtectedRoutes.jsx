import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const ProtectedRoutes = () => {
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

export default ProtectedRoutes;
