//components
import AboutTheCompany from "../components/dashboardPage/AboutTheCompany"
import ApplicationGoals from "../components/dashboardPage/ApplicationGoals"
import DashboardContact from "../components/dashboardPage/DashboardContact"
import Hero from "../components/dashboardPage/Hero"
import Services from "../components/dashboardPage/Services"
import Testimonials from "../components/dashboardPage/Testimonials"


const Dashboard = () => {
  return (
    <div className="dashboard-page">

      <Hero />

      <div className="container">

        <ApplicationGoals />

        <Services />

        <Testimonials />

        <AboutTheCompany />

        <DashboardContact />

      </div>
    </div>
  )
}

export default Dashboard