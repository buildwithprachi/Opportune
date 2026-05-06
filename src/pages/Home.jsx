import JobCard from "../components/JobCard"
import Footer from "../components/Footer"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">

      <div className="hero-section">

        <div className="hero-text">

          <h1>Find Your Dream Internship</h1>

          <p>
            Launch your career with opportunities that match your
            interests and skills. Connect with top companies and take the first step towards your professional future.
          </p>

          <button class="explore-btn">
            Explore Internships
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="office"
          />

        </div>

      </div>

      <div className="jobs-section">

        <h2>Featured Opportunities</h2>

        <p className="jobs-subtext">
          Hand-picked internships to jumpstart your journey.
        </p>

        <div className="jobs-container">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home