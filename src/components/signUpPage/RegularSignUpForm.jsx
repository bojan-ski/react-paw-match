// api func
import userSignUp from "../../api/userSignUp"
// components
import FormInput from "../FormInput"
import FormInputCheckbox from "../FormInputCheckbox"


const RegularSignUpForm = () => {
    const handleRegularSignUpUserSubmit = async e => {
        e.preventDefault()

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

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
        <section className='sign-up-form'>
            <form onSubmit={handleRegularSignUpUserSubmit} >

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
        </section>
    )
}

export default RegularSignUpForm