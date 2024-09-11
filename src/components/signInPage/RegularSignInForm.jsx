import { Link, useNavigate } from "react-router-dom"
// components
import FormInput from "../FormInput"


const RegularSignInForm = () => {
    const navigate = useNavigate()

    const handleRegularSignInUserSubmit = async e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        const response = await userSignIn(enteredEmail, enteredPassword)

        if (response) {
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            // navigate user
            setTimeout(() => navigate('/nalog'), 1500)
            // window.location.href = '/nalog'           
        }
    }

    return (
        <section className="sign-in-form-regular my-5 rounded-5">
            <div className="sign-in-form-regular-main mb-4">
                <form onSubmit={handleRegularSignInUserSubmit}>
                    {/* sign in email */}
                    <FormInput label='Elektronska adresa' name="loginEmail" type='email' required={true} />

                    {/* sign in password */}
                    <FormInput label='Šifra' name="loginPassword" type='password' required={true} />

                    {/* sign in submit btn */}
                    <button type="submit" className="btn btn-primary">
                        Prijavi se
                    </button>
                </form>
            </div>

            <div className="sign-in-form-regular-footer text-end">
                <p className='fw-bold'>
                    Zaboravili ste lozinku?
                </p>
                <Link to='/nova-sifra' className="btn btn-warning">
                    Nova lozinka
                </Link>
            </div>

        </section>
    )
}

export default RegularSignInForm