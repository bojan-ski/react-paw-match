// api func 
import sendForumMessage from "../api/sendForumMessage"
// components
import FormInput from "../components/FormInput"
import OtherUserMessage from "../components/forumPage/OtherUserMessage"
// utils func
import closeModalOnSubmit from "../utils/closeModalOnSubmit"
// toastify
import { toast } from "react-toastify"


const ReplyToForumMessageModal = ({ userProfileDetails, otherUserMessage }) => {
    const handleReplyMessage = async e => {
        e.preventDefault()
        // console.log(e.target.elements[0].value.trim());

        if (e.target.elements[0].value.trim() == '') return toast.warning('Molimo Vas da unesete validnu poruku.')

        const userForumMessage = {
            userRef: userProfileDetails.userID,
            messageCreatedBy: userProfileDetails.userName,
            otherUserMessage,
            forumMessage: e.target.elements[0].value.trim()
        }

        const response = await sendForumMessage(userForumMessage)

        if (response) {
            toast.success('Vaša poruka je objavljena')
            e.target.elements[0].value = ''

            // close Modal on Submit
            closeModalOnSubmit('#replyToForumMessageModal')
        }
    }

    return (
        <div className="modal fade" id="replyToForumMessageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="replyToForumMessageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">

                <div className="modal-content">
                    <section className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </section>

                    <section className="modal-body">
                        <OtherUserMessage message={otherUserMessage} />

                        <form className="bg-white" onSubmit={handleReplyMessage}>
                            <FormInput label='Vasa poruka' name="forumMessage" type='text' required={true} />

                            <button type="submit" className="btn btn-primary">
                                Pošalji
                            </button>
                        </form>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default ReplyToForumMessageModal