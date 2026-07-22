import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import Navbar from "../components/Navbar";
import ShopPage from "../Pages/ShopPage";
import Footer from "../components/Footer";

const AppRoutes = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path='/home'
					element={<HomePage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/shop'
					element={<ShopPage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default AppRoutes;
