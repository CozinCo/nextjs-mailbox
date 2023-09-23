import React from 'react'
import Info from '../components/info'
import OptionsHeader from '../components/optionsHeader'
import OptionsFooter from '../components/optionsFooter'
import { FetchForReadMail } from '@/lib/fetcher'
import { ReadMailResult } from '@/types/nav'

const ReadPage = async({ params }: { params: {folderName: string, id: string } }) => {
  const response =  await FetchForReadMail(params.id.split('-')[1],params.folderName)
 const MailData = response.result as ReadMailResult
  return (
    <main className="h-screen  bg-gray-50 dark:bg-gray-900">
     
      <OptionsHeader />
      <Info MailData={MailData}/>
      <OptionsFooter />
    </main>
  )
}

export default ReadPage