import { useState } from "react"
// context
import { useGlobalContext } from "../context";
// components
import PageHeader from "../components/PageHeader"
import ProfilePageOptions from "../components/profilePage/profilePageOptions";
import PostNewPetListing from "../components/profilePage/PostNewPetListing";
import MyPetListings from "../components/profilePage/MyPetListings";
import BookmarkedPetListings from "../components/profilePage/BookmarkedPetListings";
import UserNotLoggedInMessage from "../components/UserNotLoggedInMessage";


const Profile = () => {
  const { userProfileDetails } = useGlobalContext()
  const [selectedProfilePageOption, setSelectedProfilePageOption] = useState('my-listings')
  // console.log(selectedProfilePageOption);

  return (
    <div className="profile-page">
      <div className="container">

        {userProfileDetails.userName ? (
          <>
            <PageHeader title={`Pozdrav 👋 ${userProfileDetails.userName.toUpperCase()}`} />

            <ProfilePageOptions selectedProfilePageOption={selectedProfilePageOption} setSelectedProfilePageOption={setSelectedProfilePageOption} />

            {selectedProfilePageOption == 'my-listings' && <MyPetListings userProfileDetails={userProfileDetails} />}

            {selectedProfilePageOption == 'new-listing' && <PostNewPetListing userProfileDetails={userProfileDetails} />}

            {selectedProfilePageOption == 'bookmarked-listings' && <BookmarkedPetListings userProfileDetails={userProfileDetails} />}
          </>
        ) : (
          <UserNotLoggedInMessage />
        )}
      </div>
    </div>
  )
}

export default Profile