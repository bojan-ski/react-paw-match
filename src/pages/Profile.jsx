import { useState } from "react"
// api func
import fetchUserListingsFromFirebase from "../api/fetchUserListingsFromFirebase";
// context
import { useGlobalContext } from "../context";
// components
import PageHeader from "../components/PageHeader"
import ProfilePageOptions from "../components/profilePage/profilePageOptions";
import PostNewPetListing from "../components/profilePage/PostNewPetListing";
import MyPetListings from "../components/profilePage/MyPetListings";
import BookmarkedPetListings from "../components/profilePage/BookmarkedPetListings";


// LOADER
export const loader = async () => {
  const allUserPostedListings = await fetchUserListingsFromFirebase()
  // console.log(allUserPostedListings);
  console.log('Profile page - LOADER');
  return allUserPostedListings
}

const Profile = () => {
  const { userProfileDetails } = useGlobalContext()
  const [selectedProfilePageOption, setSelectedProfilePageOption] = useState('my-listings')
  // console.log(selectedProfilePageOption);

  return (
    <div className="profile-page">
      <div className="container">

        {userProfileDetails.userName ? (
          <>
            <PageHeader title={`👋 ${userProfileDetails.userName}`} />

            <ProfilePageOptions selectedProfilePageOption={selectedProfilePageOption} setSelectedProfilePageOption={setSelectedProfilePageOption} />

            {selectedProfilePageOption == 'my-listings' && <MyPetListings />}

            {selectedProfilePageOption == 'new-listing' && <PostNewPetListing userProfileDetails={userProfileDetails} />}

            {selectedProfilePageOption == 'bookmarked-listings' && <BookmarkedPetListings />}
          </>
        ) : (
          <div className="text-center py-5">
            <h1 className="fw-bold">
              Trenutno niste prijavljeni
            </h1>
            <h3 className="text-muted mb-5">
              Molimo Vas prijavite se
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile