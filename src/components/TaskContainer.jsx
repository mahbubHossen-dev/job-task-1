import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskContainer = ({ category, tasks }) => {
    return (
        <Droppable droppableId={category} isDropDisabled={false} isCombineEnabled={false}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-gray-200 p-4 rounded-md min-h-[300px]"
                >
                    {tasks.map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="bg-white p-3 rounded-md shadow-md mb-2"
                                >
                                    <TaskCard task={task} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskContainer;
