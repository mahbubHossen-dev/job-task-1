import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useTaskGet = (category) => {
    const { data: taskData = [], refetch } = useQuery({
        queryKey: ['taskData', category],
        queryFn: async () => {
            const { data } = await axios.get(`https://ph-task-server-zeta.vercel.app/tasks/${category}`);
            return data;
        },
    });

    return [taskData, refetch];
};

export default useTaskGet;