import { Link } from "react-router-dom"
// components
import FormInput from "../components/FormInput"


const ForgotPassword = () => {
    const handleResetPassword = async e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()

        console.log(enteredEmail);        
    }

    return (
        <div className='forgot-password-page'>
            <div className="container">
                <section className="forgot-password-content p-5 my-5 rounded-5">

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
                        <Link to='/sign-in' className="btn btn-warning">
                            Prijavi se
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword