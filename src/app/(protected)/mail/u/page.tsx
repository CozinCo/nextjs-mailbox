import React from 'react'
import { FetchMailBoxMails } from "@/lib/fetcher";
import MailBoxFooter from '../../components/MailBoxFooter'
import MailBoxHeader from '../../components/MailBoxHeader'
import MailBoxArea from '../../components/MailBoxArea';
import { RightClickContextMenu } from '@/components/common/contextMenu';
import { cookies } from 'next/headers';
import { IUser } from '@/context/AuthContext';
import NoMailBoxSelected from '../../components/NoMailBoxSelected';

const Page = async ( ) => {     
    const iauth = JSON.parse(cookies().get('iauth')!.value) as unknown as IUser
    const { result } = await FetchMailBoxMails("inbox",iauth.email)

    return (
        <React.Fragment>
            <MailBoxHeader />
            {result.length !== 0 ? <RightClickContextMenu>
                
                <MailBoxArea folderName="inbox" result={result} />
            </RightClickContextMenu> : <NoMailBoxSelected/>}
            
            <MailBoxFooter />
        </React.Fragment>
    )
}

export default Page