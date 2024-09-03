import { useEffect } from 'react';
// firebase func
import { collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
// custom hook
import useFetchProfilePageData from '../../hooks/useFetchProfilePageData';
// components
import SectionHeader from '../SectionHeader';
import PetListingGridViewCard from '../PetListingGridViewCard';
import PaginationApi from '../PaginationApi';


const BookmarkedPetListings = ({ userProfileDetails }) => {
  const itemsPerPage = 1;
  const providedQuery = [
    collection(db, `users/${userProfileDetails.userID}/bookmarkedPetListings`),
  ]
  const { listings: userBookmarkedPetListingsList, fetchListings, page } = useFetchProfilePageData(itemsPerPage, providedQuery);

  // Fetch the first page on mount
  useEffect(() => {
    console.log('BookmarkedPetListings component - useEffect');

    fetchListings();
  }, [])


  return (
    <section className='bookmarked-pet-listings'>
      {userBookmarkedPetListingsList && userBookmarkedPetListingsList.length > 0 ? (
        <>
          {/* new listing header */}
          <SectionHeader title='Moji omiljeni oglasi' marginBot='mb-4' />

          <div className='row'>
            {userBookmarkedPetListingsList.map(userBookmarkedPetListing => <PetListingGridViewCard key={userBookmarkedPetListing.id} petPostedListingID={userBookmarkedPetListing.data.petListingID} petPostedListingData={userBookmarkedPetListing.data.petListingDetails} />)}
          </div>

          <PaginationApi itemsPerPage={itemsPerPage} listings={userBookmarkedPetListingsList} fetchListings={fetchListings} page={page}/>
        </>
      ) : (
        <h2 className="fw-bold text-center">
          Trenutno nemate obeležilih oglasa
        </h2>
      )}

    </section>
  )
}

export default BookmarkedPetListings


