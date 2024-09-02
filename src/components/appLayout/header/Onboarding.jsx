import { Link } from "react-router-dom"
// context
import { useGlobalContext } from "../../../context"


const Onboarding = () => {
  const { userProfileDetails, logOutUser } = useGlobalContext();

  return (
    <div className="onboarding text-end mb-3">
      {userProfileDetails?.userName ? (
        <div className="d-flex align-items-center justify-content-end">
          <p className="text-white mb-0">
            Hello
            <span className="capitalize fw-bold mx-3">
              {userProfileDetails.userName}
            </span>
          </p>
          <button className='btn-danger onboarding-btn btn me-3' onClick={logOutUser}>
            Odjavi se
          </button>
        </div>
      ) : (
        <>
          <Link to='/registracija' className='btn-info onboarding-btn btn me-3'>
            Napravi nalog
          </Link>
          <Link to='/prijava' className='btn-info onboarding-btn btn me-3'>
            Prijavi se
          </Link>
        </>
      )}
    </div>
  )
}

export default Onboarding