import Navbar from "./components/Navbar";
import {
  createBrowserRouter,

} from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}



const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    }

  ]
)

export default router;
