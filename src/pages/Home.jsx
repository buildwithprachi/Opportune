import { useEffect, useState } from "react"

import JobCard from "../components/JobCard"
import Footer from "../components/Footer"

import { Link } from "react-router-dom"

import { getJobs } from "../jobs"

import "../styles/Home.css"

function Home() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {

    const fetchJobs = async () => {

      const result = await getJobs()

      setJobs(result.slice(0, 6))
    }

    fetchJobs()

  }, [])

  return (

    <div className="home">

      <div className="hero-section">

        <div className="hero-text">

          <h1>Find Your Dream Internship</h1>

          <p>
            Launch your career with opportunities that match your
            interests and skills. Connect with top companies
            and take the first step towards your professional future.
          </p>

          <Link to="/internships">

            <button className="explore-btn">
              Explore Internships
            </button>

          </Link>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="office"
          />

        </div>

      </div>

      <div className="jobs-section">

        <div className="jobs-header">

          <div>

            <h2>Featured Opportunities</h2>

            <p className="jobs-subtext">
              Hand-picked internships to jumpstart your journey.
            </p>

          </div>

          <Link to="/internships">

            <button className="see-more-btn">
              See More
            </button>

          </Link>

        </div>

        <div className="jobs-container">

          {jobs.map((job, index) => (

            <JobCard
              key={index}
              title={job.title}
              company={job.company_name}
              location={job.location}
              salary={job.salary}
              url={job.url}
            />

          ))}

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home