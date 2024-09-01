import { useNavigate } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// api func 
import deleteUploadedPetImageFromStorage from "../../api/deleteUploadedPetImageFromStorage.js"
//toastify
import { toast } from "react-toastify"


const DeletePetListing = ({ petListingID, petProfileImageUrl, petImagesGalleryUrls }) => {
    // console.log(petListingID);
    // console.log(petProfileImageUrl);  
    // console.log(petImagesGalleryUrls);  
    
    const navigate = useNavigate()

    const deleteUserPetListing = async (petListingID) => {
        // console.log(petListingID);

        if (window.confirm('Da li ste sigurni da želite da obriše Vaš oglas?')) {
            try {
                // delete pet profile image from storage
                deleteUploadedPetImageFromStorage(petProfileImageUrl)

                // delete pet image/images - gallery from storage
                Array.from(petImagesGalleryUrls).forEach(imageUrl => {
                    // console.log(imageUrl);                    
                    deleteUploadedPetImageFromStorage(imageUrl)
                })

                // delete listing from firebase
                await deleteDoc(doc(db, 'listings', petListingID))

                // success message after listing removal 
                toast.success('Uspešno ste obrisali Vaš oglas');

                // navigate user
                // setTimeout(() => window.location.href = '/nalog', 1500)
                setTimeout(() => navigate('/nalog'), 1500)
            } catch (error) {
                //error message
                toast.error('Greška prilikom uklanjanja Vašeg oglasa, molimo Vas probajte ponovo')
            }
        }
    }

    return (
        <button type="button" className="btn btn-danger fw-bold" onClick={() => deleteUserPetListing(petListingID)}>
            Obriši oglas
        </button>
    )
}

export default DeletePetListing