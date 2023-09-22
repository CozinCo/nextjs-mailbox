import React from 'react'
import MailItem from '../../components/mailItem'
import { FetchMailBoxMails } from "@/lib/fetcher";

const Page = async ({ params }: { params: { folderName: string } }) => {
  const { result } = await FetchMailBoxMails(params.folderName)  
  return <MailItem result={result} />
}

export default Page