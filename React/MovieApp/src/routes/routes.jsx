import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <SignUp/>
    },
    {
        path: "/",
        element: <Layout/>
    }
])

export default router