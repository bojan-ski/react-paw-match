import { Link } from "react-router-dom"

const Onboarding = () => {
  return (
    <div className="onboarding text-end mb-3">
      <Link to='/sign-up' className='btn-info onboarding-btn btn me-3'>
        Napravi nalog
      </Link>
      <Link to='/sign-in' className='btn-info onboarding-btn btn me-3'>
        Prijavi se
      </Link>
    </div>
  )
}

export default Onboarding