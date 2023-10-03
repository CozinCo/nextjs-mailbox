import React from 'react'

import { FetchMailBoxMails } from "@/lib/fetcher";
import MailBoxFooter from '../../components/MailBoxFooter'
import MailBoxHeader from '../../components/MailBoxHeader'
import MailBoxArea from '../../components/MailBoxArea';
import { RightClickContextMenu } from '@/components/common/contextMenu';

const Page = async ({ params }: { params: { folderName: string } }) => {
    const { result } = await FetchMailBoxMails(params.folderName)

    return (
        <React.Fragment>
            <MailBoxHeader />
            <RightClickContextMenu>
                <MailBoxArea folderName={params.folderName || "inbox"} result={result} />
            </RightClickContextMenu>
            <MailBoxFooter />
        </React.Fragment>
    )
}

export default Page