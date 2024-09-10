import { Link } from "react-router-dom"


const DashboardContact = () => {
    return (
        <section className="text-center mb-5">
            <h5 className="mb-3">
                Ako želite da stupite u kontakt sa nama radi nekog vida saradnje ili želite da podržite naš rad nekom vrstom donacije
            </h5>
            <h6 className="mb-4">
                Možete nas kontaktirati putem naše Kontak stranice. Unapred Hvala Vam 😃
            </h6>

            <Link className="btn btn-success text-uppercase fw-bold fs-5 px-4 py-2" to='/kontakt'>
                kontakt
            </Link>
        </section>
    )
}

export default DashboardContact