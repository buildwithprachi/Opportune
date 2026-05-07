import "../styles/Profile.css"
import Footer from "../components/Footer"

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-top">

        <div className="profile-card">

          <div className="profile-header">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />

            <div className="profile-info">

              <h1>Deepali Aggarwal</h1>

              <h3>Computer Science AI Student @ Newton School of Technology</h3>

              <p>Delhi, NCR, IN (Open to Remote)</p>

            </div>

            <button>Edit Profile</button>

          </div>

          <div className="profile-links">

            <a href="deepali.a25134@nst.rishihood.edu.in" target="_blank" rel="noopener noreferrer">
              Mail
            </a>

            <a href="https://www.linkedin.com/in/deepali-aggarwal-b54066368/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>

            <a href="https://github.com/deepaliaggarwal856-hub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>

          </div>

        </div>

        <div className="strength-card">

          <h2>Profile Strength</h2>

          <h1>85%</h1>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p>
            Add your latest projects to improve your profile
            and stand out to recruiters.
          </p>

          <button>Complete Profile</button>

        </div>

      </div>

      <div className="profile-content">

        <div className="left-section">

          <div className="resume-card">

            <h2>Resume</h2>

            <div className="resume-upload">
              <p>Upload New Resume</p>
              <span>PDF, DOCX up to 5MB</span>
            </div>

            <div className="resume-file">
              E_Rostova_Resume_2024.pdf
            </div>

          </div>

          <div className="skills-card">

            <h2>Skills</h2>

            <div className="skills-group">

              <span>Python</span>
              <span>React.js</span>
              <span>TypeScript</span>
              <span>SQL</span>
              <span>Git/GitHub</span>
              <span>UI Design</span>
              <span>Figma</span>
              <span>Agile/Scrum</span>

            </div>

          </div>

        </div>

        <div className="right-section">

          <div className="experience-card">

            <h2>Experience</h2>

            <div className="experience-item">

              <div className="experience-top">
                <h3>Software Engineering Intern</h3>
                <span>May 2023 - Aug 2023</span>
              </div>

              <h4>InnovateTech Solutions</h4>

              <p>
                Developed and deployed RESTful APIs and collaborated
                with frontend developers to improve application performance.
              </p>

            </div>

            <div className="experience-item">

              <div className="experience-top">
                <h3>Web Development Teaching Assistant</h3>
                <span>Jan 2023 - May 2023</span>
              </div>

              <h4>Tech University</h4>

              <p>
                Assisted students with HTML, CSS, JavaScript,
                and debugging concepts during practical sessions.
              </p>

            </div>

          </div>

          <div className="education-card">

            <h2>Education</h2>

            <div className="education-content">

              <div>
                <h3>B.S. in Computer Science</h3>
                <p>Tech University</p>
              </div>

              <span>Expected May 2025</span>

            </div>

            <div className="education-details">

              <div>
                <h4>GPA</h4>
                <p>3.8 / 4.0</p>
              </div>

              <div>
                <h4>Relevant Coursework</h4>
                <p>
                  Data Structures, Algorithms, UI/UX Design,
                  Database Management, Cloud Computing
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile