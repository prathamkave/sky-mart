import { Link } from "react-router";
import {
	ArrowRight,
	Boxes,
	ShoppingCart,
	DollarSign,
	Star,
	Tag,
	Monitor,
	Shirt,
	Sofa,
	House,
	Dumbbell,
	Watch,
} from "lucide-react";

import { products } from "../data/store";

const categories = [
	{
		name: "Electronics",
		icon: Monitor,
		count: products.filter((p) => p.category === "Electronics").length,
	},
	{
		name: "Fashion",
		icon: Shirt,
		count: products.filter((p) => p.category === "Fashion").length,
	},
	{
		name: "Home",
		icon: House,
		count: products.filter((p) => p.category === "Home").length,
	},
	{
		name: "Furniture",
		icon: Sofa,
		count: 3,
	},
	{
		name: "Sports",
		icon: Dumbbell,
		count: 2,
	},
	{
		name: "Accessories",
		icon: Watch,
		count: 6,
	},
];

const HomePage = () => {
	const cartItems = 0;
	const cartValue = 0;

	const topRated = [...products]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 5);

	const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 5);

	return (
		<div className='min-h-screen bg-[#0B0B0B] px-5 py-8 text-white'>
			<div className='mx-auto max-w-300'>
				{/* Hero */}

				<section className='relative overflow-hidden rounded-3xl border border-white bg-[#111111] p-10'>
					{/* Grid Background */}
					<div
						className='absolute inset-0 rounded-3xl'
						style={{
							backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
							backgroundSize: "50px 50px",
						}}
					/>

					{/* Green Glow */}
					<div className='absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C8F400]/5 blur-[120px]' />
					<div className='absolute right-10 bottom-0 h-72 w-72 rounded-full bg-[#C8F400]/5 blur-[120px]' />
					<div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
						<div className='max-w-2xl relative'>
							<p className='font-dm-bold text-xs uppercase tracking-[.2em] text-[#C8F400]'>
								Good Morning 👋
							</p>

							<h1 className='mt-4 font-syne font-bold text-5xl leading-none'>
								Welcome back,
								<br />
								<span className='text-[#C8F400] font-syne'>Pratham!</span>
							</h1>

							<p className='mt-5 max-w-xl font-dm-regular text-zinc-500'>
								Discover today's picks — hand-curated products across <br />
								electronics, fashion and home.
							</p>

							<div className='mt-8 flex gap-4'>
								<Link
									to='/shop'
									className='flex items-center gap-2 rounded-xl bg-[#C8F400] px-4 py-1 font-syne text-black'
								>
									Shop Now
									<ArrowRight size={18} />
								</Link>

								<Link
									to='/shop'
									className='rounded-xl border border-white/10 px-4 py-2 font-dm-bold hover:border-[#C8F400]'
								>
									View Products
								</Link>
							</div>
						</div>

						{/* Right */}

						<div className='space-y-4'>
							<div className='rounded-2xl border border-[#C8F400]/30 bg-[#C8F400]/10 p-6 text-center'>
								<h2 className='font-syne text-4xl text-[#C8F400]'>20+</h2>

								<p className='font-syne text-sm text-zinc-400'>
									Products Available
								</p>
							</div>

							<div className='rounded-2xl border border-white/20 p-6 text-center'>
								<h2 className='font-syne text-3xl'>Free</h2>

								<p className='font-syne text-sm text-zinc-400'>
									Delivery ₹999+
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Stats */}

				<div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
					{[
						{
							title: "Cart Items",
							value: cartItems,
							icon: ShoppingCart,
							color: "text-[#C8F400]",
						},
						{
							title: "Cart Value",
							value: `$${cartValue.toFixed(2)}`,
							icon: DollarSign,
							color: "text-blue-400",
						},
						{
							title: "Top Products",
							value: topRated.length,
							icon: Star,
							color: "text-yellow-400",
						},
						{
							title: "Categories",
							value: categories.length,
							icon: Tag,
							color: "text-purple-400",
						},
					].map((item) => {
						const Icon = item.icon;

						return (
							<div
								key={item.title}
								className='rounded-2xl border border-white bg-[#111111] p-5'
							>
								<div className='flex items-center gap-4'>
									<div className={`rounded-xl bg-white/5 p-3 ${item.color}`}>
										<Icon size={20} />
									</div>

									<div>
										<h2 className='font-syne  text-3xl'>{item.value}</h2>

										<p className='font-syne text-sm text-zinc-500'>
											{item.title}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Categories */}

				<section className='mt-10'>
					<div className='mb-5 flex items-center justify-between'>
						<h2 className='font-syne text-3xl'>Shop by Category</h2>

						<Link
							to='/shop'
							className='font-dm-bold text-[#C8F400]'
						>
							View All →
						</Link>
					</div>

					<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
						{categories.map((category) => {
							const Icon = category.icon;

							return (
								<Link
									to='/shop'
									key={category.name}
									className='rounded-2xl border border-white p-6 text-center transition hover:-translate-y-1'
								>
									<div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C8F400]/20 text-[#88aa00]'>
										<Icon size={24} />
									</div>

									<h3 className='mt-4 font-dm-bold text-white'>
										{category.name}
									</h3>

									<p className='font-dm-regular text-sm text-zinc-500'>
										{category.count} items
									</p>
								</Link>
							);
						})}
					</div>
				</section>
				{/* Product Lists */}

				<section className='mt-10 grid gap-6 lg:grid-cols-2'>
					{/* Top Rated */}

					<div className='rounded-3xl border border-white/10 bg-[#1B211A] p-5'>
						<div className='mb-5 flex items-center justify-between'>
							<h2 className='flex items-center gap-2 font-syne text-2xl text-white'>
								<Star
									size={18}
									fill='#C8F400'
									color='#C8F400'
								/>
								Top Rated
							</h2>

							<Link
								to='/shop'
								className='font-dm-bold text-sm text-[#88aa00]'
							>
								See all →
							</Link>
						</div>

						<div className='space-y-3'>
							{topRated.map((product) => (
								<div
									key={product.id}
									className='flex items-center gap-4 rounded-2xl bg-[#262222] border border-zinc-200 p-3 transition hover:border-[#C8F400] cursor-pointer'
								>
									<img
										src={product.image}
										alt={product.title}
										className='h-16 w-16 rounded-xl object-cover'
									/>

									<div className='min-w-0 flex-1'>
										<h3 className='truncate font-dm-bold text-white'>
											{product.title}
										</h3>

										<p className='mt-1 font-dm-medium text-sm text-[#88aa00]'>
											${product.price}
										</p>
									</div>

									<button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#C8F400]/30 bg-[#C8F400]/10 text-[#88aa00] transition hover:bg-[#C8F400] hover:text-black'>
										<ShoppingCart size={18} />
									</button>
								</div>
							))}
						</div>
					</div>

					{/* New Arrivals */}

					<div className='rounded-3xl border border-white/10 bg-[#1B211A] p-5'>
						<div className='mb-5 flex items-center justify-between'>
							<h2 className='flex items-center gap-2 font-syne text-2xl text-white'>
								<Boxes
									size={18}
									color='#C8F400'
								/>
								New Arrivals
							</h2>

							<Link
								to='/shop'
								className='font-dm-bold text-sm text-[#88aa00]'
							>
								See all →
							</Link>
						</div>

						<div className='space-y-3'>
							{newArrivals.map((product) => (
								<div
									key={product.id}
									className='flex items-center gap-4 rounded-2xl bg-[#262222] border border-zinc-200 p-3 transition hover:border-[#C8F400] cursor-pointer'
								>
									<img
										src={product.image}
										alt={product.title}
										className='h-16 w-16 rounded-xl object-cover'
									/>

									<div className='min-w-0 flex-1'>
										<h3 className='truncate font-dm-bold text-white'>
											{product.title}
										</h3>

										<p className='mt-1 font-dm-medium text-sm text-[#88aa00]'>
											${product.price}
										</p>
									</div>

									<button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#C8F400]/30 bg-[#C8F400]/10 text-[#88aa00] transition hover:bg-[#C8F400] hover:text-black'>
										<ShoppingCart size={18} />
									</button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Features */}

				<section className='mt-10 grid gap-5 md:grid-cols-3'>
					{[
						{
							title: "Fast Delivery",
							desc: "Same-day on select items",
							icon: ArrowRight,
						},
						{
							title: "Secure Payments",
							desc: "100% encrypted checkout",
							icon: DollarSign,
						},
						{
							title: "Best Prices",
							desc: "Price-match guarantee",
							icon: Tag,
						},
					].map((feature) => {
						const Icon = feature.icon;

						return (
							<div
								key={feature.title}
								className='rounded-2xl border border-white bg-[#111111] p-6'
							>
								<div className='flex items-center gap-4'>
									<div className='rounded-xl bg-[#C8F400]/10 p-3 text-[#C8F400]'>
										<Icon size={20} />
									</div>

									<div>
										<h3 className='font-dm-bold'>{feature.title}</h3>

										<p className='font-dm-regular text-sm text-zinc-500'>
											{feature.desc}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default HomePage;
