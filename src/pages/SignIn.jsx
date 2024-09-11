import { Link, useNavigate } from 'react-router-dom'
// api func
import userSignIn from '../api/userSignIn'
// components
import FormInput from '../components/FormInput'
import GoogleOAuth from '../components/GoogleOAuth'


const SignIn = () => {
  const navigate = useNavigate()

  const handleSignInUserSubmit = async e => {
    e.preventDefault()

    const enteredEmail = e.target.elements[0].value.trim()
    const enteredPassword = e.target.elements[1].value

    // console.log(enteredEmail);
    // console.log(enteredPassword);

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
            <Link to='/nova-sifra' className="btn btn-warning">
              Nova lozinka
            </Link>
          </div>
        </section>

        <section>
          <GoogleOAuth />
        </section>
      </div>
    </div>
  )
}

export default SignIn