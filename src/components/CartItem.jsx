import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
	return (
		<div className='rounded-3xl border border-white/10 bg-[#111111] p-4'>
			<div className='flex items-start gap-4'>
				<img
					src={item.image}
					alt={item.title}
					className='h-24 w-24 rounded-2xl bg-white object-cover'
				/>

				<div className='min-w-0 flex-1'>
					<h3 className='truncate font-dm-bold text-xl text-white'>
						{item.title}
					</h3>

					<p className='mt-2 font-dm-bold text-3xl text-[#C8F400]'>
						${item.price.toFixed(2)}
					</p>

					<p className='font-dm-regular text-lg text-zinc-400'>
						${item.price.toFixed(2)} each
					</p>

					<div className='mt-4 flex items-center gap-3'>
						<button
							onClick={() => onDecrease(item.id)}
							className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B0B0B] text-zinc-300 transition hover:border-[#C8F400]/40 hover:text-white'
						>
							<Minus size={18} />
						</button>

						<span className='w-8 text-center font-dm-bold text-2xl text-white'>
							{item.quantity}
						</span>

						<button
							onClick={() => onIncrease(item.id)}
							className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B0B0B] text-zinc-300 transition hover:border-[#C8F400]/40 hover:text-white'
						>
							<Plus size={18} />
						</button>
					</div>
				</div>

				<button
					onClick={() => onRemove(item.id)}
					className='mt-2 flex h-10 w-10 items-center justify-center rounded-xl text-red-400 transition hover:bg-red-500/10 hover:text-red-300'
				>
					<Trash2 size={20} />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
