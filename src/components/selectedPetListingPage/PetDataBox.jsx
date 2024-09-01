const PetDataBox = ({ petData }) => {
    const { petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = petData

    return (
        <>
            <p className="mb-2 fw-bold text-muted">
                Godište:
                <span className="ms-2 text-dark capitalize">{petAge}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Rod:
                <span className="ms-2 text-dark capitalize">{petGender}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Težina:
                <span className="ms-2 text-dark capitalize">{petWeight}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Energija:
                <span className="ms-2 text-dark capitalize">{petEnergyLevel}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Dobar sa decom:
                <span className="ms-2 text-dark capitalize">{goodWithChildren}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Dobar sa ostalim kućnim ljubimcima:
                <span className="ms-2 text-dark capitalize">{goodWithOtherPets}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Specijalne potrebe:
                <span className="ms-2 text-dark capitalize">{specialNeeds}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Adresa:
                <span className="ms-2 text-dark capitalize">{petAddress}</span>
            </p>
            <p className="mb-2 fw-bold text-muted">
                Mesto:
                <span className="ms-2 text-dark capitalize">{petLocation}</span>
            </p>
        </>
    )
}

export default PetDataBox