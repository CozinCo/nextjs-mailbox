import React from 'react'
import { FetchMailBoxMails } from "@/lib/fetcher";
import { RightClickContextMenu } from '@/components/common/contextMenu';
import MailBoxHeader from '@/app/(protected)/components/MailBoxHeader';
import MailBoxFooter from '@/app/(protected)/components/MailBoxFooter';
import MailBoxArea from '@/app/(protected)/components/MailBoxArea';
import { cookies } from 'next/headers';
import { IUser } from '@/context/AuthContext';

import NoMails from '@/app/(protected)/components/NoMails';

const Page = async ({ params }: { params: { folderName: string } }) => {
  const iauth = JSON.parse(cookies().get('iauth')!.value) as unknown as IUser
  const { result } = await FetchMailBoxMails(params.folderName, iauth.email)
 
  return (
    <>
      <MailBoxHeader />
      {result.length !== 0 ? <RightClickContextMenu>
        <MailBoxArea folderName={params.folderName} result={result} />
      </RightClickContextMenu> : <NoMails/>}

      <MailBoxFooter />

    </>
  )

}

export default Page