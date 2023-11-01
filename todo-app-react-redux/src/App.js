import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="flex bg-slate-900 min-h-screen text-gray-200 items-center justify-center">
      <div className="container flex flex-col w-2/6 bg-slate-600 p-4 rounded-md min-w-[38px]">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
