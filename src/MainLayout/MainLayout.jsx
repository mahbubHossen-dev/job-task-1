
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';
import { useEffect, useState } from 'react';

const MainLayout = () => {

    const [isDarkMood, setIsDarkMood] = useState(false)

    useEffect(() => {
        if(localStorage.theme === 'dark'){
            setIsDarkMood(true)
        }else{
            setIsDarkMood(false)
        }
    }, [])

    useEffect(() => {
        if (isDarkMood) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = ''
        }
    }, [isDarkMood])

    return (
        <div className={`${isDarkMood ? 'dark:bg-blue-400 text-blue-500': ''}`}>
            <Navbar isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></Navbar>
            <Outlet isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></Outlet>
            
        </div>
    );
};

export default MainLayout;