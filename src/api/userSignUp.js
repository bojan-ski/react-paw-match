// firebase/firestore funcs
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const userSignUp = async (username, email, password) => {
    try {
        const auth = getAuth()
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const newUser = userCredentials.user

        updateProfile(auth.currentUser, {
            displayName: username
        })

        const userCredentialsCopy = {
            username,
            email,
            timestamp: serverTimestamp()
        }

        await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

        //success message
        toast.success('Vaš nalog je kreiran')

        return true
    } catch (error) {
        console.log(error);
        //error message
        toast.error('Greška prilikom kreiranja Vašeg nalog, molimo Vas probajte ponovo.')

        return false
    }
}

export default userSignUp