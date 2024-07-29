import Navbar from "./components/Navbar";
import AddProject from "./pages/AddProject";
import ViewProjects from "./pages/ViewProjects";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () =>{
    return (
      <>
        <Navbar />
        <Outlet /> 
      </>
    );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ViewProjects />,
      },
      {
        path: "/addProject",
        element: <AddProject />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
