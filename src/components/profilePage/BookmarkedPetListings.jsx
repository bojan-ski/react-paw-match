import { useLoaderData } from 'react-router-dom'
// components
import SectionHeader from '../SectionHeader';
import PetListingGridViewCard from '../PetListingGridViewCard';
import { useState } from 'react';


const BookmarkedPetListings = () => {
  const { userBookmarkedPetListings } = useLoaderData()
  // console.log(userBookmarkedPetListings);

  const [userBookmarkedPetListingsList, setUserBookmarkedPetListingsList] = useState(userBookmarkedPetListings)

  return (
    <section className='bookmarked-pet-listings'>
      {/* {userBookmarkedPetListings.map(item => console.log(item.bookmarkedPetListingDetails.petListingDetails))} */}

      {userBookmarkedPetListingsList && userBookmarkedPetListingsList.length > 0 ? (
        <>
          {/* new listing header */}
          <SectionHeader title='Moji omiljeni oglasi' marginBot='mb-4' />

          <div className='row'>
            {userBookmarkedPetListingsList.map(userBookmarkedPetListing => {
              // console.log(userBookmarkedPetListing);
              // console.log(userBookmarkedPetListing.bookmarkedPetListingID);
              // console.log(userBookmarkedPetListing.bookmarkedPetListingDetails.petListingID);
              // console.log(userBookmarkedPetListing.bookmarkedPetListingDetails.petListingDetails);
              return <>
                <PetListingGridViewCard key={userBookmarkedPetListing.bookmarkedPetListingID} petPostedListingID={userBookmarkedPetListing.bookmarkedPetListingDetails.petListingID} petPostedListingData={userBookmarkedPetListing.bookmarkedPetListingDetails.petListingDetails} />
              </>
            })}
          </div>
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


