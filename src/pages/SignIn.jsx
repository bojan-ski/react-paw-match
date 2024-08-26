import { Link } from 'react-router-dom'
// components
import FormInput from '../components/FormInput'


const SignIn = () => {
  const handleSignInUserSubmit = async e => {
    e.preventDefault()

    const enteredEmail = e.target.elements[0].value.trim()
    const enteredPassword = e.target.elements[1].value

    console.log(enteredEmail);
    console.log(enteredPassword);
  }

  return (
    <div className='sing-in-page'>
      <div className="container">

        <section className="sing-in-page-content p-5 my-5 rounded-5">
          <div className="sing-in-page-main mb-4">

            <h3 className="text-center fw-bold mb-4">
              Prijavi se
            </h3>

            <form onSubmit={handleSignInUserSubmit}>
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

          <div className="sing-in-page-page-footer text-end">
            <p className='fw-bold'>
              Zaboravili ste lozinku?
            </p>
            <Link to='/forgot-password' className="btn btn-warning">
              Nova lozinka
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SignIn