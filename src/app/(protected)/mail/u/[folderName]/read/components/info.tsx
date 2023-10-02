import React from 'react'
import { ReadMailResult } from '@/types/nav'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const MailHeadersInfo = ({ MailData }: { MailData: ReadMailResult }) => {

  return (
    <div className="p-5">
      <div className="mb-4 flex items-center">
        <div className="shrink-0">
          <Avatar>
            <AvatarImage src="/149071.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-4">
          <div className="truncate text-xl font-semibold text-gray-900 dark:text-white">
            {MailData.from.name.name === "" ? MailData.from.name.address : MailData.from.name.name}
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            From: {MailData.from.name.name === "" ? MailData.from.name.address : `${MailData.from.name.name} <${MailData.from.name.address}>`}
            <br />
            To: {MailData.to.name.address}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailHeadersInfo