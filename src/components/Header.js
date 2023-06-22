import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../src/index.css"

import ytlogo from "../images/yt-logo.png";
import ytlogomobile from "../images/yt-logo-mobile.png"

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from '../context/contextApi';
import Loader from "./shared/Loader"

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (e) => {
        if ((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`)
        }
    }

    const MobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    }

    const { pathName } = useLocation();

    const pageName = pathName?.split("/")?.filter(Boolean)?.[0];
    return (
        <div className='sticky top-0 z-10 flex flex-row items-center py-2 justify-between gap-5 h-14 px-4 md:px-5 bg-black dark:bg-black text-5xl'>
            {loading && <Loader />}
            <div className="flex justify-between items-center">
                {pageName !== "video" && (
                    <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[][0.6]" onClick={MobileMenuToggle}>
                        {mobileMenu ? (
                            <CgClose className='text-white text-xl' />
                        ) : (
                            <SlMenu className='text-white text-xl' />
                        )}
                    </div>
                )}
                <Link to={'/'}>
                    <img src={ytlogo} alt="Youtube" className='w-28 h-full hidden md:block' />
                    <img src={ytlogomobile} alt="Youtube" className='w-10 h-full md:hidden' />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:mr-10 md:pl-5 border border-[#303030] rounded-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 px-1 flex items-center justify-center md:flex">
                        <IoIosSearch className='text-white text-xl' />
                    </div>
                    <input
                        type="text"
                        className='bg-transparent text-[16px] outline-none border-0 text-white pr-5 pl-5 md:pl-0 w-28 md:w-64 lg:w-[500px]'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                    <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
                        <IoIosSearch className='text-white text-xl' />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <FiBell className="text-white text-xl cursor-pointer" />
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full ml-2">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" />
                </div>
            </div>
        </div>



    )
}

export default Header
