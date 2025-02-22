import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2'
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { Link } from 'react-router-dom';
const TaskCard = ({ task, refetch }) => {

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const { data } = await axios.delete(`https://ph-task-server-zeta.vercel.app/task/${id}`)

                if (data.deletedCount > 0) {

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }

            }
        });
    }


    // const handleUpdate =async (e, id) => {
    //     console.log(id)
    //     e.preventDefault()
    //     const form = e.target
    //     const title = form.title.value
    //     const category = form.category.value
    //     const description = form.description.value
    //     const updateData = {
    //         title,
    //         category, 
    //         description
    //     }

    //     console.log(updateData)
    //     try {
    //         const {data} = await axios.patch(`https://ph-task-server-zeta.vercel.app/taskUpdate/${id}`, updateData)
    //         if(data.modifiedCount > 0){
    //             toast.success('Updated Successfully!')
    //             document.getElementById('my_modal_1').close()
    //             refetch()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div>
            <div className="card bg-cyan-400 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{task.title}</h2>
                    <p>{task.description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(task._id)} className="bg-red-300 p-2 rounded-md"><MdDelete className="text-xl " /></button>
                        <Link to={`/update/${task._id}`} className="bg-blue-950 text-white p-2 rounded-md"><CiEdit className="text-xl" /></Link>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    
                    
                </div>
            </div>
        </div>
    );
};

export default TaskCard;