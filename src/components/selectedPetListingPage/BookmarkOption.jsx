import { useState } from "react";
import { useNavigate } from "react-router-dom";
// api func
import saveSelectedPetListingToFirebase from '../../api/saveSelectedPetListingToFirebase'
import removeBookmarkedPetListingFromFirebase from "../../api/removeBookmarkedPetListingFromFirebase";
import fetchUserBookmarkedPetListingsFromFirebase from "../../api/fetchUserBookmarkedPetListingsFromFirebase";
// toastify
import { toast } from "react-toastify";


const BookmarkOption = ({ userProfileDetails, userBookmarkedPetListings, petListingID, selectedPetListingDetails }) => {
  // console.log(userProfileDetails);
  // console.log(userBookmarkedPetListings);
  // console.log(petListingID);
  // console.log(selectedPetListingDetails);

  const navigate = useNavigate()

  const [bookmarkedPetListingsList, setBookmarkedPetListingsList] = useState(userBookmarkedPetListings)
  // console.log(bookmarkedPetListingsList);


  const handleSaveBookmarkProduct = async () => {
    // console.log('handleSaveBookmarkProduct');

    if (!userProfileDetails.userID) return navigate('/prijava')

    const response = await saveSelectedPetListingToFirebase(userProfileDetails.userID, petListingID, selectedPetListingDetails)

    if (response) {
      const updatedBookmarkedPetListingsList = await fetchUserBookmarkedPetListingsFromFirebase()
      setBookmarkedPetListingsList(updatedBookmarkedPetListingsList)

      // success message
      toast.success('Oglas je sačuvan u listi omiljenih oglasa')
    }
  }

  const handleRemoveBookmarkProduct = async (id) => {
    // console.log('handleRemoveBookmarkProduct');    
    // console.log(id);

    const selectedBookmarkedPetListing = bookmarkedPetListingsList.filter(petListing => petListing.bookmarkedPetListingDetails.petListingID == id)
    // console.log(selectedBookmarkedPetListing);    
    // console.log(selectedBookmarkedPetListing[0].bookmarkedPetListingID);    

    const response = await removeBookmarkedPetListingFromFirebase(userProfileDetails.userID, selectedBookmarkedPetListing[0].bookmarkedPetListingID)

    if (response) {
      const updatedBookmarkedPetListingsList = await fetchUserBookmarkedPetListingsFromFirebase()
      setBookmarkedPetListingsList(updatedBookmarkedPetListingsList)

      // success message
      toast.success('Oglas je obrisan iz liste omiljenih oglasa')
    }
  }

  const isBookmarked = bookmarkedPetListingsList !== null && bookmarkedPetListingsList.some(bookmarkedPetListing => {
    // console.log(bookmarkedPetListing.bookmarkedPetListingDetails.petListingID);    
    // console.log(petListingID);          
    // console.log(bookmarkedPetListing.bookmarkedPetListingDetails.petListingID == petListingID)  
    return bookmarkedPetListing.bookmarkedPetListingDetails.petListingID == petListingID
  })

  return (
    <>
      {isBookmarked ? (
        <button className="btn btn-info" onClick={() => handleRemoveBookmarkProduct(petListingID)}>
          remove
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleSaveBookmarkProduct}>
          save
        </button>
      )}
    </>
  )
}

export default BookmarkOption