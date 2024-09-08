import { useEffect, useState } from 'react'
// custom hook
import useFetchForumPageData from '../hooks/useFetchForumPageData';
// components
import PageHeader from '../components/PageHeader'
import SendMessageForumForm from '../components/forumPage/SendMessageForumForm'
import ForumMessageCard from '../components/forumPage/ForumMessageCard';


const Forum = () => {
    const itemsPerPage = 1;
    const { forumMessages, fetchForumMessages, page } = useFetchForumPageData(itemsPerPage);

    // Fetch the first page on mount
    useEffect(() => {
        console.log('Forum page - useEffect');

        fetchForumMessages();
    }, [])

    console.log(forumMessages);

    const [forumMessage, setForumMessage] = useState({})

    return (
        <div className='forum-page'>

            <PageHeader title='Forum' />

            <div className="container">

                <SendMessageForumForm />

                <section className='forum-messages-list mb-3'>
                    <div className='row'>
                        {forumMessages.map(forumMessage => <ForumMessageCard key={forumMessage.id} forumMessageData={forumMessage.data}/>)}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Forum