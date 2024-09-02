// firebase/firestore funcs
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../firebase.config";


const fetchUserBookmarkedPetListingsFromFirebase = async () => {
    const auth = getAuth()

    if (!auth.currentUser) return null

    try {
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        const bookmarkedPetListingsCollectionRef = collection(userDocRef, 'bookmarkedPetListings');

        const querySnapshot = await getDocs(bookmarkedPetListingsCollectionRef);

        // Extract data from each document
        const bookmarkedPetListings = querySnapshot.docs.map(doc => ({
            bookmarkedPetListingID: doc.id,
            bookmarkedPetListingDetails: doc.data()
        }));

        // console.log(bookmarkedPetListings);       
        return bookmarkedPetListings;
    } catch (error) {
        // error message
        console.log(error);

        return null
    }
}

export default fetchUserBookmarkedPetListingsFromFirebase