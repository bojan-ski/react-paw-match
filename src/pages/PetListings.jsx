import { useEffect, useState } from "react";
// custom hook
import usePostedPetListings from "../hooks/usePostedPetListings";
import useFetchPetListingsPageData from "../hooks/useFetchPetListingsPageData";
// components
import PageHeader from "../components/PageHeader";
import PetListingsFilterOption from "../components/petListingsPage/PetListingsFilterOption";
import PetListingGridViewCard from "../components/PetListingGridViewCard";
import PaginationApi from "../components/PaginationApi";


const PetListings = () => {
    const itemsPerPage = 3;
    // const { listings, fetchListings, page } = usePostedPetListings(itemsPerPage);
    const { listings, fetchListings, page } = useFetchPetListingsPageData(itemsPerPage);
    const [conditions, setConditions] = useState()

    // Fetch the first page on mount
    useEffect(() => {
        console.log('Pet Listings page - useEffect');

        fetchListings();
    }, [])

    return (
        <div className="pet-listings-page">

            <PageHeader title='Pet Listings' />

            <div className="container">

                <PetListingsFilterOption fetchListings={fetchListings} conditions={conditions} setConditions={setConditions}/>

                {listings && listings.length > 0 ? (
                    <>
                        <section className="pet-listings-list mb-3">
                            <div className='row'>
                                {listings.map(petListing => <PetListingGridViewCard key={petListing.id} petPostedListingID={petListing.id} petPostedListingData={petListing.data} />)}
                            </div>
                        </section>

                        <PaginationApi itemsPerPage={itemsPerPage} listings={listings} fetchListings={fetchListings} page={page} conditions={conditions}/>
                    </>
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