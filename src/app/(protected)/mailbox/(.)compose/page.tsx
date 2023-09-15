import React from 'react'
import ComposeCard from './components/composeCard'
import Modal from '@/components/modal/modal'

const page = () => {
    return (
        <div className="fixed right-6 bottom-6 group">
            <Modal>  <ComposeCard /></Modal>
        </div>
    )
}

export default page