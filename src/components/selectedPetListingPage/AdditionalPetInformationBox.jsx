const AdditionalPetInformationBox = ({ title, description }) => {
    return (
        <>
            <h6 className="fw-bold">
                {title}
            </h6>
            <p className="mb-0">
                {description}
            </p>
        </>
    )
}

export default AdditionalPetInformationBox