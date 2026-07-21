import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const password = watch("password");

	const onSubmit = (data) => {
		console.log(data);
	};

	const navigate = useNavigate();

	return (
		<div className='min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-4'>
			{/* Logo */}
			<div className='mb-10 flex items-center gap-3'>
				<div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400 text-black shadow-[0_0_30px_rgba(196,255,0,.25)]'>
					<Zap
						size={22}
						fill='currentColor'
					/>
				</div>

				<h1 className='text-4xl font-bold tracking-tight'>
					<span className='text-white'>Sky</span>
					<span className='text-lime-400'>Mart</span>
				</h1>
			</div>

			{/* Card */}
			<div
				className='w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] px-8 
            py-6 shadow-[0_30px_60px_rgba(0,0,0,.45)]'
			>
				<h2 className='text-2xl font-bold tracking-tight text-white'>
					Create account
				</h2>

				<p className='mt-1 text-md text-zinc-500'>
					Join SkyMart and start shopping
				</p>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mt-10 space-y-4'
				>
					{/* Name */}

					<div>
						<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-lime-400'>
							<User
								className='text-zinc-500'
								size={18}
							/>

							<input
								type='text'
								placeholder='Full name'
								className='ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500'
								{...register("name", {
									required: "Full name is required",
								})}
							/>
						</div>

						{errors.name && (
							<p className='mt-1 text-sm text-red-400'>{errors.name.message}</p>
						)}
					</div>

					{/* Email */}

					<div>
						<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-lime-400'>
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
									pattern: {
										value: /^\S+@\S+\.\S+$/,
										message: "Invalid email",
									},
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
						<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-lime-400'>
							<Lock
								className='text-zinc-500'
								size={18}
							/>

							<input
								type={showPassword ? "text" : "password"}
								placeholder='Password (min 6 chars)'
								className='ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500'
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 6,
										message: "Minimum 6 characters",
									},
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

					{/* Confirm Password */}

					<div>
						<div className='flex items-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 py-3 transition-all duration-300 focus-within:border-lime-400'>
							<Lock
								className='text-zinc-500'
								size={18}
							/>

							<input
								type='password'
								placeholder='Confirm password'
								className='ml-4 h-full w-full bg-transparent text-md outline-none placeholder:text-zinc-500'
								{...register("confirmPassword", {
									required: "Confirm your password",
									validate: (value) =>
										value === password || "Passwords do not match",
								})}
							/>
						</div>

						{errors.confirmPassword && (
							<p className='mt-1 text-sm text-red-400'>
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Submit */}

					<button className='group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 text-md py-3 font-semibold text-black transition-all duration-300 hover:bg-lime-300 cursor-pointer'>
						Create Account
						<ArrowRight size={20} />
					</button>
				</form>

				<p className='mt-8 text-center text-md text-zinc-500'>
					Already have an account?{" "}
					<button
						className='font-semibold text-lime-400 cursor-pointer'
						onClick={() => navigate("/")}
					>
						Sign in
					</button>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
