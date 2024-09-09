import { useEffect, useState } from "react";
// custom hook
import useFetchPetListingsPageData from "../hooks/useFetchPetListingsPageData";
// components
import PageHeader from "../components/PageHeader";
import SearchAndFilterOptions from "../components/petListingsPage/SearchAndFilterOptions";
import PetListingGridViewCard from "../components/PetListingGridViewCard";
import PaginationApi from "../components/PaginationApi";
import NoDataAvailableMessage from "../components/NoDataAvailableMessage";


const PetListings = () => {
    const itemsPerPage = 3;
    const { listings, fetchListings, page } = useFetchPetListingsPageData(itemsPerPage);

    // Fetch the first page on mount
    useEffect(() => {
        console.log('Pet Listings page - useEffect');

        fetchListings();
    }, [])

    // search & filter feature - state
    const [conditions, setConditions] = useState()

    return (
        <div className="pet-listings-page">

            <PageHeader title='Pet Listings' />

            <div className="container">

                <SearchAndFilterOptions fetchListings={fetchListings} conditions={conditions} setConditions={setConditions} />

                {listings && listings.length > 0 ? (
                    <>
                        <section className="pet-listings-list mb-3">
                            <div className='row'>
                                {listings.map(petListing => <PetListingGridViewCard key={petListing.id} petPostedListingID={petListing.id} petPostedListingData={petListing.data} />)}
                            </div>
                        </section>

                        <PaginationApi itemsPerPage={itemsPerPage} data={listings} fetchData={fetchListings} page={page} conditions={conditions} />
                    </>
                ) : (
                    <NoDataAvailableMessage text='Trenutno nema postavljenih oglasa'/>
                )}
            </div>
        </div>
    )
}

export default PetListings