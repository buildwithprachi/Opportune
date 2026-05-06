import "../styles/Login.css"
import Footer from "../components/Footer"

function Login() {
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

          <form className="login-form">

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="student@university.edu"
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
              />

            </div>

            <button className="login-btn">
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