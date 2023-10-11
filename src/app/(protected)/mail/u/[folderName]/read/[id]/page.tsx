import React from 'react'
import OptionsHeader from '../components/optionsHeader'
import OptionsFooter from '../components/optionsFooter'
import { FetchForReadMail } from '@/lib/fetcher'
import { ReadMailResult } from '@/types/nav'
import MailBody from '../components/mailBody'
import MailHeadersInfo from '../components/info'
import { cookies } from 'next/headers'
import { IUser } from '@/context/AuthContext'

const ReadPage = async ({ params }: { params: { folderName: string, id: string } }) => {
    const iauth = JSON.parse(cookies().get('iauth')!.value) as unknown as IUser
    const response = await FetchForReadMail(params.id.split('-')[1], params.folderName, iauth.email)
    const MailData = response.result as ReadMailResult
 
    return (
        <>
            {response.success ? (
                <>
                    <OptionsHeader time={MailData.time!} />
                    <div className="p-5">
                        <div className="mb-4 flex items-center">
                            <MailHeadersInfo MailData={MailData} />
                        </div>
                        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                            {MailData.subject}
                        </h1>
                        <div className="space-y-2">
                            <MailBody body={MailData.body} text={MailData.textAsHtml} />
                        </div>
                    </div>
                    <OptionsFooter />
                </>
            ) : null}



        </>
    )
}

export default ReadPage