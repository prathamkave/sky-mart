import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "shop",
				element: <ShopPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
		],
	},
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "register",
		element: <RegisterPage />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
