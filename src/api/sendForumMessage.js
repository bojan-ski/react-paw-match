// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config.js";
// utils funcs
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate.js";
// toastify
import { toast } from "react-toastify";


const sendForumMessage = async (userForumMessage) => {
    try {
        const userForumMessageCopy = {
            ...userForumMessage,
            timestamp: serverTimestamp(),
            messageCreated: getCurrentTimeAndDate()
        }

        await addDoc(collection(db, 'forumMessages'), userForumMessageCopy)

        return true
    } catch (error) {
        // error message
        console.error(error);
        toast.error('Greška prilikom objavljivanja Vaše poruke, molimo Vas probajte ponovo')

        return false
    }
}

export default sendForumMessage