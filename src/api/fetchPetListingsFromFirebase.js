// firebase/firestore funcs
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify"


const fetchPetListingsFromFirebase = async () => {
    try {
        const q = query(collection(db, 'listings'), orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let allPostedListings = []

        querySnapshot.forEach((document) => {
            return allPostedListings.push({
                id: document.id,
                data: document.data()
            })
        })

        return allPostedListings
    } catch (error) {
        //error message
        toast.error('Greška prilikom prikazivanja svi objavljenih oglasa, molimo Vas probajte ponovo')
    }
}

export default fetchPetListingsFromFirebase