import axios from 'axios';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const { id } = useParams()
    console.log(id)
    const handleUpdate = async (e) => {
        // console.log(id)
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const description = form.description.value
        const updateData = {
            title,
            category,
            description
        }

        console.log(updateData)
        try {
            const { data } = await axios.put(`https://ph-task-server-zeta.vercel.app/taskUpdate/${id}`, updateData)
            if (data.modifiedCount > 0) {
                toast.success('Updated Successfully!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto">
            <h2 className='text-2xl font-medium text-center'>Update Task</h2>
            <form onSubmit={(e) => handleUpdate(e)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="select select-bordered w-full ">
                        <option value={'To-Do'}>To-Do</option>
                        <option value={'In Progress'}>In Progress</option>
                        <option value={'Done'}>Done</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Bio"></textarea>

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-950 text-white">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;