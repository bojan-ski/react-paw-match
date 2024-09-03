import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
// components
import SectionHeader from '../SectionHeader';
import PetListingGridViewCard from '../PetListingGridViewCard';


const MyPetListings = () => {
  const { allUserPostedListings } = useLoaderData()
  // console.log(allUserPostedListings);

  const [userPostedPetListings, setUserPostedPetListings] = useState(allUserPostedListings)

  return (
    <section className='user-posted-listings'>
      {userPostedPetListings && userPostedPetListings.length > 0 ? (
        <>
          {/* new listing header */}
          <SectionHeader title='Moji oglasi' marginBot='mb-4' />

          <div className='row'>
            {userPostedPetListings.map(userPostedListing => <PetListingGridViewCard key={userPostedListing.id} petPostedListingID={userPostedListing.id} petPostedListingData={userPostedListing.data}/>)}
          </div>
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