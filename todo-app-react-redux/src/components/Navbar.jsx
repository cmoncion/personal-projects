import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { BiSolidHome, BiPlusMedical } from "react-icons/bi";

const Navbar = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <header className="flex flex-col justify-center">
      <h1 className=" text-slate-300 font-bold tracking-widest text-center py-5 text-2xl">Todo Task App - Redux Tollkit</h1>
      <div className="flex flex-row gap-5 items-center justify-center pb-5">
        <Link to="/"><BiSolidHome /></Link>
        <Link to="/create-task"><BiPlusMedical /></Link>

        <span>Nº: {tasks.length}</span>
      </div>
    </header>
  );
};

export default Navbar;
