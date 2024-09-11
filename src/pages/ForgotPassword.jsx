import { Link, useNavigate } from "react-router-dom"
// api func
import userResetPassword from "../api/userResetPassword"
// components
import FormInput from "../components/FormInput"


const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleResetPassword = async e => {
        e.preventDefault()

        e.preventDefault()

        if (window.confirm('Da li ste sigurni da želite da novu šifru?')) {
            const enteredEmail = e.target.elements[0].value.trim()

            const response = await userResetPassword(enteredEmail)

            if (response) {
                e.target.elements[0].value = ''

                // after the user has submitted for a new password, the user is redirected to the Dashboard page
                setTimeout(() => navigate('/'), 2500)
            }
        }
    }

    return (
        <div className='forgot-password-page'>
            <div className="container">
                <section className="forgot-password-content p-4 my-5 rounded-5">

                    <div className="forgot-password-main mb-4">
                        <h3 className="text-center fw-bold mb-4">
                            Nova lozinka
                        </h3>

                        <form onSubmit={handleResetPassword}>
                            {/* login email */}
                            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

                            {/* reset submit btn */}
                            <button type="submit" className="btn btn-primary">
                                Nova Šifra
                            </button>
                        </form>
                    </div>

                    <div className="forgot-password-footer text-end">
                        <p className="fw-bold">
                            Ne treba Vam nova lozinka?
                        </p>
                        <Link to='/prijava' className="btn btn-warning">
                            Prijavi se
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword