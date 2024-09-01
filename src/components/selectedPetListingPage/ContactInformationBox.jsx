const ContactInformationBox = ({ contactFullName, contactEmailAddress, contactPhoneNumber }) => {
    return (
        <>
            <h4 className="mb-3 fw-bold">
                Kontakt informacije:
            </h4>
            <p className='mb-0 fw-bold text-muted'>
                Ime vlasnika:
                <span className='capitalize ms-2 text-dark'>{contactFullName}</span>
            </p>
            <p className='mb-0 fw-bold text-muted'>
                Email:
                <span className='ms-2 text-dark'>{contactEmailAddress}</span>
            </p>
            <p className='mb-0 fw-bold text-muted'>
                Telefon:
                <span className='ms-2 text-dark'>+381 {contactPhoneNumber}</span>
            </p>
        </>
    )
}

export default ContactInformationBox