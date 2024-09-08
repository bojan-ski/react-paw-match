// context
import { useGlobalContext } from "../../context";
// components
import DeleteForumMessage from "./DeleteForumMessage";
// toastify
import { toast } from "react-toastify";


const ForumMessageCard = ({ forumMessageID, forumMessageData }) => {
    const { userProfileDetails } = useGlobalContext()

    

    const handleReplyToForumMessage = () => {
        console.log('handleReplyToForumMessage');

    }


    return (
        <div className="forum-messages-card my-2 py-2 bg-info">
            <div className="mb-3">
                <h5>
                    {forumMessageData.forumMessage}
                </h5>

                {forumMessageData.userRef == userProfileDetails.userID ? (
                    <DeleteForumMessage forumMessageID={forumMessageID}/>
                ) : (
                    <button className="btn btn-primary" onClick={handleReplyToForumMessage}>
                        Odgovori
                    </button>
                )}
            </div>

            <div className="row">
                {/* row item 1 */}
                <div className="col-6">
                    Poruku objavi:
                    <span className="fw-bold ms-2">{forumMessageData.messageCreatedBy}</span>
                </div>

                {/* row item 2 */}
                <div className="col-6 text-end">
                    Poruka objavljena:
                    <span className="fw-bold ms-2">{forumMessageData.messageCreated}</span>
                </div>
            </div>
        </div>
    )
}

export default ForumMessageCard