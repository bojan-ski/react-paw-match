import { useLoaderData } from 'react-router-dom'
// components
import SectionHeader from '../SectionHeader';
import PetListingGridViewCard from '../PetListingGridViewCard';


const MyPetListings = () => {
  const allUserPostedListings = useLoaderData()
  // console.log(allUserPostedListings);

  return (
    <section className='user-posted-listings'>
      {allUserPostedListings && allUserPostedListings.length > 0 ? (
        <>
          {/* new listing header */}
          <SectionHeader title='Moji oglasi' marginBot='mb-4'/>

          <div className='row'>
            {allUserPostedListings.map(userPostedListing => <PetListingGridViewCard key={userPostedListing.id} petPostedListing={userPostedListing} />)}
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