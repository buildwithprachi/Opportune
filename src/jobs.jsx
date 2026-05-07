export const getJobs = async () => {

  try {

    const res = await fetch(
      "https://www.arbeitnow.com/api/job-board-api"
    )

    const data = await res.json()

    console.log("DATA:", data)

    return data.data || []

  } catch (error) {

    console.error("ERROR:", error)

    return []

  }

}