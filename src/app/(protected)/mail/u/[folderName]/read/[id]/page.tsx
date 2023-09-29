import React from 'react'
import Info from '../components/info'
import OptionsHeader from '../components/optionsHeader'
import OptionsFooter from '../components/optionsFooter'
import { FetchForReadMail } from '@/lib/fetcher'
import { ReadMailResult } from '@/types/nav'

const ReadPage = async({ params }: { params: {folderName: string, id: string } }) => {
  // const response =  await FetchForReadMail(params.id.split('-')[1],params.folderName)
//  const MailData = response.result as ReadMailResult
  return (
    <>
    <OptionsHeader />
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
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Website Hosting Reviews Free The Best Resource For Hosting Comparison
        </h1>
        <div className="space-y-2">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Do you know what could beat the exciting feeling of having a new computer?
                Make your own PC easy and compatible!
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                So insisted received is occasion advanced honoured. Among ready to which
                up. Attacks smiling and may out assured moments man nothing outward.
                Thrown any behind afford either the set depend one temper. Instrument
                melancholy in acceptance collecting frequently be if. Zealously now
                pronounce existence add you instantly say offending. Merry their far had
                widen was. Concerns no in expenses raillery formerly.
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Best Regards,
                <br />
                Bonnie Green, CEO Themesberg LLC
            </p>
        </div>
    </div>
    <OptionsFooter />

</>
  )
}

export default ReadPage