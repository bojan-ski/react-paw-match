// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// toastify
import { toast } from "react-toastify";


const DeleteForumMessage = ({ forumMessageID }) => {
    const handleDeleteForumMessage = async (forumMessageID) => {
        console.log('handleDeleteForumMessage');

        if (window.confirm('Da li ste sigurni da želite da obriše Vašu poruku?')) {
            try {
                // delete forum message from firebase
                const response = await deleteDoc(doc(db, 'forumMessages', forumMessageID))

                if (response) {
                    // success message
                    toast.success('Uspešno ste obrisali Vaš oglas');
                }
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