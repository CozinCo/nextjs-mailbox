import { Icons } from '@/components/icons'
import React from 'react'

const RightSide = () => {
    return (
        <div className="flex space-x-1 pl-0 sm:pl-6">
            <span
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <Icons.emoji />
            </span>
            <span
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <Icons.attachments />
            </span>
            <span
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <Icons.screenshot />

            </span>
            <span
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <Icons.print />
            </span>
        </div>
    )
}

export default RightSide