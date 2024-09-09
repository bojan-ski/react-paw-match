// api func
import sendForumMessage from "../../api/sendForumMessage"
// modal
import ReplyToForumMessageModal from "../../modal/ReplyToForumMessageModal"
// utils func 
import closeModalOnSubmit from '../../utils/closeModalOnSubmit'
// toastify
import { toast } from "react-toastify"


const ReplyToForumMessage = ({ userProfileDetails, otherUserMessage, fetchForumMessages }) => {
    const handleReplyMessage = async e => {
        e.preventDefault()

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

            //re-fetch forum messages 
            fetchForumMessages()
        }
    }


    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#replyToForumMessageModal">
                Odgovori
            </button>

            <ReplyToForumMessageModal otherUserMessage={otherUserMessage} handleReplyMessage={handleReplyMessage}  />
        </>
    )
}

export default ReplyToForumMessage