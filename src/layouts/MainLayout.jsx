import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";

const MainLayout = () => {
	return (
		<>
			<Navbar />

			<main className='min-h-screen bg-[#0B0B0B] text-white'>
				<Outlet />
			</main>

			<Footer />

			{/* <SidebarCart /> */}
		</>
	);
};

export default MainLayout;
