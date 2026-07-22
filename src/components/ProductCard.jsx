import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
	const discount = Math.round(
		((product.oldPrice - product.price) / product.oldPrice) * 100,
	);

	return (
		<div className='group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8F400]/40 cursor-pointer'>
			{/* Image */}

			<div className='relative overflow-hidden bg-white'>
				<img
					src={product.image}
					alt={product.title}
					className='h-52 w-full object-cover transition duration-500 group-hover:scale-105'
				/>

				{/* Category */}

				<span className='absolute left-3 top-3 rounded-full bg-[#2A2A2A] px-3 py-1 font-dm-medium text-xs text-white'>
					{product.category}
				</span>

				{/* Discount */}

				{discount > 0 && (
					<span className='absolute right-3 top-3 rounded-full bg-[#C8F400] px-3 py-1 font-dm-bold text-xs text-black'>
						-{discount}%
					</span>
				)}
			</div>

			{/* Content */}

			<div className='space-y-3 p-4'>
				<p className='font-dm-regular text-sm text-zinc-500'>{product.brand}</p>

				<h2 className='line-clamp-2 h-14 font-dm-bold text-lg text-white'>
					{product.title}
				</h2>

				{/* Rating */}

				<div className='flex items-center gap-2'>
					<Star
						size={16}
						fill='#C8F400'
						color='#C8F400'
					/>

					<span className='font-dm-medium text-sm text-zinc-300'>
						{product.rating}
					</span>

					<span className='font-dm-regular text-sm text-zinc-500'>
						({product.reviews})
					</span>
				</div>

				{/* Price */}

				<div className='flex items-center gap-2'>
					<span className='font-dm-bold text-2xl text-[#C8F400]'>
						${product.price}
					</span>

					<span className='font-dm-medium text-base text-zinc-500 line-through'>
						${product.oldPrice}
					</span>
				</div>

				{/* Footer */}

				<div className='flex items-center justify-between pt-2'>
					<span
						className={`rounded-full px-3 py-1 font-dm-bold text-xs ${
							product.stock > 0
								? "bg-green-500/10 text-green-400"
								: "bg-red-500/10 text-red-400"
						}`}
					>
						{product.stock > 0 ? "In Stock" : "Out of Stock"}
					</span>

					<button
						className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#C8F400] text-black transition hover:scale-105 active:scale-95'
						disabled={product.stock === 0}
					>
						<ShoppingCart size={18} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
