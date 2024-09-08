// context
import { useGlobalContext } from "../../context";


const ForumMessageCard = ({ forumMessageData }) => {
    // console.log(forumMessageData);
    const { userProfileDetails } = useGlobalContext()
    // console.log(userProfileDetails.userID);

    const handleDeleteForumMessage = () =>{
        console.log('handleDeleteForumMessage');
        
    }

    const handleReplyToForumMessage = () =>{
        console.log('handleReplyToForumMessage');
        
    }


    return (
        <div className="forum-messages-card py-2 bg-info">
            <div className="mb-3">
                <h5>
                    {forumMessageData.forumMessage}
                </h5>

                {forumMessageData.userRef == userProfileDetails.userID ? (
                    <button className="btn btn-danger" onClick={handleDeleteForumMessage}>
                        Obriši
                    </button>
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