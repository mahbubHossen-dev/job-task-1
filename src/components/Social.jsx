
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Social = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(async result => {
                console.log(result.user)
                const user = {
                    user_id: result.user?.uid,
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                // await axios.post(`https://pet-adoption-server-psi.vercel.app/users/${result.user?.email}`, {
                //     name: result.user?.displayName,
                //     image: result.user?.photoURL,
                //     email: result.user?.email,
                // })
                await axios.post(`http://localhost:5000/users/${result.user?.email}`, user)
                navigate(location.state ? `${location.state}` : '/')
                toast.success("Welcome back.")
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='flex gap-4'>
            <button
                onClick={handleGoogleLogin}
                className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
            >
                {/* <FaGoogle className="mr-2" /> Login with Google */}Google
            </button>
            
        </div>
    );
};

export default Social;