// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase.config";
import { toast } from "react-toastify";


const removeBookmarkedPetListingFromFirebase = async (userID, docID) => {
      console.log(userID);
      console.log(docID);
    
      try {
        // Reference to the document in the bookmarkedProducts subcollection
        const bookmarkedPetListingsCollectionRef = doc(db, `users/${userID}/bookmarkedPetListings/${docID}`);
        
        // Delete the document
        await deleteDoc(bookmarkedPetListingsCollectionRef);
        
        return true
      } catch (error) {
        // error message
        console.log(error);
        toast.error('Greška prilikom uklanjanja oglasa, molimo Vas probajte ponovo')

        return false
      }  
}

export default removeBookmarkedPetListingFromFirebase