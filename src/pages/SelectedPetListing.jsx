import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// api func
import fetchSelectedPetListingDetailsFromFirebase from "../api/fetchSelectedPetListingDetailsFromFirebase";
// context
import { useGlobalContext } from "../context";
// components
import PageHeader from "../components/PageHeader";
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
    const selectedPetListingDetails = await (fetchSelectedPetListingDetailsFromFirebase(params.id))
    // console.log(selectedPetListingDetails);
    console.log('Selected Pet Listing page - LOADER');
    return selectedPetListingDetails
}

const SelectedPetListing = () => {
    const selectedPetListingDetails = useLoaderData()
    // console.log(selectedPetListingDetails);
    const { userRef, petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = selectedPetListingDetails

    const { userProfileDetails } = useGlobalContext()
    // console.log(userProfileDetails.userID);
    const params = useParams()
    // console.log(params.id);    

    const [petImageSrc, setPetImageSrc] = useState('')

    let backPath = window.location.pathname.split('/').includes('nalog') ? '/nalog' : '/oglasi';

    // console.log(userProfileDetails.userID == userRef);


    return (
        <div className="selected-pet-listing-page">

            <PageHeader title='Selected Pet Listing' />

            <div className="container">

                <section className="mb-5 d-flex align-items-center justify-content-between">
                    <BackButton backPath={backPath} />

                    {userProfileDetails.userID == userRef ? (
                        <>
                            <DeletePetListing petListingID={params.id} petProfileImageUrl={petProfileImageUrl} petImagesGalleryUrls={petImagesGalleryUrls} />
                        </>
                    ) : (
                        <>
                            <BookmarkOption />
                        </>
                    )}
                </section>

                <section className="">
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
                        <div className="col-12 pb-4 mb-4 border-bottom">
                            <ContactInformationBox contactFullName={contactFullName} contactEmailAddress={contactEmailAddress} contactPhoneNumber={contactPhoneNumber} />
                        </div>

                        {/* row item 6 */}
                        <div className="col-12 mb-4">
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