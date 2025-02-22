
import useTaskGet from '../hooks/useTaskGet';
import TaskCard from './TaskCard';
const TodoContainer = ({isDarkMood, setIsDarkMood}) => {
    const [taskData, refetch] = useTaskGet('To-Do')
    return (
        <div className={` bg-gray-300 p-4 rounded-md ${isDarkMood ? 'bg-blue-950': ''}`}>
            <h1 className='text-3xl text-center mb-4'>To-Do</h1>
            <div className='space-y-3'>
            {
                taskData.map(task => <TaskCard key={task._id} task={task} refetch={refetch} isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></TaskCard>)
            }
        </div>
        </div>
    );
};

export default TodoContainer;