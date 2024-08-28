// firebase/firestore funcs
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'


const userResetPassword = async (enteredEmail) => {
    try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, enteredEmail)

        // success message
        console.log('Proverite Vašu elektronsku poštu radi promere šifre');

        return true
    } catch (error) {
        // error message
        // console.log('There was an error, please try again')
        console.error(error)

        return false
    }
}

export default userResetPassword