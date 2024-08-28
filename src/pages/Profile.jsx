import { useState } from "react"
// components
import PageHeader from "../components/PageHeader"
import ProfilePageOptions from "../components/profilePage/profilePageOptions";
import PostNewPetListing from "../components/profilePage/PostNewPetListing";
import MyPetListings from "../components/profilePage/MyPetListings";
import BookmarkedPetListings from "../components/profilePage/BookmarkedPetListings";


const Profile = () => {
  const [selectedProfilePageOption, setSelectedProfilePageOption] = useState('new-listing')
  // console.log(selectedProfilePageOption);

  return (
    <div className="profile-page">

      <PageHeader title='Profile' />

      <div className="container">

        <ProfilePageOptions selectedProfilePageOption={selectedProfilePageOption} setSelectedProfilePageOption={setSelectedProfilePageOption} />

        {selectedProfilePageOption == 'new-listing' && <PostNewPetListing />}

        {selectedProfilePageOption == 'my-listings' && <MyPetListings />}

        {selectedProfilePageOption == 'bookmarked-listings' && <BookmarkedPetListings />}
      </div>
    </div>
  )
}

export default Profile