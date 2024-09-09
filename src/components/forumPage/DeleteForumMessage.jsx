// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// toastify
import { toast } from "react-toastify";


const DeleteForumMessage = ({ forumMessageID, fetchForumMessages }) => {
    const handleDeleteForumMessage = async (forumMessageID) => {
        // console.log('handleDeleteForumMessage');

        if (window.confirm('Da li ste sigurni da želite da obriše Vašu poruku?')) {
            try {
                // delete forum message from firebase
                await deleteDoc(doc(db, 'forumMessages', forumMessageID))

                // success message
                toast.success('Uspešno ste obrisali Vaš oglas');

                //re-fetch forum messages 
                fetchForumMessages()
            } catch (error) {
                console.log(error);
                //error message
                toast.error('Greška prilikom uklanjanja Vaše poruke, molimo Vas probajte ponovo')

                return
            }
        }
    }


    return (
        <button className="btn btn-danger" onClick={() => handleDeleteForumMessage(forumMessageID)}>
            Obriši
        </button>
    )
}

export default DeleteForumMessage