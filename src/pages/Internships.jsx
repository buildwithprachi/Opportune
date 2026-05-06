import { useEffect, useState } from "react"
import "../styles/Internships.css"
import Footer from "../components/Footer"
import { getJobs } from "../jobs"

function Internships() {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {

      try {

        const result = await getJobs()

        console.log("FINAL JOBS:", result)

        setJobs(result)

      } catch (error) {

        console.error("FETCH ERROR:", error)

      } finally {

        setLoading(false)

      }

    }

    fetchData()

  }, [])

  console.log(jobs)

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

            <p>
              Showing {jobs.length} results
            </p>

          </div>

          {loading && <p>Loading internships...</p>}

          {!loading && jobs.length === 0 && (
            <p>No internships found</p>
          )}

          <div className="internship-cards">

            {!loading && jobs.length > 0 && jobs.map((job, index) => (

              <div className="internship-card" key={index}>

                <div className="card-top">

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                    alt="logo"
                  />

                  <span className="tag new">
                    NEW
                  </span>

                </div>

                <h3>{job.title}</h3>

                <h4>{job.company_name}</h4>

                <div className="card-tags">

                  <span>{job.location}</span>

                  <span>
                    Internship
                  </span>

                </div>

                <p>
                  Explore this exciting opportunity and apply
                  directly through the provided link.
                </p>

                <div className="card-buttons">

                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="apply-btn"
                  >
                    Apply Now
                  </a>

                </div>

              </div>

            ))}

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