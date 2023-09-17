"use client"

import Image from "next/image";
import Link from "next/link";
import profilePic from '/public/logo.png'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {
  const [menuClicked, setmenuClicked] = useState(true)
  console.log(menuClicked)
  return (
    <>
      {menuClicked ?
        <nav className="fixed top-0 left-0 right-0  flex justify-between pb-[15px] w-[100%] bg-gradient-to-r from-amber-200 to-yellow-500  shadow-xl shadow-yellow-300 m-0 h-[180px]">
          <div className="basis-[95%] flex flex-col justify-center items-center  mt-[10px] md:basis-[50%] md:flex-row">
            <Link href='/'><Image alt='logo' src={profilePic} height={150} width={150} mx-auto ></Image></Link>
            <h1 className="font-Lobster text-sm font-bold bg-gradient-to-r from-pink-700 to-indigo-600 bg-clip-text text-transparent
            md:text-base" >The Ancient Sutras Ways...</h1>
          </div>
          <div >
            <div className="hidden md:flex md:justify-between md:basis-[20%] md:mx-[10px] md:my-[5px] font-Lobster bg-gradient-to-r from-pink-700 to-indigo-600 bg-clip-text text-transparent font-bold md:bg-white"> 
              <Link className="ml-[10px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm w-[70px] h-[40px] px-2 py-2 text-center  cursor-pointer" href="/">Home</Link>
              <Link className="ml-[10px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm w-[70px] h-[40px] px-2 py-2 text-center mr-2 mb-2 cursor-pointer" href="/blogs">Blogs</Link>
              <Link className="ml-[10px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm w-[70px] h-[40px] px-2 py-2 text-center mr-2 mb-2 cursor-pointer" href="/videos">Videos</Link>
              <Link className="ml-[10px] text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm w-[100px] h-[60px] px-2 py-2 text-center mr-2 mb-2  cursor-pointer" href="/subscription">Free Subscription</Link>
            </div>
            <div className="md:hidden mx-[10px] basis-[50%]" >
              <MenuIcon onClick={() => { setmenuClicked(false) }} />
            </div>
          </div>
        </nav> :
        <section className="flex  bg-gradient-to-r from-amber-200 to-yellow-400  shadow-xl shadow-yellow-300 p-[5px] fixed top-0 left-0 right-0  h-[180px]">
          <div className="basis-[95%] flex flex-col justify-center items-center font-Lobster text-sm bg-gradient-to-r from-pink-700 to-indigo-600 bg-clip-text text-transparent font-bold">
            <Link className="hover:bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent cursor-pointer" onClick={() => { setmenuClicked(true) }}  href="/">Home</Link>
            <Link className="hover:bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent cursor-pointer" onClick={() => { setmenuClicked(true) }} href="/blogs">Blogs</Link>
            <Link className="hover:bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent cursor-pointer" onClick={() => { setmenuClicked(true) }} href="/videos">Videos</Link>
            <Link className="hover:bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent cursor-pointer" onClick={() => { setmenuClicked(true) }}  href="/subscription">Free Subscription</Link>
          </div>
          <CloseIcon  className=" basis-[5%] justify-self-end" onClick={() => { setmenuClicked(true) }} />
        </section>
      }
    </>
  );
}

export default NavBar;