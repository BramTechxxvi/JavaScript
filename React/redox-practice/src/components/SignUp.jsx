import {Link} from 'react-router'

const SignUp = ()=> {
    return (
        <div className="mainWrapper">
            <form className='sign-up' action="" method="post">
                <h1>Sign Up</h1>
                <div className="inputWrapper">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" id='firstName' name='firstName' placeholder='Enter your first anme' required />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id='lastName' name='lastName' placeholder='Enter your last name' required />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="age">Age</label>
                    <input type="text" id='age' name='age' placeholder='Enter your age' required />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' placeholder='Enter your email' required />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' placeholder='Enter your password' required />
                </div>

                <button type='submit'>Sign Up</button>
            </form>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default SignUp;