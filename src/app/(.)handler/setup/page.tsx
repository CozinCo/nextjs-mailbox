import Alerts from '@/components/alerts/alert'
import { CardWithForm } from '@/components/first'
import { Icons } from '@/components/icons'
import Modal from '@/components/modal/modal'
import React from 'react'

const page = () => {
    const info =` You can add Multiple Account after First Login Trial Version support 3 accounts Per User. Please Make sure This is a trial Version of applicaion, feature are under development.`
    return (
        <Modal>
            <div className="flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]">
                <Icons.info />
                <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                    <p>We Do not Store any Credentials except Current and Name which will be used to login and Server configuration.You can delete your Credentials by clearing the Cookies and LocalStorage of your Browser.
                    </p>
                   
                </div>
            </div>
            <div className="max-w-4xl px-10 my-4 bg-transparent shadow-md dark:text-white">
                <CardWithForm />
            </div>
            <Alerts title='Trial Notice' info={info} className={'bg-emerald-500'}/>
        </Modal>

    )
}

export default page