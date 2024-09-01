import { useLoaderData } from "react-router-dom";
// api func
import fetchSelectedPetListingDetailsFromFirebase from "../api/fetchSelectedPetListingDetailsFromFirebase";
// components
import PageHeader from "../components/PageHeader";
import BackButton from "../components/BackButton";
import PetProfileImageBox from "../components/selectedPetListingPage/PetProfileImageBox";


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

    const { petProfileImageUrl, petType, petBread, petGender, petAge, petWeight, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, specialNeedsDescription, petDescription, petAddress, petLocation, petImagesGalleryUrls, contactFullName, contactPhoneNumber, contactEmailAddress } = selectedPetListingDetails

    let backPath = window.location.pathname.split('/').includes('nalog') ? '/nalog' : '/';

    return (
        <div className="selected-pet-listing-page">

            <PageHeader title='Selected Pet Listing' />

            <div className="container">

                <section className="mb-5 d-flex align-items-center justify-content-between">
                    <BackButton backPath='/nalog' />

                    <h3 className="fw-bold capitalize">
                        {petType}
                    </h3>
                </section>

                <section>
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-6 mb-4">
                            <PetProfileImageBox petProfileImageUrl={petProfileImageUrl} petBread={petBread}/>
                        </div>

                        {/* row item 2 */}
                        <div className="col-6 mb-4">

                        </div>

                        {/* row item 3 */}
                        {specialNeeds === 'da' && (
                            <div className="col-12 pb-4 mb-4 border-bottom">
                                <h6 className="fw-bold">
                                    Specijalne potrebe:
                                </h6>
                                <p className="mb-0">
                                    {specialNeedsDescription}
                                </p>
                            </div>
                        )}

                        {/* row item 4 */}
                        <div className="col-12 pb-4 mb-4 border-bottom">
                            <h6 className="fw-bold">
                                Dodatne informacije:
                            </h6>
                            <p className="mb-0">
                                {petDescription}
                            </p>
                        </div>

                        {/* row item 5 */}
                        <div className="col-12 pb-4 mb-4 border-bottom">
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
                        </div>

                        {/* row item 6 */}
                        <div className="col-12 mb-4">
                            <h6 className="text-center text-muted mb-3">
                                Kliknite na sliku radi bolje preglednosti
                            </h6>

                            {/* ImgsGallery - component */}
                            {/* <ImagesGallery imageUrls={imageUrls} setImageSrc={setImageSrc} /> */}

                            {/* SelectedImageModal - modal */}
                            {/* <SelectedImageModal imageSrc={imageSrc} /> */}
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default SelectedPetListing