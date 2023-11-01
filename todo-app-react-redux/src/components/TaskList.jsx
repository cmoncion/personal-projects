import { useDispatch, useSelector } from "react-redux";
import { completedTask, removeTask } from "../features/tasks/taskSlice";

import { BiEdit, BiTrash, BiCheckbox, BiCheckboxSquare } from "react-icons/bi";

import { Link } from "react-router-dom";

const TaskList = () => {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  const handleIsCompleted = (id, completed) => {
    dispatch(completedTask({id, completed: !completed,}));
    
  };
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="flex gap-4 mb-2 rounded p-2 bg-rose-500">

          <button onClick={() => handleIsCompleted(task.id, task.completed)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              {task.completed ? (
                <BiCheckboxSquare style={{ color: "#00ff1a", fontSize: "25px" }} />
              ) : (
                <BiCheckbox style={{ color: "currentColor", fontSize: "25px" }} />
              )}
            </button>

          <h3 className={task.completed ? "w-full italic line-through text-gray-400" : "w-full"}>{task.title}</h3>

          <div className="flex gap-2 text-xl justify-end place-self-center w-full items-center">
            <Link to={`/edit-task/${task.id}`} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <BiEdit />
            </Link>
            <button onClick={() => handleRemove(task.id)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <BiTrash />
            </button>
          </div>

        </div>
      ))}
    </>
  );
};

export default TaskList;
