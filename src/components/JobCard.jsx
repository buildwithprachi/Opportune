import "../styles/JobCard.css"

function JobCard({ title, company, location, salary, url }) {

  return (

    <div className="job-card">

      <div className="card-top">

        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
          alt="logo"
        />

        <span className="job-location">
          {location || "Remote"}
        </span>

      </div>

      <h3>{title}</h3>

      <h4>{company}</h4>

      <p>
        Explore this exciting opportunity and apply now.
      </p>

      <div className="card-bottom">

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="details-link"
        >
          View Details →
        </a>

      </div>

    </div>

  )

}

export default JobCard