// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config.js";
// utils funcs
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate.js";
// toastify
import { toast } from "react-toastify";


const publishNewListing = async (listingFormData, petProfileImageUrl, petImagesGalleryUrls) => {
    try {
        const listingFormDataCopy = {
            ...listingFormData,
            petProfileImageUrl,
            petImagesGalleryUrls,
            timestamp: serverTimestamp(),
            listingCreated: getCurrentTimeAndDate()
        }

        delete listingFormDataCopy.petProfileImage
        delete listingFormDataCopy.petImagesGallery

        // console.log(listingFormDataCopy);

        await addDoc(collection(db, 'listings'), listingFormDataCopy)

        return true
    } catch (error) {
        // error message
        console.error(error);
        toast.error('Greška prilikom objavljivanja Vašeg oglasa, molimo Vas probajte ponovo')

        return false
    }
}

export default publishNewListing