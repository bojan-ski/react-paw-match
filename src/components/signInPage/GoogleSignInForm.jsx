import { useNavigate } from "react-router-dom"
// api func
import userGoogleOAuth from "../../api/userGoogleOAuth"
// components
import GoogleOAuthBtn from "../GoogleOAuthBtn"
// toastify
import { toast } from "react-toastify"


const GoogleSignInForm = () => {
    const navigate = useNavigate()

    const handleGoogleOAuth = async e => {
        e.preventDefault()

        const response = await userGoogleOAuth() 

        if(response){
            //success message
            toast.success('Uspešno ste se prijavili')

            // navigate user 
            navigate('/nalog')
        }
    }

    return (
        <section className='sign-in-form-regular-google-oauth text-center'>
            <form onSubmit={handleGoogleOAuth}>
                <GoogleOAuthBtn />
            </form>
        </section>
    )
}

export default GoogleSignInForm