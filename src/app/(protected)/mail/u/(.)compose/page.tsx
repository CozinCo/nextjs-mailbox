import React from 'react'
import ComposeCard from './components/composeCard'
import Modal from '@/components/modal/modal'

const page = () => {
    return (
        <div className="">
            <Modal>
                <ComposeCard />
            </Modal>
        </div>
    )
}

export default page