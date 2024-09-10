import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// api func
import fetchSelectedPetListingDetailsFromFirebase from "../api/fetchSelectedPetListingDetailsFromFirebase";
import fetchUserBookmarkedPetListingsFromFirebase from "../api/fetchUserBookmarkedPetListingsFromFirebase";
// context
import { useGlobalContext } from "../context";
// components
import BackButton from "../components/BackButton";
import PetProfileImageBox from "../components/selectedPetListingPage/PetProfileImageBox";
import PetDataBox from "../components/selectedPetListingPage/PetDataBox";
import AdditionalPetInformationBox from "../components/selectedPetListingPage/AdditionalPetInformationBox";
import ContactInformationBox from "../components/selectedPetListingPage/ContactInformationBox";
import PetImagesGallery from "../components/selectedPetListingPage/PetImagesGallery";
import SelectedPetImageModal from "../modal/SelectedPetImageModal";
import DeletePetListing from "../components/selectedPetListingPage/DeletePetListing";
import BookmarkOption from "../components/selectedPetListingPage/BookmarkOption";


// LOADER
export const loader = async ({ params }) => {
    const selectedPetListingDetails = await fetchSelectedPetListingDetailsFromFirebase(params.id)
    // console.log(selectedPetListingDetails);

    const userBookmarkedPetListings = await fetchUserBookmarkedPetListingsFromFirebase()
    // console.log(userBookmarkedPetListings);    

    console.log('Selected Pet Listing page - LOADER');
    return { selectedPetListingDetails, userBookmarkedPetListings }
}

const SelectedPetListing = () => {
    const { selectedPetListingDetails, userBookmarkedPetListings } = useLoaderData()
    // console.log(selectedPetListingDetails);
    const { userRef, petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = selectedPetListingDetails

    const { userProfileDetails } = useGlobalContext()
    const params = useParams()   

    const [petImageSrc, setPetImageSrc] = useState('')

    let backPath = window.location.pathname.split('/').includes('nalog') ? '/nalog' : '/oglasi';

    return (
        <div className="selected-pet-listing-page">

            <div className="container">

                <section className="mb-5 d-flex align-items-center justify-content-between">
                    <BackButton backPath={backPath} />

                    {userProfileDetails.userID == userRef ? (
                        <>
                            <DeletePetListing petListingID={params.id} petProfileImageUrl={petProfileImageUrl} petImagesGalleryUrls={petImagesGalleryUrls} />
                        </>
                    ) : (
                        <>
                            <BookmarkOption userProfileDetails={userProfileDetails} userBookmarkedPetListings={userBookmarkedPetListings} petListingID={params.id} selectedPetListingDetails={selectedPetListingDetails} />
                        </>
                    )}
                </section>

                <section>
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 mb-4 pet-profile-img">
                            <PetProfileImageBox petProfileImageUrl={petProfileImageUrl} petBread={petBread} />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <PetDataBox petData={selectedPetListingDetails} />
                        </div>

                        {/* row item 3 */}
                        {specialNeeds === 'da' && (
                            <div className="col-12 pb-4 mb-4 border-bottom">
                                <AdditionalPetInformationBox title='Specijalne potrebe - opis:' description={specialNeedsDescription} />
                            </div>
                        )}

                        {/* row item 4 */}
                        <div className="col-12 pb-4 mb-4 border-bottom">
                            <AdditionalPetInformationBox title='Dodatne informacije:' description={petDescription} />
                        </div>

                        {/* row item 5 */}
                        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center mb-4 pb-4 pb-lg-0 border-bottom">
                            <ContactInformationBox contactFullName={contactFullName} contactEmailAddress={contactEmailAddress} contactPhoneNumber={contactPhoneNumber} />
                        </div>

                        {/* row item 6 */}
                        <div className="col-12 col-lg-7 mb-4">
                            <h6 className="text-center text-muted mb-3">
                                Kliknite na sliku radi bolje preglednosti
                            </h6>

                            {/* Pet Images Gallery - component */}
                            <PetImagesGallery imageUrls={petImagesGalleryUrls} setImageSrc={setPetImageSrc} />

                            {/* SelectedPetImageModal - modal */}
                            <SelectedPetImageModal imageSrc={petImageSrc} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SelectedPetListing