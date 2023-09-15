import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const MailCardItems = () => {
    const status = true;
    const isUnread = status ? "font-bold bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-slate-500 " : "font-normal hover:bg-slate-200 "
    return (
        <Card>
            <div className={cn(`grid lg:grid-cols-5 sm:grid-cols-3 gap-2 px-6 py-4 overflow-hidden p-2 bg-slate-100 text-white  dark:bg-slate-900 dark:hover:bg-gray-700`, isUnread)}>

                <div className="inline-flex justify-between space-x-4 w-1/3">
                    <div className=''>
                        <input
                            id="checkbox-9"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                    </div>
                    <div className="items-center inline-flex">
                        <span> <Icons.star /></span>
                        <Badge className='ml-2'>inbox</Badge>
                    </div>
                </div>

                <div className="justify-start flex gap-4">
                    <Link
                        href="/mailbox/read"
                        className="text-base  text-black dark:text-white"
                    >
                        <img
                            className="h-6 w-6 rounded-full inline-flex"
                            src="../../images/users/leslie-livingston.png"
                            alt=""
                        />
                        Leslie Livingston
                    </Link>

                </div>



                <div className="hidden lg:block md:block justify-self-auto truncate text-black dark:text-white w-full">Name were we at hope. Remainder household direction
                    zealously the unwilling bed sex. Lose and gay ham sake met
                    that. Stood her place one ten spoke yet. Head case knew
                    ever set why over. Marianne returned of peculiar reading
                    in moderate. Roused get enable garret estate old county.
                    Entreaties you devonshire law dissimilar terminated.
                </div>

                <div className="justify-center hidden lg:block md:block text-black dark:text-white w-1/2">  11 April  15.28 PM</div>

                <div className="justify-end w-1/4">
                    <span
                        className="cursor-pointer rounded  text-gray-500 hover:bg-gray-500 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-2xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </span>
                </div>

            </div>
        </Card>
    )
}

export default MailCardItems