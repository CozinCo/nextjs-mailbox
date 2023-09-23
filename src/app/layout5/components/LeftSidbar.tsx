import React from 'react'
import LeftSidebarItem from './LeftSidebarItem'

const LeftSidbar = ({ open }: { open: boolean }) => {
    return (
        <div className={`lg:!block ${open ? "hidden" : ""}`}>
            <aside

                className={`flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700 ${open ? 'lg:w-64 md:w-60' : 'lg:w-16 md:w-60'}`}
            >
                <div className="h-full overflow-y-auto overflow-x-hidden rounded   py-4 px-3  bg-transparent">
                    <div className="flex h-full flex-col justify-between py-2">
                        <div>
                            <form className="pb-3 md:hidden">
                                <div className="flex">
                                    <div className="relative w-full">
                                        {/* Search Bar here */}

                                    </div>
                                </div>
                            </form>
                            <div className="" data-testid="sidebar-items">
                                <ul
                                    className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                                    data-testid="sidebar-item-group"
                                >
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <LeftSidebarItem key={i} label={i.toString()} open={open} />
                                    ))}

                                </ul>
                                <ul
                                    className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                                    data-testid="flowbite-sidebar-item-group"
                                >
                                    <li>
                                        <a

                                            className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            href=""
                                        >

                                            <span
                                                className="px-3 flex-1 whitespace-nowrap"
                                                data-testid="flowbite-sidebar-item-content"

                                            >
                                                Docs
                                            </span>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-5">
                            <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="sr-only">Tweaks</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 20 20"
                                    className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg>
                            </button>
                            <div>
                                <div className="w-fit" data-testid="flowbite-tooltip-target">
                                    <a
                                        href="/users/settings"
                                        className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >

                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div

                                    tabIndex={-1}
                                    className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
                                    id=":r10:"
                                    role="tooltip"
                                    style={{ position: "absolute", top: 893, left: "62.586px" }}
                                >
                                    <div className="relative z-20">Settings page</div>
                                    <div
                                        className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"

                                        style={{ bottom: "-4px", left: "54.5px" }}
                                    >
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-fit dark:text-white"
                                    data-testid="flowbite-tooltip-target"
                                >
                                    <button className="flex items-center">
                                        <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">

                                            X
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default LeftSidbar