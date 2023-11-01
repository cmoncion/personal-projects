import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";

import { FaPlus, FaEdit } from "react-icons/fa";

const TaskForm = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleOnChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(inputValues));
    } else {
      dispatch(
        addTask({
          ...inputValues,
          id: uuid(),
          completed: false,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      setInputValues(taskFound);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
        <input
          type="text"
          name="title"
          placeholder="@Task"
          onChange={handleOnChange}
          value={inputValues.title}
          className="p-2.5 border-0 text-slate-800 focus:ring-0 w-[250px]"
        />
        <button className="py-2.5 p-5 bg-slate-800">
          {params.id ? <FaEdit style={{ fontSize: "25px" }}/> : <FaPlus style={{ fontSize: "25px" }}/>}
           
        </button>
      </form>
    </>
  );
};

export default TaskForm;
