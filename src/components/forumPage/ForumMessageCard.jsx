// context
import { useGlobalContext } from "../../context";
// components
import OtherUserMessage from "./OtherUserMessage";
import DeleteForumMessage from "./DeleteForumMessage";
import ReplyToForumMessage from "./ReplyToForumMessage";


const ForumMessageCard = ({ forumMessageID, forumMessageData }) => {
    // console.log(forumMessageData);
    const { userProfileDetails } = useGlobalContext()

    return (
        <div className="forum-messages-card my-2 py-2 bg-info">
            {forumMessageData.otherUserMessage && <OtherUserMessage message={forumMessageData.otherUserMessage} />}

            <div className="mb-3">
                <h5>
                    {forumMessageData.forumMessage}
                </h5>

                {forumMessageData.userRef == userProfileDetails.userID ? (
                    <DeleteForumMessage forumMessageID={forumMessageID} />
                ) : (
                    <ReplyToForumMessage userProfileDetails={userProfileDetails} otherUserMessage={forumMessageData.forumMessage} />
                )}
            </div>

            <div className="row">
                {/* row item 1 */}
                <div className="col-6">
                    Poruku objavio:
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