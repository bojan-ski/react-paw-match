// components
import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SendMessageForumForm from '../components/forumPage/SendMessageForumForm'

const Forum = () => {
    const [forumMessage, setForumMessage] = useState({})

    return (
        <div className='forum-page'>

            <PageHeader title='Forum' />

            <div className="container">

                <SendMessageForumForm />

            </div>
        </div>
    )
}

export default Forum