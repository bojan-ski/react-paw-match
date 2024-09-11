// firebase funcs
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const userGoogleOAuth = async () => {
    try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            await setDoc(doc(db, 'users', user.uid), {
                username: user.displayName,
                email: user.email,
                timestamp: serverTimestamp()
            })            
        } 

        return true
    } catch (error) {
        // console.log(error);
        //error message
        toast.error('Greška prilikom korišćenja Google OAuth, molimo Vas probajte ponovo.')

        return false
    }
}

export default userGoogleOAuth