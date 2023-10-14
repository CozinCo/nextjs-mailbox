import React from 'react'
import MailReceivedItemItem from './MailItem'
import { ScrollArea } from '@/components/ui/scroll-area'
import {  MailBoxData } from '@/types/nav';
const MailBoxArea = ({ folderName, result }: { folderName: string, result: MailBoxData[] }) => {
    return (
        <ScrollArea className='h-[83%] mt-2'>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="table-auto w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200">
                                    <tbody className="divide-y divide-gray-200  dark:divide-gray-700  bg-transparent">
                                        <MailReceivedItemItem folderName={folderName} result={result} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default MailBoxArea