// api func
import userSignUp from '../api/userSignUp'
// components
import FormInput from '../components/FormInput'
import FormInputCheckbox from '../components/FormInputCheckbox'


const SignUp = () => {
  const handleSignUpUserSubmit = async e => {
    e.preventDefault()

    const enteredUsername = e.target.elements[0].value.trim()
    const enteredEmail = e.target.elements[1].value.trim()
    const enteredPassword = e.target.elements[2].value

    // console.log(enteredUsername);
    // console.log(enteredEmail);
    // console.log(enteredPassword);

    const response = await userSignUp(enteredUsername, enteredEmail, enteredPassword)

    if (response) {
      e.target.elements[0].value = ''
      e.target.elements[1].value = ''
      e.target.elements[2].value = ''
      e.target.elements[3].checked = false
      e.target.elements[4].checked = false

      // navigate user
      setTimeout(() => window.location.href = '/nalog', 1500)
    }
  }

  return (
    <div className='sing-up-page'>
      <div className="container">

        <form onSubmit={handleSignUpUserSubmit} className='p-5 my-5 rounded-5'>

          <h3 className="text-center fw-bold mb-4">
            Registruj se
          </h3>

          {/* sign up email */}
          <FormInput label='Korisničko ime' name="signUpUsername" type='text' required={true} />

          {/* sign up email */}
          <FormInput label='Elektronska adresa' name="signUpEmail" type='email' required={true} />

          {/* sign up password */}
          <FormInput label='Šifra' name="signUpPassword" type='password' required={true} minLength={6} />

          {/* Terms & Conditions checkbox */}
          <FormInputCheckbox linkTitle='Pravila korišćenja' linkUrl='pravila-koriscenja' />

          {/* Privacy Policy checkbox */}
          <FormInputCheckbox linkTitle='Pravila privatnosti' linkUrl='pravila-privatnosti' />

          {/* sign up submit btn */}
          <button type="submit" className="btn btn-primary mt-2">
            Registruj se
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp