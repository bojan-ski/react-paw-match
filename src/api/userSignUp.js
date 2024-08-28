// firebase/firestore funcs
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"

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
        console.log('account created');

        return true
    } catch (error) {
        //error message
        console.log(error);

        return false
    }
}

export default userSignUp