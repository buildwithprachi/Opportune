import { useEffect, useState, useMemo } from "react"
import "../styles/Internships.css"
import Footer from "../components/Footer"
import { getJobs } from "../jobs"

function Internships() {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  // Filter & Sort States
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRoles, setSelectedRoles] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [duration, setDuration] = useState("Any Duration")
  const [minStipend, setMinStipend] = useState(0)
  const [sortBy, setSortBy] = useState("Most Relevant")

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 9

  useEffect(() => {

    const fetchData = async () => {

      try {

        const result = await getJobs()

        // Generate mock stipend & duration so filters work
        const enhancedJobs = result.map((job, index) => {
          const mockStipends = [0, 1500, 3000, 5000, 8000, 12000]
          const mockDurations = ["1 Month", "3 Months", "6 Months"]
          
          return {
            ...job,
            mockStipend: mockStipends[index % mockStipends.length],
            mockDuration: mockDurations[index % mockDurations.length],
            searchString: `${job.title} ${job.company_name}`.toLowerCase()
          }
        })

        console.log("FINAL JOBS:", enhancedJobs)

        setJobs(enhancedJobs)

      } catch (error) {

        console.error("FETCH ERROR:", error)

      } finally {

        setLoading(false)

      }

    }

    fetchData()

  }, [])

  // Filter and sort logic
  const filteredAndSortedJobs = useMemo(() => {
    let result = jobs;

    if (searchTerm) {
      result = result.filter(job => job.searchString.includes(searchTerm.toLowerCase()));
    }

    if (selectedRoles.length > 0) {
      result = result.filter(job => 
        selectedRoles.some(role => job.title.toLowerCase().includes(role.toLowerCase()))
      );
    }

    if (selectedLocations.length > 0) {
      result = result.filter(job => {
        if (selectedLocations.includes("Remote") && job.remote) return true;
        return selectedLocations.some(loc => job.location.toLowerCase().includes(loc.toLowerCase()));
      });
    }

    if (duration !== "Any Duration") {
      result = result.filter(job => job.mockDuration === duration);
    }

    if (minStipend > 0) {
      result = result.filter(job => job.mockStipend >= minStipend);
    }

    if (sortBy === "Latest") {
      result = [...result].sort((a, b) => b.created_at - a.created_at);
    } else if (sortBy === "Highest Paid") {
      result = [...result].sort((a, b) => b.mockStipend - a.mockStipend);
    }

    return result;
  }, [jobs, searchTerm, selectedRoles, selectedLocations, duration, minStipend, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedJobs.length / jobsPerPage) || 1;
  const currentJobs = filteredAndSortedJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handleRoleToggle = (role) => {
    setSelectedRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
    setCurrentPage(1);
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    );
    setCurrentPage(1);
  };

  return (

    <div className="internships-page">

      <div className="internships-container">

        <aside className="filters-section">

          <h2>Filters</h2>

          <div className="filter-group">
            <h4>ROLE</h4>

            <label><input type="checkbox" checked={selectedRoles.includes("Software Engineering")} onChange={() => handleRoleToggle("Software Engineering")} /> Software Engineering</label>
            <label><input type="checkbox" checked={selectedRoles.includes("Data Science")} onChange={() => handleRoleToggle("Data Science")} /> Data Science</label>
            <label><input type="checkbox" checked={selectedRoles.includes("Product Design")} onChange={() => handleRoleToggle("Product Design")} /> Product Design</label>
            <label><input type="checkbox" checked={selectedRoles.includes("Marketing")} onChange={() => handleRoleToggle("Marketing")} /> Marketing</label>
          </div>

          <div className="filter-group">
            <h4>LOCATION</h4>

            <label><input type="checkbox" checked={selectedLocations.includes("Remote")} onChange={() => handleLocationToggle("Remote")} /> Remote</label>
            <label><input type="checkbox" checked={selectedLocations.includes("Berlin")} onChange={() => handleLocationToggle("Berlin")} /> Berlin, DE</label>
            <label><input type="checkbox" checked={selectedLocations.includes("London")} onChange={() => handleLocationToggle("London")} /> London, UK</label>
            <label><input type="checkbox" checked={selectedLocations.includes("Munich")} onChange={() => handleLocationToggle("Munich")} /> Munich, DE</label>
          </div>

          <div className="filter-group">
            <h4>DURATION</h4>

            <select value={duration} onChange={(e) => { setDuration(e.target.value); setCurrentPage(1); }}>
              <option value="Any Duration">Any Duration</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>STIPEND RANGE</h4>

            <input 
              type="range" 
              min="0" 
              max="10000" 
              step="500"
              value={minStipend} 
              onChange={(e) => { setMinStipend(Number(e.target.value)); setCurrentPage(1); }} 
            />

            <div className="stipend-range">
              <span>$0</span>
              <span style={{ fontWeight: 'bold' }}>${minStipend}+</span>
              <span>$10,000+</span>
            </div>
          </div>

        </aside>

        <main className="internships-content">

          <div className="top-search-bar">

            <input
              type="text"
              placeholder="Search by job title, company, or keywords..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />

            <div className="sort-section">
              <span>Sort by:</span>

              <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
                <option value="Most Relevant">Most Relevant</option>
                <option value="Latest">Latest</option>
                <option value="Highest Paid">Highest Paid</option>
              </select>
            </div>

          </div>

          <div className="internships-header">

            <h1>Internships & Jobs</h1>

            <p>
              Showing {filteredAndSortedJobs.length} results
            </p>

          </div>

          {loading && <p>Loading internships...</p>}

          {!loading && filteredAndSortedJobs.length === 0 && (
            <p className="no-results-msg">No internships found matching your filters.</p>
          )}

          <div className="internship-cards">

            {!loading && currentJobs.length > 0 && currentJobs.map((job, index) => (

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

                  <span>{job.remote ? "Remote" : (job.location.split(',')[0] || "Location N/A")}</span>

                  <span>
                    {job.mockDuration}
                  </span>
                  
                  <span>
                    ${job.mockStipend}/mo
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

          {!loading && totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>

              <button className="active-page">{currentPage}</button>
              
              <span style={{ margin: '0 10px', color: '#666', alignSelf: 'center' }}>of {totalPages}</span>

              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          )}

        </main>

      </div>

      <Footer />

    </div>
  )
}

export default Internships