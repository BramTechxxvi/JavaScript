 import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Counter from "../feautures/counter/Counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Counter />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;