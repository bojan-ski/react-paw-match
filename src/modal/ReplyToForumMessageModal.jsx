// components
import FormInput from "../components/FormInput"
import OtherUserMessage from "../components/forumPage/OtherUserMessage"


const ReplyToForumMessageModal = ({ otherUserMessage, handleReplyMessage }) => {   
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