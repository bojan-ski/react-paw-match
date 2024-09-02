// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const saveSelectedPetListingToFirebase = async (userID, petListingID, petListingDetails) => {
    // console.log(userID);
    // console.log(petListing);

    try {
        const petListingData = {
            petListingID,
            petListingDetails,
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);

        // Reference to the bookmarkedPetListings subcollection
        const bookmarkedPetListingsCollectionRef = collection(userDocRef, 'bookmarkedPetListings');

        // Add a new document to the bookmarkedPetListings subcollection
        await addDoc(bookmarkedPetListingsCollectionRef, petListingData);

        return true
    } catch (error) {
        console.log(error);
        // error message 
        toast.error('Greška prilikom obeležavanja oglasa, molimo Vas probajte ponovo')

        return false
    }
}

export default saveSelectedPetListingToFirebase