// components
import OtherUserMessage from "./OtherUserMessage";
import DeleteForumMessage from "./DeleteForumMessage";
import ReplyToForumMessage from "./ReplyToForumMessage";


const ForumMessageCard = ({ userProfileDetails, forumMessageID, forumMessageData, fetchForumMessages }) => {
    // console.log(forumMessageData);
    return (
        <div className="forum-message-card bg-white p-4 rounded-4 my-2">
            {forumMessageData.otherUserMessage && <OtherUserMessage message={forumMessageData.otherUserMessage} />}

            <div className="mb-3 pb-3 border-bottom">
                <h5>
                    {forumMessageData.forumMessage}
                </h5>

                {forumMessageData.userRef == userProfileDetails.userID ? (
                    <DeleteForumMessage forumMessageID={forumMessageID} fetchForumMessages={fetchForumMessages}/>
                ) : (
                    <ReplyToForumMessage userProfileDetails={userProfileDetails} otherUserMessage={forumMessageData.forumMessage} fetchForumMessages={fetchForumMessages}/>
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