import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../views/Login/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:"login",
        element: <Login></Login>
    }
  ]);
export default router;