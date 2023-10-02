import React from 'react'
import Info from '../components/info'
import OptionsHeader from '../components/optionsHeader'
import OptionsFooter from '../components/optionsFooter'
import { FetchForReadMail } from '@/lib/fetcher'
import { ReadMailResult } from '@/types/nav'
import MailBody from '../components/mailBody'
import MailHeadersInfo from '../components/info'

const ReadPage = async ({ params }: { params: { folderName: string, id: string } }) => {
    const response = await FetchForReadMail(params.id.split('-')[1], params.folderName)
    const MailData = response.result as ReadMailResult
  
    return (
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
                    <MailBody body={MailData.body} />
                </div>
            </div>
            <OptionsFooter />

        </>
    )
}

export default ReadPage