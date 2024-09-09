// context
import { useGlobalContext } from "../../context"
// api func
import sendForumMessage from "../../api/sendForumMessage"
// components
import FormInput from "../FormInput"
// toastify
import { toast } from "react-toastify"


const SendMessageForumForm = ({ fetchForumMessages }) => {
    const { userProfileDetails } = useGlobalContext()
    // console.log(userProfileDetails);

    const handleSendMessage = async e => {
        e.preventDefault()
        // console.log(e.target.elements[0].value.trim());

        if (e.target.elements[0].value.trim() == '') return toast.warning('Molimo Vas da unesete validnu poruku.')

        const userForumMessage = {
            userRef: userProfileDetails.userID,
            messageCreatedBy: userProfileDetails.userName,
            forumMessage: e.target.elements[0].value.trim()
        }

        const response = await sendForumMessage(userForumMessage)

        if (response) {
            toast.success('Vaša poruka je objavljena')
            e.target.elements[0].value = ''

            //re-fetch forum messages 
            fetchForumMessages()
        }
    }


    return (
        <section className="send-message-form mb-4 pb-4 border-bottom">
            <form className="bg-white p-4 rounded-4" onSubmit={handleSendMessage}>
                <FormInput label='Vasa poruka' name="forumMessage" type='text' required={true} />

                <button type="submit" className="btn btn-primary">
                    Pošalji
                </button>
            </form>
        </section>
    )
}

export default SendMessageForumForm