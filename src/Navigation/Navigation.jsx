import { FaHome, FaBars,FaTimes, FaUserAlt, FaBoxes, FaPhoneAlt, FaShapes} from 'react-icons/fa';

import { useState } from 'react';
import { motion } from 'framer-motion'
const Navigation = () => {
    const [close, setClose] = useState(true)
return (
    <>
    {
        close && <button className="p-4 fixed top-10 left-3 md:left-10 text-[#fff] rounded-full bg-transparent border z-50" onClick={() => {
			setClose(false)
			}}>
        <FaBars/>
    </button>
    }
<motion.div animate={{x: close ? -250 : 0}} initial={{x : -250}}  transition={{ type: "spring", duration: 0.8}} className={`z-50 flex flex-col fixed left-0 top-0 p-3 w-60 bg-[#216a65] text-gray-100 h-screen `}>
	<div className="space-y-3">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
			<button className="p-2 border"  onClick={() =>setClose(true)}>
				<FaTimes/>
			</button>
		</div>
	
		<div className="flex-1" >
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm hover:bg-[#52b4a9]">
					<a onClick={() =>setClose(true)} rel="noopener noreferrer" href="#home" className="flex items-center p-2 space-x-3 rounded-md">
						<FaHome/>
						<span>Home</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-[#52b4a9]">
					<a onClick={() =>setClose(true)} rel="noopener noreferrer" href="#skills" className="flex items-center p-2 space-x-3 rounded-md">
					
					<FaShapes/>	<span>Skills</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-[#52b4a9]">
					<a onClick={() =>setClose(true)} href="#introduction" rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
						<FaUserAlt/>
						<span>Introduction</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-[#52b4a9]">
					<a onClick={() =>setClose(true)} rel="noopener noreferrer" href="#projects" className="flex items-center p-2 space-x-3 rounded-md">
						
					<FaBoxes/><span>Projects</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-[#52b4a9] text-gray-50">
					<a onClick={() =>setClose(true)} rel="noopener noreferrer" href="#contact" className="flex items-center p-2 space-x-3 rounded-md">
						
						<FaPhoneAlt/> <span>Contact</span>
					</a>
				</li>
			
			</ul>
		</div>
	</div>
	<div className="flex items-center p-2 mt-12 space-x-4 justify-self-end" >
		<img src='https://i.ibb.co/0fdGLNw/img.png' alt="" className="w-12 h-12 rounded-lg bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold tracking-wider">FAYEZ</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" target='_blank' href="https://docs.google.com/document/d/1B91Au0d1QBhMpPHPcQNybIN19qOHP3udw01eeIOunzg/edit?usp=sharing" className="text-xs hover:underline text-gray-400">See resume</a>
			</span>
		</div>
	</div>
</motion.div>
</>
);
};
export default Navigation;