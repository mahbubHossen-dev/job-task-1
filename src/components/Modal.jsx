import React from 'react';

const Modal = ({ task, handleUpdate }) => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={(e)  => handleUpdate(e, task._id)} className="card-body">
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
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;