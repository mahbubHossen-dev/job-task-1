import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import moonThemeIcon from  '../assets/moon_icon.png'
import sunIcon from '../assets/sun_icon.png'
const Navbar = ({isDarkMood, setIsDarkMood}) => {
  // const [isDarkMood, setIsDarkMood] = useState(false)
  const { user, signOutUser } = useAuth()


  // useEffect(() => {
  //         if(localStorage.theme === 'dark'){
  //             setIsDarkMood(true)
  //         }else{
  //             setIsDarkMood(false)
  //         }
  //     }, [])

  const handleLogout = () => {
    signOutUser()
  }

  const links = <>
    {
      user ? <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addTask'}>Add Task</NavLink></li>
      </> : ""
    }
  </>

  return (
    <div  className={` ${isDarkMood ? 'bg-blue-950': ''}`}>
      <div className={`navbar container mx-auto bg-base-100 ${isDarkMood ? 'bg-blue-950': ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Job Task</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        <div className="navbar-end">
          <img src="" alt="" className='w-6 cursor-pointer mr-6' />
          {
            user ?
              <div className='flex items-center gap-4'>
                <Link onClick={handleLogout} to='/login' className="btn">Logout</Link>
                <div className='tooltip tooltip-info tooltip-bottom' data-tip={user.displayName}>
                  <img referrerPolicy='no-referrer' className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                </div>
                <img onClick={() => setIsDarkMood(!isDarkMood)} src={isDarkMood ? sunIcon : moonThemeIcon} alt="" className='w-6 cursor-pointer' />
              </div>
              :
              <div className='flex items-center gap-3'>
                <Link to='/register' className="border-b">Register</Link>
                <Link to='/login' className="py-2 px-4 rounded-md font-medium bg-white text-[#1F2937]">Login</Link>
              </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;