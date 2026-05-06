import "../styles/Internships.css"
import Footer from "../components/Footer"

function Internships() {
  return (
    <div className="internships-page">

      <div className="internships-container">

        <aside className="filters-section">

          <h2>Filters</h2>

          <div className="filter-group">
            <h4>ROLE</h4>

            <label><input type="checkbox" checked readOnly /> Software Engineering</label>
            <label><input type="checkbox" /> Data Science</label>
            <label><input type="checkbox" /> Product Design</label>
            <label><input type="checkbox" /> Marketing</label>
          </div>

          <div className="filter-group">
            <h4>LOCATION</h4>

            <label><input type="checkbox" checked readOnly /> Remote</label>
            <label><input type="checkbox" /> San Francisco, CA</label>
            <label><input type="checkbox" /> New York, NY</label>
          </div>

          <div className="filter-group">
            <h4>DURATION</h4>

            <select>
              <option>Any Duration</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>STIPEND RANGE</h4>

            <input type="range" min="0" max="10000" />

            <div className="stipend-range">
              <span>$0</span>
              <span>$10,000+</span>
            </div>
          </div>

        </aside>

        <main className="internships-content">

          <div className="top-search-bar">

            <input
              type="text"
              placeholder="Search by job title, company, or keywords..."
            />

            <div className="sort-section">
              <span>Sort by:</span>

              <select>
                <option>Most Relevant</option>
                <option>Latest</option>
                <option>Highest Paid</option>
              </select>
            </div>

          </div>

          <div className="internships-header">

            <h1>Software Engineering Internships</h1>

            <p>Showing 142 results</p>

          </div>

          <div className="internship-cards">

            <div className="internship-card">

              <div className="card-top">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  alt="logo"
                />

                <span className="tag new">NEW</span>

              </div>

              <h3>Frontend Developer Intern</h3>

              <h4>TechFlow Inc.</h4>

              <div className="card-tags">
                <span>Remote</span>
                <span>$4,000/mo</span>
                <span>3 Months</span>
              </div>

              <p>
                Join our core product team to build responsive user interfaces
                using React and modern frontend technologies.
              </p>

              <div className="card-buttons">
                <button className="details-btn">View Details</button>
                <button className="apply-btn">Apply Now</button>
              </div>

            </div>

            <div className="internship-card">

              <div className="card-top">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                  alt="logo"
                />

                <span className="tag">HOT</span>

              </div>

              <h3>Machine Learning Intern</h3>

              <h4>DataSys Analytics</h4>

              <div className="card-tags">
                <span>San Francisco</span>
                <span>$6,500/mo</span>
                <span>6 Months</span>
              </div>

              <p>
                Help build predictive models and work on next-generation AI
                systems with our experienced ML team.
              </p>

              <div className="card-buttons">
                <button className="details-btn">View Details</button>
                <button className="apply-btn">Apply Now</button>
              </div>

            </div>

            <div className="internship-card">

              <div className="card-top">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  alt="logo"
                />

                <span className="tag urgent">URGENT</span>

              </div>

              <h3>Backend Engineering Intern</h3>

              <h4>CloudNet Solutions</h4>

              <div className="card-tags">
                <span>Remote</span>
                <span>Unpaid</span>
                <span>2 Months</span>
              </div>

              <p>
                Assist in API development and scalable backend systems using
                Node.js and Express.
              </p>

              <div className="card-buttons">
                <button className="details-btn">View Details</button>
                <button className="apply-btn">Apply Now</button>
              </div>

            </div>

            <div className="internship-card">

              <div className="card-top">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                  alt="logo"
                />

              </div>

              <h3>iOS Developer Intern</h3>

              <h4>AppStudio Mobile</h4>

              <div className="card-tags">
                <span>New York</span>
                <span>$5,000/mo</span>
                <span>4 Months</span>
              </div>

              <p>
                Help create mobile applications using Swift and modern iOS
                development practices.
              </p>

              <div className="card-buttons">
                <button className="details-btn">View Details</button>
                <button className="apply-btn">Apply Now</button>
              </div>

            </div>

          </div>

          <div className="pagination">

            <button>{"<"}</button>

            <button className="active-page">1</button>

            <button>2</button>
            <button>3</button>

            <span>...</span>

            <button>12</button>

            <button>{">"}</button>

          </div>

        </main>

      </div>

      <Footer />

    </div>
  )
}

export default Internships