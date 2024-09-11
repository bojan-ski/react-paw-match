import { useNavigate } from "react-router-dom"
// api func
import userGoogleOAuth from "../../api/userGoogleOAuth"
// components
import FormInputCheckbox from "../FormInputCheckbox"
import GoogleOAuthBtn from "../GoogleOAuthBtn"
// toastify
import { toast } from "react-toastify"


const GoogleSignUpForm = () => {
    const navigate = useNavigate()

    const handleGoogleOAuth = async e => {
        e.preventDefault()

        const response = await userGoogleOAuth() 

        if(response){
            //success message
            toast.success('Vaš nalog je kreiran')

            // navigate user 
            navigate('/nalog')
        }
    }

    return (
        <section className='google-oauth text-center'>
            <form onSubmit={handleGoogleOAuth}>
                <GoogleOAuthBtn />

                {/* Terms & Conditions checkbox */}
                <FormInputCheckbox linkTitle='Pravila korišćenja' linkUrl='pravila-koriscenja' />

                {/* Privacy Policy checkbox */}
                <FormInputCheckbox linkTitle='Pravila privatnosti' linkUrl='pravila-privatnosti' />

            </form>
        </section>
    )
}

export default GoogleSignUpForm