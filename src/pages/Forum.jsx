import { useEffect } from 'react'
// custom hook
import useFetchForumPageData from '../hooks/useFetchForumPageData';
// components
import PageHeader from '../components/PageHeader'
import SendMessageForumForm from '../components/forumPage/SendMessageForumForm'
import ForumMessageCard from '../components/forumPage/ForumMessageCard';
import PaginationApi from '../components/PaginationApi';


const Forum = () => {
    const itemsPerPage = 10;
    const { forumMessages, fetchForumMessages, page } = useFetchForumPageData(itemsPerPage);

    // Fetch the first page on mount
    useEffect(() => {
        console.log('Forum page - useEffect');

        fetchForumMessages();
    }, [])

    // console.log(forumMessages);    

    return (
        <div className='forum-page'>

            <PageHeader title='Forum' />

            <div className="container">

                {forumMessages && forumMessages.length > 0 ? (
                    <>
                        <SendMessageForumForm fetchForumMessages={fetchForumMessages} />

                        <section className='forum-messages-list px-2 mb-3'>
                            <div className='row'>
                                {forumMessages.map(forumMessage => <ForumMessageCard key={forumMessage.id} forumMessageID={forumMessage.id} forumMessageData={forumMessage.data} fetchForumMessages={fetchForumMessages} />)}
                            </div>
                        </section>

                        <PaginationApi itemsPerPage={itemsPerPage} data={forumMessages} fetchData={fetchForumMessages} page={page} />
                    </>
                ) : (
                    <h2 className="fw-bold text-center">
                        Trenutno nema objavljenih poruka
                    </h2>
                )}
            </div>
        </div>
    )
}

export default Forum