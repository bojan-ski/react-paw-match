// firebase/firestore funcs
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const userSignIn = async (email, password) => {
    try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)

        //success message
        console.log('user logged in');

        return true
    } catch (error) {
        //error message
        // console.log('There was an error, please try again')
        console.log(error);

        return false
    }
}

export default userSignIn