import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	const navItems = [
		{ id: 1, text: 'Home', path: '/'  },
		{ id: 2, text: 'Farm', path: '/farm' },
		{ id: 3, text: 'Prediction', path: '/prediction' },
		{ id: 4, text: 'Health', path: '/health' },
		{ id:5, text: 'Chat', path: '/chat' }
	];

	return(
		<div className='bg-grey flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-balck'>
			{/* Logo */}
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>ULTER</h1>

			{/* Desktop Navigation */}
			<ul className='hidden md:flex'>
				{navItems.map(item => (
					<Link key={item.id} to={item.path}>
						<li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
							{item.text}
						</li>
					</Link>
				))}
			</ul>
			
			{/* Mobile Navigation Icon */}
			<div onClick={handleNav} className='block md:hidden'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			{/* Mobile Navigation Menu */}
			<ul
				className={
				nav
				? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500'
				: 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
				}
			>
				{/* Mobile Logo */}
				<h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

				{/* Mobile Navigation Items */}
				{navItems.map(item => (
				<Link key={item.id} to={item.path} onClick={() => setNav(false)}>
					<li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
						{item.text}
					</li>
				</Link>
				))}
			</ul>
		</div>
	)

}

export default NavBar;