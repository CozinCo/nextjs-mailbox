import React from 'react'
import { FetchMailBoxMails } from "@/lib/fetcher";
import { RightClickContextMenu } from '@/components/common/contextMenu';
import MailBoxHeader from '@/app/(protected)/components/MailBoxHeader';
import MailBoxFooter from '@/app/(protected)/components/MailBoxFooter';
import MailBoxArea from '@/app/(protected)/components/MailBoxArea';

const Page = async ({ params }: { params: { folderName: string } }) => {
  const { result } = await FetchMailBoxMails(params.folderName)
  return (
    <>
      <MailBoxHeader />
      <RightClickContextMenu>
        <MailBoxArea folderName={params.folderName} result={result} />
      </RightClickContextMenu>
      <MailBoxFooter />

    </>
  )

}

export default Page