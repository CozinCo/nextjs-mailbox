import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import React from 'react'

const LeftSide = () => {
    return (
        <div className="mb-3 space-y-3 sm:mb-0 sm:flex sm:space-y-0 sm:space-x-3">
            <Button
                className="text-white bg-rose-700 hover:bg-rose-800  dark:bg-orange-600 dark:hover:bg-orange-700  p-0 font-medium rounded-lg"
                variant={"outline"}
            >
                <span className="flex items-center rounded-md text-sm px-3 py-2">
                    <div className="flex items-center gap-x-2">
                        <Icons.reply size="xl" />
                        Reply
                    </div>
                </span>
            </Button>
            <Button
                className="text-white bg-fuchsia-700 hover:bg-fuchsia-800  dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700  p-0 font-medium rounded-lg"
                variant={"secondary"}
            >
                <span className="flex items-center rounded-md text-sm px-3 py-2">
                    <div className="flex items-center gap-x-2">
                        <Icons.forwardArrow />
                        Forward
                    </div>
                </span>
            </Button>
        </div>
    )
}

export default LeftSide