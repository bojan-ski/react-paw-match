import { Link } from "react-router-dom"

const FormInputCheckbox = ({linkTitle, linkUrl}) => {
    return (
        <div className="checkbox d-flex align-items-center mb-3">
            <input className="form-check-input mt-0" type="checkbox" required/>
            <p className="ms-3 mb-0">
                Prihvatam:
                <Link className="ms-2" to={`/${linkUrl}`}>
                    {linkTitle}
                </Link>
            </p>
        </div>
    )
}

export default FormInputCheckbox