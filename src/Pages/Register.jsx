import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import Social from '../components/Social';
import axios from 'axios';

const Register = () => {

    const { user, createUser, updateUserProfile, setLoading} = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setErrorMessage('')

        // if (password.length < 6) {
        //     return setErrorMessage('Password must contain at least 6 characters')
        // }

        // const lowerRegex = /^(?=.*[a-z]).+$/;
        // const upperRegex = /^(?=.*[A-Z]).+$/;

        // if (!lowerRegex.test(password)) {
        //     return setErrorMessage('Password must contain at least one Lower Case')
        // }

        // if (!upperRegex.test(password)) {
        //     return setErrorMessage('Password must contain at least one Upper Case')
        // }

        createUser(email, password)
            .then(async (result) => {
                updateUserProfile({ displayName: name, photoURL: photo })
                const user = {
                    user_id: result.user?.uid,
                    name: name,
                    email: result.user?.email,
                }
                setLoading()
                await axios.post(`http://localhost:5000/users/${result.user?.email}`, user)
                toast.success("Account created successfully! Welcome to the platform.")
                navigate(`${location.state ? location.state : '/'}`)
                console.log(result)
            })
            .catch(err => {
                toast.error(err.message)

            })
    }



    return (
        <div className="hero bg-base-200 min-h-screen pt-12 pb-6 dark:bg-[#0F172A]">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl font-bold text-center -mb-7 pt-4'>Register now</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control -mb-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control -mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control -mb-2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    <div className="form-control -mb-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#3B82F6] text-white">Register</button>
                    </div>

                </form>
                <div className="form-control px-8">
                    <Social></Social>
                </div>
                <p className='py-6 text-center'>Already have an account? <Link to='/login' className='border-b-2 font-bold'>Login here</Link></p>

                {
                    errorMessage && <p className='text-center text-red-500 pb-4'>{errorMessage}</p>
                }
            </div>
        </div>
    );
};

export default Register;