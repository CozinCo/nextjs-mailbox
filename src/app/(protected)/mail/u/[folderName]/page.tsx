import React from 'react'
import MailItem from '../../../components/mailItem'
import { FetchMailBoxMails } from "@/lib/fetcher";
import { RightClickContextMenu } from '@/components/common/contextMenu';

const Page = async ({ params }: { params: { folderName: string } }) => {
  const { result } = await FetchMailBoxMails(params.folderName)
  return (
    <RightClickContextMenu>
      <MailItem result={result} activeMailbox={params.folderName} />
    </RightClickContextMenu>
  )

}

export default Page