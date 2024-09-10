import { useEffect } from 'react';
// firebase func
import { collection, where } from 'firebase/firestore';
import { db } from '../../firebase.config';
// custom hook
import useFetchProfilePageData from '../../hooks/useFetchProfilePageData';
// components
import SectionHeader from '../SectionHeader';
import PetListingGridViewCard from '../PetListingGridViewCard';
import PaginationApi from '../PaginationApi';


const MyPetListings = ({ userProfileDetails }) => {
  const itemsPerPage = 6;
  const providedQuery = [
    collection(db, 'listings'),
    where('userRef', '==', userProfileDetails.userID),
  ]
  const { listings: userPostedPetListings, fetchListings, page } = useFetchProfilePageData(itemsPerPage, providedQuery);

  // Fetch the first page on mount
  useEffect(() => {
    console.log('MyPetListings component - useEffect');

    fetchListings();
  }, [])


  return (
    <section className='user-posted-listings'>
      {userPostedPetListings && userPostedPetListings.length > 0 ? (
        <>
          {/* new listing header */}
          <SectionHeader title='Moji oglasi' marginBot='mb-4' />

          <div className='row'>
            {userPostedPetListings.map(userPostedListing => <PetListingGridViewCard key={userPostedListing.id} petPostedListingID={userPostedListing.id} petPostedListingData={userPostedListing.data} />)}
          </div>

          <PaginationApi itemsPerPage={itemsPerPage} data={userPostedPetListings} fetchData={fetchListings} page={page}/>
        </>
      ) : (
        <h2 className="fw-bold text-center">
          Trenutno nemate postavljenih oglasa
        </h2>
      )}
    </section>
  )
}

export default MyPetListings