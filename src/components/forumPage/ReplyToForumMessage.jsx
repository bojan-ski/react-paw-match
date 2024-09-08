// modal
import ReplyToForumMessageModal from "../../modal/ReplyToForumMessageModal"


const ReplyToForumMessage = ({ userProfileDetails, otherUserMessage }) => {
    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#replyToForumMessageModal">
                Odgovori
            </button>

            <ReplyToForumMessageModal userProfileDetails={userProfileDetails} otherUserMessage={otherUserMessage}/>
        </>
    )
}

export default ReplyToForumMessage