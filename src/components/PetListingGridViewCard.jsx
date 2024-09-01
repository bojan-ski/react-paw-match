import { Link } from "react-router-dom"

const PetListingGridViewCard = ({ petPostedListing }) => {
    // console.log(petPostedListing);
    const { petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = petPostedListing.data
    
    return (
        <div className="col-12 col-md-4 col-lg-3 mb-4">

            <Link to={`${petPostedListing.id}`} className="text-dark">
                <div className="card-details rounded rounded-3 p-2">

                    <div className="card-details-header text-center mb-2">
                        <img src={petProfileImageUrl} alt={petBread} className="img-fluid rounded rounded-3" />
                    </div>

                    <div className="card-details-body mb-3">
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