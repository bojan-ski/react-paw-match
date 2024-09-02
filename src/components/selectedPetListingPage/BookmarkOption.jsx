import { useNavigate } from "react-router-dom";
// api func
import saveSelectedPetListingToFirebase from '../../api/saveSelectedPetListingToFirebase'
import { toast } from "react-toastify";



const BookmarkOption = ({ userProfileDetails, selectedPetListingDetails }) => {
  // console.log(userProfileDetails);
  // console.log(selectedPetListingDetails);

  const navigate = useNavigate()

  let isBookmarked = false;

  // const { bookmarkedProducts } = useLoaderData()
  // console.log(bookmarkedProducts);    

  // const [bookmarkedProductsList, setBookmarkedProductsList] = useState(bookmarkedProducts)

  const handleSaveBookmarkProduct = async () => {
    console.log('handleSaveBookmarkProduct');

    if (!userProfileDetails.userID) return navigate('/login')

    const response = await saveSelectedPetListingToFirebase(userProfileDetails.userID, selectedPetListingDetails)

    if (response) {
      // success message
      toast.success('Oglas je sačuvan')

      // const updatedBookmarkedProductsList = await fetchBookmarkedProductsToFirebase()
      // setBookmarkedProductsList(updatedBookmarkedProductsList)
    }
  }

  const handleRemoveBookmarkProduct = async (id) => {
    console.log('handleRemoveBookmarkProduct');


  }

  return (
    <>
      {isBookmarked ? (
        <button className="btn btn-info" onClick={() => handleRemoveBookmarkProduct(id)}>
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