const PetProfileImageBox = ({ petProfileImageUrl, petBread }) => {
    return (
        <img src={petProfileImageUrl} alt={petBread} className="img-fluid rounded rounded-3" />
    )
}

export default PetProfileImageBox