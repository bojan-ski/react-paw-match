//components
import AboutTheCompany from "../components/dashboardPage/AboutTheCompany"
import ApplicationGoals from "../components/dashboardPage/ApplicationGoals"
import DashboardContact from "../components/dashboardPage/DashboardContact"
import Hero from "../components/dashboardPage/Hero"
import Partners from "../components/dashboardPage/Partners"
import Services from "../components/dashboardPage/Services"
import Testimonials from "../components/dashboardPage/Testimonials"


const Dashboard = () => {
  return (
    <div className="dashboard-page">

      <Hero />

      <div className="container">

        <ApplicationGoals />

        <Services />

        <AboutTheCompany />

        <Testimonials />

        <Partners/>

        <DashboardContact />

      </div>
    </div>
  )
}

export default Dashboard