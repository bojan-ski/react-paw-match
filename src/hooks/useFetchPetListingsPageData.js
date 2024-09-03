import { useState } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const useFetchPetListingsPageData = (itemsPerPage) => {
    const [listings, setListings] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [page, setPage] = useState(0);

    const fetchListings = async (pageNumber = 0, conditions = '', reset = false) => {
        try {
            let additionalQueryParams = [
                collection(db, 'listings'),
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage),
            ]

            const { petType, petGender, petEnergyLevel, goodWithChildren, goodWithOtherPets, specialNeeds, petAge } = conditions

            if (petType && petType !== "--") {
                additionalQueryParams.push(where('petType', '==', petType));
            }
            if (petGender && petGender !== "--") {
                additionalQueryParams.push(where('petGender', '==', petGender));
            }
            if (petEnergyLevel && petEnergyLevel !== "--") {
                additionalQueryParams.push(where('petEnergyLevel', '==', petEnergyLevel));
            }
            if (goodWithChildren && goodWithChildren !== "--") {
                additionalQueryParams.push(where('goodWithChildren', '==', goodWithChildren));
            }
            if (goodWithOtherPets && goodWithOtherPets !== "--") {
                additionalQueryParams.push(where('goodWithOtherPets', '==', goodWithOtherPets));
            }
            if (specialNeeds && specialNeeds !== "--") {
                additionalQueryParams.push(where('specialNeeds', '==', specialNeeds));
            }
            if (petAge && petAge !== "--") {
                additionalQueryParams.push(where('petAge', '==', petAge));
            }

            // console.log(additionalQueryParams);

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    ...additionalQueryParams
                );

                // Reset the last visible document when looping back
                setLastVisible(null);
            } else {
                // Fetch the next set based on the last visible document
                if (lastVisible) {
                    q = query(
                        ...additionalQueryParams,
                        startAfter(lastVisible),
                    );
                }
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                fetchListings(0, conditions, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            // Replace the listings with the new set of documents for the current page
            setListings(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            console.log(error);

            toast.error('Greška prilikom prikazivanja svi objavljenih oglasa, molimo Vas probajte ponovo')
        }
    };

    return { listings, fetchListings, page };
}

export default useFetchPetListingsPageData