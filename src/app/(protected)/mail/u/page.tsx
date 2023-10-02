import React from 'react'

import { FetchMailBoxMails } from "@/lib/fetcher";
import MailBoxFooter from '../../components/MailBoxFooter'
import MailBoxHeader from '../../components/MailBoxHeader'
import MailBoxArea from '../../components/MailBoxArea';

const Page = async ({ params }: { params: { folderName: string } }) => {
    const { result } = await FetchMailBoxMails(params.folderName)
     
    return (
        <React.Fragment>
            <MailBoxHeader />
            <MailBoxArea folderName={params.folderName || "inbox"} result={result} />
            <MailBoxFooter />
        </React.Fragment>
    )
}

export default Page