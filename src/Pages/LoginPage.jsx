import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const navigate = useNavigate();

	return (
		<div className='min-h-screen bg-[#0B0B0B] text-white overflow-hidden'>
			{/* Background Glow */}
			<div className='absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none'>
				<div className='absolute -left-44 top-36 h-125 w-125 rounded-full bg-lime-400/10 blur-[160px]' />
				<div className='absolute left-80 bottom-10 h-87.5 w-87.5 rounded-full bg-lime-400/5 blur-[130px]' />
			</div>

			<div className='relative grid min-h-screen lg:grid-cols-2'>
				{/* LEFT */}
				<div className='flex flex-col justify-between border-r bg-[#111111] border-white px-14 py-12'>
					<div>
						{/* Logo */}
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C8F400] text-black'>
								<Zap
									size={24}
									fill='currentColor'
								/>
							</div>

							<h2 className='text-2xl font-syne font-semibold'>
								<span className='text-white'>Sky</span>
								<span className='text-[#C8F400]'>Mart</span>
							</h2>
						</div>

						{/* Hero */}
						<div className='mt-28 max-w-xl'>
							<p className='text-sm font-semibold uppercase text-[#C8F400] tracking-widest'>
								Welcome Back
							</p>

							<h1 className='mt-4 text-5xl font-syne font-bold tracking-wide leading-[1.05]'>
								Shop the future.
								<br />
								<span className='text-[#C8F400] font-syne'>Today.</span>
							</h1>

							<p className='mt-8 max-w-lg font-syne text-lg text-zinc-500'>
								Thousands of products, lightning-fast delivery, and <br />
								prices that make your wallet happy.
							</p>
						</div>
						{/* Stats */}
						<div className='grid grid-cols-3 gap-6 mt-10'>
							{[
								{
									value: "20K+",
									label: "Products",
								},
								{
									value: "50K+",
									label: "Users",
								},
								{
									value: "4.9★",
									label: "Rating",
								},
							].map((item) => (
								<div
									key={item.label}
									className='rounded-2xl border border-white py-4'
								>
									<h3 className='text-center text-xl font-syne font-bold text-[#C8F400]'>
										{item.value}
									</h3>

									<p className='text-center text-sm text-zinc-500'>
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* RIGHT */}
				<div className='flex items-center justify-center px-16 py-12'>
					<div className='w-full max-w-md rounded-4xl border border-white/10 bg-[#111111] p-8 shadow-2xl'>
						<h2 className='text-2xl font-syne font-bold tracking-tight'>
							Sign in
						</h2>

						<p className='mt-1 font-syne text-md text-zinc-500'>
							Enter your credentials to continue
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className='mt-8 space-y-4'
						>
							{/* Email */}

							<div>
								<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition focus-within:border-[#C8F400]'>
									<Mail
										className='text-zinc-500'
										size={18}
									/>

									<input
										type='email'
										placeholder='Email address'
										className='ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500'
										{...register("email", {
											required: "Email is required",
										})}
									/>
								</div>

								{errors.email && (
									<p className='mt-1 text-sm text-red-400'>
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Password */}

							<div>
								<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition focus-within:border-[#C8F400]'>
									<Lock
										className='text-zinc-500'
										size={18}
									/>

									<input
										type={showPassword ? "text" : "password"}
										placeholder='Password'
										className='ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500'
										{...register("password", {
											required: "Password is required",
										})}
									/>

									<button
										type='button'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff
												size={18}
												className='text-zinc-500'
											/>
										) : (
											<Eye
												size={18}
												className='text-zinc-500'
											/>
										)}
									</button>
								</div>

								{errors.password && (
									<p className='mt-1 text-sm text-red-400'>
										{errors.password.message}
									</p>
								)}
							</div>

							{/* Button */}

							<button
								className='group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C8F400] text-md font-syne font-semibold text-black transition duration-300 hover:bg-lime-300 px-5 py-3 cursor-pointer'
								onClick={() => navigate("/home")}
							>
								Sign in
								<ArrowRight size={18} />
							</button>
						</form>

						<p className='mt-8 text-center text-md text-zinc-500'>
							Don't have an account?{" "}
							<button
								className='font-semibold text-[#C8F400] cursor-pointer'
								onClick={() => navigate("/register")}
							>
								Create one
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
