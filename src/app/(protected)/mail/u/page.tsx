import React from 'react'
import MailItem from '../../components/mailItem'
import { FetchMailBoxMails } from "@/lib/fetcher";
import MailHeader from '../../components/mailHeader';
import MailFooter from '../../components/mailFooter';

const Page = async ({ params }: { params: { folderName: string } }) => {
  const { result } = await FetchMailBoxMails(params.folderName)
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <MailHeader />
      <MailItem result={result} />
      <MailFooter />
    </div>)
}

export default Page