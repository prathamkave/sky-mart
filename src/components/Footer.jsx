import React from "react";

const Footer = () => {
	return (
		<footer className='border-t border-white/10 bg-[#0B0B0B]'>
			<div className='mx-auto flex h-32 max-w-[1600px] flex-col items-center justify-center gap-3 px-6'>
				<h2 className='font-syne text-4xl font-bold tracking-tight'>
					<span className='text-white'>Sky</span>
					<span className='text-lime-400'>Mart</span>
				</h2>

				<p className='font-dm-regular text-[15px] text-zinc-500'>
					© 2025 SkyMart • Built with React + Redux + TanStack Query
				</p>
			</div>
		</footer>
	);
};

export default Footer;
