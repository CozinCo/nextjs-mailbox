import React from 'react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const NoMails = () => {
  return (
    <div className='flex items-center justify-center h-[83%] mt-2 text-gray-500 dark:text-gray-400 text-lg font-sem'>
      <Alert>
        <AlertTitle className='justify-center text-rose-400'>No of Connection exceeded than 20</AlertTitle>
        <AlertDescription>
          This is Trial,Version Multiple Refreshes can increase Imap Server Load, Keep In Mind,
          Per User/per ip only 20 connection is allowed
        </AlertDescription>
      </Alert>

    </div>
  )
}

export default NoMails