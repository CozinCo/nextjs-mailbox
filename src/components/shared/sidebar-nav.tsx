"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { SidebarNavMenu } from "@/lib/constants"
import { Button } from "../ui/button"
import { FolderFromApi, SidebarNavItemsProps } from "@/types/nav"
import { Icons } from "../icons"
import { ToggleAny } from "../common/toggleAny"
import { PopoverMe } from "../common/popover"
import { Icon } from "@radix-ui/react-select"

export function SidebarNav({ AllFolders }: { AllFolders: FolderFromApi[] }) {
    const pathname = usePathname()

    return SidebarNavMenu.length ? (
        <div className="w-full">
            <div className="py-2">
                <div className="inline-flex justify-center items-center">
                    <Button className="py-2 mb-4 mx-4 hidden lg:block md:block bg-blue-500 text-white " variant={"outline"}>
                        New Message
                    </Button>
                    <span className="py-2 mb-4 text-white">
                        <PopoverMe content={<h1>Hello Ji</h1>}>
                            <Icons.apps />
                        </PopoverMe>
                    </span>
                </div>
                {AllFolders.map((item, index) => (
                    <div className="grid grid-flow-row  text-sm" key={index} >
                        <div className="">
                            <Link href={"mailbox/" + (item.pathAsListed).toLowerCase()} key={index} className="flex mt-0.5 justify-between items-center p-2 text-base font-normal  text-white rounded-lg dark:text-white bg-[#291d58fe] hover:bg-[#1b1340fe] dark:hover:bg-[#1b1340fe]  group">
                                <span className="ml-3 whitespace-nowrap">{item.pathAsListed}</span>

                            </Link>

                        </div>
                    </div>
                ))}
                {/* {SidebarNavMenu.map((item, index) => (
                    <div key={index} className={cn("pb-4 px-1")}>
                        {item?.items?.length && (
                            <SidebarNavItems items={item.items} pathname={pathname} />
                        )}
                    </div>
                ))} */}
            </div>
            <div className="grid grid-flow-row  px-2 py-2 items-center ">
                <div className="flex mt-0.5 justify-between items-center p-2 mb-2 px-4 text-lg font-semibold tracking-tight">
                    <span className="ml-3 whitespace-nowrap">Folder</span>
                    <span
                        className="inline-flex cursor-pointer justify-end rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <Icons.add />
                    </span>
                </div>
            </div>
            <div className="grid grid-flow-row  px-2 py-2 items-center ">
                <div className="flex mt-0.5 justify-between items-center p-2 mb-2 px-4 text-lg font-semibold tracking-tight">
                    <span className="ml-3 whitespace-nowrap">Labels</span>
                    <span
                        className="inline-flex cursor-pointer justify-end rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <Icons.add />
                    </span>
                </div>
            </div>
            <div className="space-y-1 p-2">
                <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                        You can turn the new navigation off for a limited time in your profile.
                    </p>
                    <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                </div>
            </div>
        </div>
    ) : null
}


export function SidebarNavItems({
    items,
    pathname,
}: SidebarNavItemsProps) {
    return items?.length ? (
        <div className="grid grid-flow-row  text-sm">
            {items.map((item, index) =>
                item.href && !item.disabled ? (
                    <Link href={item.title} key={index} className="flex mt-0.5 justify-between  items-center p-2 text-base font-normal  text-white rounded-lg dark:text-white bg-[#291d58fe] hover:bg-[#1b1340fe] dark:hover:bg-[#1b1340fe]  group">
                        <span className="ml-3 whitespace-nowrap">{item.title}</span>
                        {item.label && (
                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-blue-200 dark:bg-amber-300 text-blue-800 dark:text-blue-800">
                                6
                            </span>
                        )}
                    </Link>
                ) : (
                    <span
                        key={index}
                        className={cn(
                            "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
                            item.disabled && "cursor-not-allowed opacity-60"
                        )}
                    >
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                                {item.label}
                            </span>
                        )}
                    </span>
                )
            )}
        </div>
    ) : null
}