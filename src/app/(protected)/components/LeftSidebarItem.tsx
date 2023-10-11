import { MailBoxIcons } from '@/lib/utils'
import { AllFolders } from '@/types/nav'
import Link from 'next/link'
import React from 'react'
import {sentenceCase} from 'change-case'
interface PropsType {
    open: boolean,
  
    folder: AllFolders

}
const LeftSidebarItem = ({ open,  folder }: PropsType) => {
    return (
        <li>
            <div className="w-full">
                <Link
                    className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    href={"/mail/u/" + (folder.name).toLowerCase()}
                >
                    {MailBoxIcons[folder.pathAsListed as keyof typeof MailBoxIcons]} 
                    {open && (
                        <span
                            className={`px-4 ${open ? "" : "ml-3"} transition-width flex-1 whitespace-nowrap`}

                        >
                            {sentenceCase(folder.name)}
                        </span>
                    )}
                </Link>
            </div>
        </li>
    )
}

export default LeftSidebarItem