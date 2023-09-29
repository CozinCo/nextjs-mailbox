import React from 'react'
import MailBody from './mailBody'
import { ReadMailResult } from '@/types/nav'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Info = ({ result }: { result: ReadMailResult }) => {
  
  return (
    <div className="p-5">
      <div className="mb-4 flex items-center">
        <div className="shrink-0">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-4">
          <div className="truncate text-base font-semibold text-gray-900 dark:text-white">
            {result?.from?.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {result?.from?.email}
          </div>
        </div>
      </div>
      <MailBody body={result.body}/>
    </div>
  )
}

export default Info