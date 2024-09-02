import { useLoaderData } from "react-router-dom";
// api func
import fetchPetListingsFromFirebase from "../api/fetchPetListingsFromFirebase";
// components
import PageHeader from "../components/PageHeader";
import PetListingGridViewCard from "../components/PetListingGridViewCard";


// LOADER
export const loader = async () => {
    const allPostedPetListings = await fetchPetListingsFromFirebase()
    // console.log(allPostedPetListings);
    console.log('Pet Listings page - LOADER');
    return allPostedPetListings
}

const PetListings = () => {
    const allPostedPetListings = useLoaderData()

    return (
        <div className="pet-listings-page">

            <PageHeader title='Pet Listings' />

            <div className="container">

                {allPostedPetListings && allPostedPetListings.length > 0 ? (
                    <div className='row'>
                        {allPostedPetListings.map(userPostedListing => <PetListingGridViewCard key={userPostedListing.id} petPostedListing={userPostedListing} />)}
                    </div>
                ) : (
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa
                    </h2>
                )}
            </div>
        </div>
    )
}

export default PetListings