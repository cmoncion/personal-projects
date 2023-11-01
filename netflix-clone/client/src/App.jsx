import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRouter from "./auth/ProtectedRouter";
import HomeBrowse from "./pages/HomeBrowse"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <ProtectedRouter />,
    children: [
      {
        path: "/browse",
        element: <HomeBrowse />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
