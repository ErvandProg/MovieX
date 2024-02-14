import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	if (localStorage.getItem("login")) {
		window.location.href = "/"
	}
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		localStorage.setItem("login", JSON.stringify({ email: email, password: password }))
		window.location.href = "/";
	};

	return (
		<div className="py-[190px] flex justify-center">
			<div className="w-[400px] border border-[#000] h-[450px] z-[7] relative bg-[white] flex justify-center items-center rounded-[10px]">
				<div className="w-[300px] h-[500px] flex flex-col justify-around">
					<h1 className="text-center">Welcome</h1>
					<div className="flex gap-[30px] flex-col items-center">
						<div className="w-full relative">
							<input type="email" className="w-full h-10 text-sm transition-all duration-[0.5s] pl-2.5 rounded-t-[5px] border-b-[#999] border-0 border-solid border-b focus:text-[15px] outline-[none]" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="w-full relative">
							<input
								type="password"
								className="w-full h-10 text-sm transition-all duration-[0.5s] pl-2.5 rounded-t-[5px] border-b-[#999] border-0 border-solid border-b focus:text-[15px] outline-[none]"
								id="password"
								placeholder="Password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button
							onClick={handleLogin}
							className="w-4/5 text-[white] text-sm tracking-[2px] cursor-pointer bg-[#6bc4e3] px-0 py-[15px] rounded-[25px] border-[none] font-bold"
						>
							Login
						</button>
					</div>
					<div className="">
						<p className="text-center">
							Do have an account? <Link to="/">Log In</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
