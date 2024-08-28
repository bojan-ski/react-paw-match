import { Link } from "react-router-dom"
// context
import { useGlobalContext } from "../../../context"


const Onboarding = () => {
  const { userProfileDetails, logOutUser } = useGlobalContext();

  return (
    <div className="onboarding text-end mb-3">
      {userProfileDetails?.userName ? (
        <button className='btn-danger onboarding-btn btn me-3' onClick={logOutUser}>
          Odjavi se
        </button>
      ) : (
        <>
          <Link to='/sign-up' className='btn-info onboarding-btn btn me-3'>
            Napravi nalog
          </Link>
          <Link to='/sign-in' className='btn-info onboarding-btn btn me-3'>
            Prijavi se
          </Link>
        </>
      )}
    </div>
  )
}

export default Onboarding