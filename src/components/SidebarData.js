import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
	
	},
	{
		title: "About Us",
		path: "/about-us",
		icon: <FaIcons.FaBookReader />,
	
	},
	{
		title: "Services",
		path: "/services",
		icon: <IoIcons.IoIosPaper />,
	
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},	
];