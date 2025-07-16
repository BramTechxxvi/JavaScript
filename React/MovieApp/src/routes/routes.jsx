import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    },
    {
        path: "/layout",
        element: <Layout/>
        children: [
            
        ]
    }
])

export default router