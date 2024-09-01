import { Link } from "react-router-dom"

const BackButton = ({ backPath }) => {
    return (
        <Link to={backPath} className="btn btn-warning text-white fw-bold px-4">
            Nazad
        </Link>
    )
}

export default BackButton