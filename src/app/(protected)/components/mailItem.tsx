import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn, dateToFromNowDaily } from '@/lib/utils'
import Link from 'next/link'
import moment from 'moment'
import React from 'react'

const MailReceivedItem = ({ folderName, result }: { folderName: string, result: any[] }) => {
    return (
        <>
            <tr
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
                                <Badge className='ml-2'>inbox</Badge>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                    <img
                        className="h-6 w-6 rounded-full"
                        src="../../images/users/bonnie-green.png"
                        alt=""
                    />
                    <Link
                        href="/mailing/read"
                        className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                    >
                        Bonnie Green
                    </Link>
                </td>
                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                    For norland produce age wishing. To figure on it
                    spring season up. Her provision acuteness had
                    excellent two why intention. As called mr needed
                    praise at. Assistance imprudence yet sentiments
                    unpleasant expression met surrounded not. Be at talked
                    ye though secure nearer.
                </td>
                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                    16 April at 10.28 PM
                </td>
            </tr>

            <tr
                data-testid="table-row-element"
                className="  hover:bg-gray-50  bg-transparent dark:hover:bg-gray-600"
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
                                <Badge className='ml-2'>inbox</Badge>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                    <img
                        className="h-6 w-6 rounded-full"
                        src="../../images/users/michael-gough.png"
                        alt=""
                    />
                    <a
                        href="/mailing/read"
                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                    >
                        Michael Gough
                    </a>
                </td>
                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                    Smallest directly families surprise honoured am an.
                    Speaking reading mistress him numerous she returned
                    feelings may day. Evening way luckily son exposed get
                    general greatly. Zealously prevailed be arranging do.
                    Set arranging too dejection september happiness.
                    Understood instrument or do connection no appearance
                    do invitation. Dried quick round it or order. Add past
                    see west felt did any. Say out noise you taste merry
                    plate you share. My resolve arrived is we chamber be
                    removal.
                </td>
                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                    15 April at 10.28 PM
                </td>
            </tr>
        </>
    )
}

export default MailReceivedItem