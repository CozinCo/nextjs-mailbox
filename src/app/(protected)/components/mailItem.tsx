import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const MailItem = () => {
    const status = true;
    const isUnread = status ? "font-bold bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-slate-500 " : "font-normal hover:bg-slate-200 bg-[#f5f4f2fe] dark:bg-slate-900 dark:hover:bg-gray-700 "
    return (
        <ScrollArea className='mt-2 '>
            <Card className={cn(`hover:border-[#291d58fe] dark:hover:border-1 w-full group/item`, isUnread)} >
                <div className="flex flex-wrap lg:space-x-4 md:space-x-4 xl:space-x-4 items-center p-2 xl:px-4 lg:px-4 md:px-4">
                    <div className="lg:w-56 md:w-38 hidden lg:block md:block">
                        <div className="inline-flex justify-between space-x-4">
                            <div>
                                <input
                                    id="checkbox-9"
                                    aria-describedby="checkbox-1"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 bg-gray-50  dark:border-gray-600 dark:bg-gray-700 "
                                />
                            </div>
                            <div className="items-center inline-flex">
                                <span> <Icons.star /></span>
                                <Badge className='ml-2'>inbox</Badge>
                            </div>
                        </div></div>
                    <div className="w-auto">
                        <div className="justify-start flex px-4">
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
                    </div>
                    <div className="w-auto shrink truncate px-2">Subject</div>
                    <div className="w-[33%] xl:w-[20%] 2xl:w-[35%] lg:w-[20%] hidden lg:block   truncate text-black dark:text-white  ">Name were we at hope. Remainder household direction
                        zealously the unwilling bed sex. Lose and gay ham sake met
                        that. Stood her place one ten spoke yet. Head case knew
                        ever set why over. Marianne returned of peculiar reading
                        in moderate. Roused get enable garret estate old county.
                        Entreaties you devonshire law dissimilar terminated.</div>
                    <div className="w-auto shrink inline-flex px-2 items-end ">
                        <div className="group/edit invisible inline-flex justify-center items-center dark:bg-slate-700 bg-gray-400  group-hover/item:visible group-hover/item:px-2 group-hover/item:rounded-full "  >
                            <span className="group-hover/edit:text-white-700 ...">Delte</span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 20 20"
                                className="text-xl group-hover/edit:translate-x-0.5 group-hover/edit:text-white-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <span className="hidden lg:block group-hover/item:invisible ">      15.28 PM</span>
                    </div>


                </div>
            </Card>
        </ScrollArea>
    )
}

export default MailItem