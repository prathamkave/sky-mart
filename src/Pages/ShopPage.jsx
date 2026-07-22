import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProductCard from "../components/ProductCard";
import { products, categories, sortOptions } from "../data/store";

const ShopPage = () => {
	const [search, setSearch] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Featured");

	const filteredProducts = useMemo(() => {
		let filtered = [...products];

		// Search
		if (search.trim()) {
			filtered = filtered.filter((product) =>
				product.title.toLowerCase().includes(search.toLowerCase()),
			);
		}

		// Category
		if (selectedCategory !== "All") {
			filtered = filtered.filter(
				(product) => product.category === selectedCategory,
			);
		}

		// Sorting
		switch (sortBy) {
			case "Price: Low to High":
				filtered.sort((a, b) => a.price - b.price);
				break;

			case "Price: High to Low":
				filtered.sort((a, b) => b.price - a.price);
				break;

			case "Highest Rated":
				filtered.sort((a, b) => b.rating - a.rating);
				break;

			case "Newest":
				filtered.sort((a, b) => b.id - a.id);
				break;

			default:
				filtered.sort((a, b) => b.featured - a.featured);
		}

		return filtered;
	}, [search, selectedCategory, sortBy]);

	return (
		<div className='min-h-screen bg-[#0B0B0B] px-6 py-8 text-white'>
			<div className='mx-auto max-w-300'>
				{/* Heading */}

				<div className='mb-8'>
					<h1 className='font-syne text-5xl font-bold'>All Products</h1>

					<p className='mt-2 font-dm-regular text-zinc-500'>
						{filteredProducts.length} products found
					</p>
				</div>

				{/* Search + Filters */}

				<div className='mb-10 rounded-2xl border border-white/10 bg-[#111111] p-5'>
					<div className='grid gap-4 lg:grid-cols-[1fr_220px_220px]'>
						{/* Search */}

						<div className='relative'>
							<Search
								size={18}
								className='absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500'
							/>

							<input
								type='text'
								placeholder='Search products...'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className='w-full rounded-xl border border-white/10 bg-[#1A1A1A] py-3 pl-11 pr-4 font-dm-medium outline-none transition focus:border-[#C8F400]'
							/>
						</div>

						{/* Category */}

						<select
							value={selectedCategory}
							onChange={(e) => setSelectedCategory(e.target.value)}
							className='cursor-pointer rounded-xl border border-white/10 bg-[#1A1A1A] px-4 font-dm-medium outline-none focus:border-[#C8F400]'
						>
							{categories.map((category) => (
								<option
									key={category}
									value={category}
								>
									{category}
								</option>
							))}
						</select>

						{/* Sort */}

						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
							className='cursor-pointer rounded-xl border border-white/10 bg-[#1A1A1A] px-4 font-dm-medium outline-none focus:border-[#C8F400]'
						>
							{sortOptions.map((option) => (
								<option
									key={option}
									value={option}
								>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Products */}

				{filteredProducts.length ? (
					<div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
						{filteredProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
							/>
						))}
					</div>
				) : (
					<div className='flex h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10'>
						<h2 className='font-syne text-3xl font-bold'>No Products Found</h2>

						<p className='mt-3 font-dm-regular text-zinc-500'>
							Try changing the search or category filter.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShopPage;
