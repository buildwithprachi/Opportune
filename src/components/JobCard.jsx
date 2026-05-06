import "../styles/JobCard.css"

function JobCard() {
  return (
    <div className="job-card">

      <div className="job-card-top">

        <div className="company-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
            alt="company-logo"
          />
        </div>

        <span className="job-location">Remote</span>

      </div>

      <h3>Software Engineering Intern</h3>

      <h4>TechNova Solutions</h4>

      <p>
        Join our core platform team to build scalable
        applications and work closely with experienced
        developers on real-world projects.
      </p>

      <div className="job-card-bottom">

        <span className="salary">$35/hr</span>

        <button>View Details →</button>

      </div>

    </div>
  )
}

export default JobCard