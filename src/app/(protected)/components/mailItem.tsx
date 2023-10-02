import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { cn, dateToFromNowDaily } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { MailBoxData } from '@/types/nav'

const MailReceivedItem = ({ folderName, result }: { folderName: string, result: MailBoxData[] }) => {
   const isRead = folderName ? "font-semibold dark:text-white text-gray-900":"font-normal text-gray-700  dark:text-gray-400"   
    return (
        <>
           {result.map((item,index) => {
               return(
                <tr key={item.id}
                data-testid="table-row-element"
                className="hover:bg-gray-50 bg-transparent dark:hover:bg-gray-600"
            >
                <td className="px-6 py-4 w-4 p-4">
                    <div className="inline-flex items-center space-x-4">
                        <div>
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                        <div className="items-center  lg:block hidden md:block">
                            <div className='inline-flex'>
                                <span> <Icons.star /></span>
                                <Badge className='ml-2'>{folderName === "" ? "inbox" : folderName}</Badge>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                   
                    <Link
                        href={`${folderName}/read/${item.id}-${item.seq}`}
                        className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                    >
                       {item.name === "" ?  item.address : item.name}
                    </Link>
                </td>
              
                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                   {item.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                   {dateToFromNowDaily(item.date)}
                </td>
            </tr>
               )
           })}
          
        </>
    )
}

export default MailReceivedItem