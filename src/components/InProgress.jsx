import React from 'react';
import useTaskGet from '../hooks/useTaskGet';
import TaskCard from './TaskCard';

const InProgress = ({isDarkMood, setIsDarkMood}) => {
    const [taskData, refetch] = useTaskGet('In Progress')
    // console.log
    return (
        <div  className={` bg-gray-300 p-4 rounded-md ${isDarkMood ? 'bg-blue-950': ''}`}>
            <h1 className='text-3xl text-center mb-4'>In Progress</h1>
            <div className='space-y-3'>
            {
                taskData.map(task => <TaskCard key={task._id} task={task} refetch={refetch} isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></TaskCard>)
            }
        </div>
        </div>
    );
};

export default InProgress;