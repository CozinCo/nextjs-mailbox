import React from 'react'
import MailBody from './mailBody'

const Info = () => {
  return (
    <div className="p-5">
        <div className="mb-4 flex items-center">
          <div className="shrink-0">
            <img
              alt=""
              src="../../images/users/bonnie-green.png"
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div className="ml-4">
            <div className="truncate text-base font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              email@flowbite.com
            </div>
          </div>
        </div>
       <MailBody />
      </div>
  )
}

export default Info