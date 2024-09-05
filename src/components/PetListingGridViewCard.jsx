import { Link } from "react-router-dom"


const PetListingGridViewCard = ({ petPostedListingID, petPostedListingData }) => {
    // console.log(petPostedListingID);
    // console.log(petPostedListingData);
    const { petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = petPostedListingData
    
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">

            <Link to={`${petPostedListingID}`} className="text-dark">
                <div className="pet-listing-card-details rounded rounded-3 p-2">

                    <div className="pet-listing-card-details-header text-center mb-2">
                        <img src={petProfileImageUrl} alt={petBread} className="img-fluid rounded rounded-3" />
                    </div>

                    <div className="pet-listing-card-details-body mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0">
                                {petAge}
                            </p>
                            <p className="mb-0">
                                {petGender}
                            </p>
                        </div>
                        <h5 className="fw-bold capitalize">
                            {petBread}
                        </h5>
                        <h6>
                            {petLocation}
                        </h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PetListingGridViewCard