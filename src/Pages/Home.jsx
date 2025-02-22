
import TodoContainer from "../components/TodoContainer";
import InProgress from "../components/InProgress";
import Done from "../components/Done";
import { useEffect, useState } from "react";
const Home = () => {
    const [isDarkMood, setIsDarkMood] = useState(false)
        
        useEffect(() => {
            if(localStorage.theme === 'dark'){
                setIsDarkMood(true)
            }else{
                setIsDarkMood(false)
            }
        }, [setIsDarkMood, isDarkMood])
        console.log(isDarkMood)
    return (
        <div className={`${isDarkMood ? 'bg-[#08022b]' : ''}`}>
            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 `}>
                <TodoContainer isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></TodoContainer>
                <InProgress isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></InProgress>
                <Done isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></Done>
            </div>
        </div>
    );
};

export default Home;