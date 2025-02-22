import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddTask = () => {

    const handleSubmitTask =async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const description = form.description.value
        const taskData = {
            title,
            category, 
            description,
            timestamp: new Date()
        }
        try {
            const {data} = await axios.post('http://localhost:5000/tasks', taskData)
            if(data.insertedId){
                toast.success('Task Added successfully')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto">
            <form onSubmit={handleSubmitTask} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                </div>
                <select name='category' className="select select-bordered w-full ">
                    <option value={'To-Do'}>To-Do</option>
                    <option value={'In Progress'}>In Progress</option>
                    <option value={'Done'}>Done</option>
                </select>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Bio"></textarea>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;