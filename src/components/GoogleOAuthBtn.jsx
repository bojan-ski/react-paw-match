import { FcGoogle } from "react-icons/fc"


const GoogleOAuthBtn = () => {
    return (
        <button className="btn border mb-3" >
            {window.location.pathname == '/registracija' ? 'Kreiraj nalog putem koristeći' : 'Prijavise pomoću'}
            <span className="ms-2">
                <FcGoogle />
            </span>
        </button>
    )
}

export default GoogleOAuthBtn