import "../styles/Login.css"
import Footer from "../components/Footer"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {

        e.preventDefault()

        if (!email || !password) {
            setError("Please fill all fields")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        const user = {
            email,
        }

        localStorage.setItem("user", JSON.stringify(user))

        alert("Login Successful!")

        navigate("/home")
    }

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-tabs">

                    <button className="active-tab">Login</button>

                    <button>Sign Up</button>

                </div>

                <div className="login-content">

                    <h1>Welcome Back</h1>

                    <p>
                        Log in to continue your internship journey.
                    </p>

                    <form className="login-form" onSubmit={handleLogin}>

                        <div className="input-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="student@university.edu"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <div className="password-label">

                                <label>Password</label>

                                <a href="#">Forgot password?</a>

                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <button className="login-btn" type="submit">
                            Log In
                        </button>

                    </form>

                    <div className="divider">
                        <span>OR CONTINUE WITH</span>
                    </div>

                    <div className="social-buttons">

                        <button>
                            Google
                        </button>

                        <button>
                            LinkedIn
                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Login