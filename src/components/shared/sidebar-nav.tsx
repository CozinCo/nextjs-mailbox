"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { SidebarNavMenu } from "@/lib/constants"
import { Button } from "../ui/button"
import { SidebarNavItemsProps } from "@/types/nav"
 

export function SidebarNav() {
    const pathname = usePathname()

    return SidebarNavMenu.length ? (
        <div className="w-full">
            <div className=" py-2">
                <Button className="py-2 mb-4 mx-4 hidden lg:block md:block bg-blue-500" variant={"outline"}>
                    New Mail
                </Button>
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Primary
                </h2>
                {SidebarNavMenu.map((item, index) => (
                    <div key={index} className={cn("pb-4")}>
                        {item?.items?.length && (
                            <SidebarNavItems items={item.items} pathname={pathname} />
                        )}
                    </div>
                ))}
            </div>
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Categories
                </h2>
                <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                       
                        Playlists
                    </Button>
                </div>
            </div>
            <div className="py-2">
                <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                    Labels
                </h2>
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
        </div>
    ) : null
}


export function SidebarNavItems({
    items,
    pathname,
}: SidebarNavItemsProps) {
    return items?.length ? (
        <div className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) =>
                item.href && !item.disabled ? (
                    <Link href={item.title} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ml-3 whitespace-nowrap">{item.title}</span>



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