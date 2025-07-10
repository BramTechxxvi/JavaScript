import { Link } from "react-router";

const Login = ()=> {
    return (
        <div className="mainWrapper">
        <form action="" method="post">
            <h1>Login</h1>
            <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" name="email" required/>
            </div>
            <div className="inputWrapper">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Enter your password" required/>
            </div>
        </form>
        <Link to="/signup">SignUp</Link>
    </div>
    );
}

export default Login;