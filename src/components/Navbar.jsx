import { NavLink } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

const Navbar = () => {
	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]'>
			<div className='mx-auto flex h-20 max-w-325 items-center justify-between px-12'>
				{/* Logo */}
				<div className='flex items-center gap-3'>
					<div className='flex h-8 w-8 items-center justify-center rounded-xl bg-[#C8F400] text-black'>
						<Zap
							size={16}
							fill='currentColor'
						/>
					</div>

					<h1 className='font-syne text-[1.5rem] font-bold tracking-tight'>
						<span className='text-white'>Sky</span>
						<span className='text-[#C8F400]'>Mart</span>
					</h1>
				</div>

				{/* Navigation */}
				<nav className='flex items-center gap-10'>
					<NavLink
						to='/home'
						className={({ isActive }) =>
							`font-dm-bold text-md transition-colors duration-200 ${
								isActive ? "text-[#C8F400]" : "text-zinc-500 hover:text-white"
							}`
						}
					>
						Home
					</NavLink>

					<NavLink
						to='/shop'
						className={({ isActive }) =>
							`font-dm-bold text-md transition-colors duration-200 ${
								isActive ? "text-[#C8F400]" : "text-zinc-500 hover:text-white"
							}`
						}
					>
						Shop
					</NavLink>

					<NavLink
						to='/about'
						className={({ isActive }) =>
							`font-dm-bold text-md transition-colors duration-200 ${
								isActive ? "text-[#C8F400]" : "text-zinc-500 hover:text-white"
							}`
						}
					>
						About
					</NavLink>
				</nav>

				{/* Right Section */}
				<div className='flex items-center gap-3'>
					{/* User */}
					<button className='flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-[#161616] px-3 py-2 transition hover:border-lime-400/30'>
						<div className='flex h-8 w-8 items-center justify-center rounded-xl bg-[#C8F400] font-dm-bold text-black'>
							P
						</div>

						<span className='font-semibold text-sm text-white'>
							Pratham Kave
						</span>
					</button>

					{/* Cart */}
					<button className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-[#161616] transition hover:border-lime-400/30 hover:text-lime-400'>
						<ShoppingCart
							size={22}
							color='white'
						/>
					</button>

					{/* Logout */}
					<button className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-[#161616] transition hover:border-red-500/40 hover:text-red-400'>
						<LogOut
							size={22}
							color='white'
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
