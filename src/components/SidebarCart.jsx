import { X, ShoppingBag, ArrowRight } from "lucide-react";
import CartItem from "./CartItem";

const SidebarCart = ({
	isOpen,
	onClose,
	cartItems,
	onIncrease,
	onDecrease,
	onRemove,
	onClearCart,
}) => {
	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<>
			{/* Overlay */}
			<div
				onClick={onClose}
				className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			/>

			{/* Sidebar */}
			<aside
				className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[520px] transform border-l border-white/10 bg-[#0B0B0B] transition-transform duration-300 ease-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className='flex h-full flex-col'>
					{/* Header */}
					<div className='flex items-center justify-between border-b border-white/10 px-6 py-5'>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-[#C8F400]/30 bg-[#C8F400]/10 text-[#C8F400]'>
								<ShoppingBag size={20} />
							</div>

							<h2 className='font-syne text-3xl font-bold text-white'>Cart</h2>

							<span className='rounded-full bg-[#C8F400]/15 px-4 py-1 font-dm-bold text-sm text-[#C8F400]'>
								{itemCount} item{itemCount !== 1 ? "s" : ""}
							</span>
						</div>

						<button
							onClick={onClose}
							className='flex h-11 w-11 items-center justify-center rounded-2xl text-zinc-400 transition hover:bg-white/5 hover:text-white'
						>
							<X size={24} />
						</button>
					</div>

					{/* Items */}
					<div className='flex-1 overflow-y-auto px-6 py-5'>
						{cartItems.length === 0 ? (
							<div className='flex h-full flex-col items-center justify-center text-center'>
								<div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#111111] text-zinc-500'>
									<ShoppingBag size={40} />
								</div>

								<h3 className='font-syne text-3xl font-bold text-white'>
									Your cart is empty
								</h3>

								<p className='mt-3 max-w-sm font-dm-regular text-lg text-zinc-500'>
									Add some products to your cart and they will appear here.
								</p>
							</div>
						) : (
							<div className='space-y-4'>
								{cartItems.map((item) => (
									<CartItem
										key={item.id}
										item={item}
										onIncrease={onIncrease}
										onDecrease={onDecrease}
										onRemove={onRemove}
									/>
								))}
							</div>
						)}
					</div>

					{/* Footer */}
					<div className='border-t border-white/10 bg-[#0B0B0B] px-6 py-6'>
						<div className='mb-5 flex items-center justify-between'>
							<span className='font-dm-medium text-xl text-zinc-400'>
								Total
							</span>

							<span className='font-syne text-5xl font-bold text-white'>
								${total.toFixed(2)}
							</span>
						</div>

						<button className='flex w-full items-center justify-center gap-3 rounded-3xl bg-[#C8F400] px-6 py-5 font-dm-bold text-2xl text-black transition hover:scale-[1.02] hover:bg-[#d7ff28] active:scale-[0.99]'>
							Checkout
							<ArrowRight size={24} />
						</button>

						<button
							onClick={onClearCart}
							className='mt-4 w-full text-center font-dm-medium text-lg text-zinc-500 transition hover:text-white'
						>
							Clear cart
						</button>
					</div>
				</div>
			</aside>
		</>
	);
};

export default SidebarCart;
