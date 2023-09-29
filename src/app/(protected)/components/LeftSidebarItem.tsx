import { MailBoxIcons } from '@/lib/utils'
import { AllFolders } from '@/types/nav'
import Link from 'next/link'
import React from 'react'

interface PropsType {
    open: boolean,
    key: number,
    folder: AllFolders

}
const LeftSidebarItem = ({ open, key, folder }: PropsType) => {
    return (
        <li key={key}>
            <div className="w-full">
                <Link
                    className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    href={"/mail/u/" + (folder.pathAsListed).toLowerCase()}
                >
                    {MailBoxIcons[folder.pathAsListed as keyof typeof MailBoxIcons]} 
                    {open ?? (
                        <span
                            className={`px-4 ${open ? "" : "ml-3"} transition-width flex-1 whitespace-nowrap`}

                        >
                            {folder.pathAsListed}
                        </span>
                    )}
                </Link>
            </div>
        </li>
    )
}

export default LeftSidebarItem