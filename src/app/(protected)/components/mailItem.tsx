import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const MailItem = () => {
    const status = true;
    const isUnread = status  ? "font-bold bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-slate-500 ":"font-normal hover:bg-slate-200 "
    return (
        <ScrollArea>
            <Card>
                <div className={cn(`grid lg:grid-cols-5 sm:grid-cols-3 justify-between gap-4 justify-items-stretch px-6 py-4 max-w-sm overflow-hidden p-4 bg-slate-100 text-white  dark:bg-slate-900  xl:max-w-screen-xl 2xl:max-w-screen-lg dark:hover:bg-gray-700`,isUnread)}>
                    <div className="justify-self-auto">
                        <div className="inline-flex items-center space-x-4">
                            <div>
                                <input
                                    id="checkbox-9"
                                    aria-describedby="checkbox-1"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                />
                                <label htmlFor="checkbox-9" className="sr-only">
                                    checkbox
                                </label>

                            </div>
                            <svg
                                className="h-6 w-6 text-gray-500 hover:text-blue-300 dark:text-white   dark:hover:text-yellow-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                            </svg>
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-white bg-rose-700 no-underline group-hover:no-underline">
                                Inbox
                            </span>
                        </div>
                    </div>
                    <div className="justify-self-auto flex">

                        <Link
                            href="/mailbox/read"
                            className="text-base  dark:text-white "
                        >
                            <img
                                className="h-6 w-6 rounded-full inline-flex"
                                src="../../images/users/leslie-livingston.png"
                                alt=""
                            />
                            Leslie Livingston
                        </Link>
                    </div>
                    <div className="hidden lg:block md:block justify-self-auto truncate text-gray-500 dark:text-white">Name were we at hope. Remainder household direction
                        zealously the unwilling bed sex. Lose and gay ham sake met
                        that. Stood her place one ten spoke yet. Head case knew
                        ever set why over. Marianne returned of peculiar reading
                        in moderate. Roused get enable garret estate old county.
                        Entreaties you devonshire law dissimilar terminated.</div>
                    <div className="justify-self-auto hidden lg:block md:block text-gray-500 dark:text-white">  11 April at 15.28 PM</div>
                    <div className="justify-self-auto">
                        <span
                            className="cursor-pointer justify-center rounded  text-gray-500 hover:bg-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
        </ScrollArea>
    )
}

export default MailItem