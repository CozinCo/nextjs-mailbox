import React from 'react'
import { Header } from '@/components/shared/header'
import TeamSwitcher from '@/components/shared/team-switcher'
import { UserNav } from '@/components/shared/user-nav'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Icons } from '@/components/icons'


const MainHeader = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <header className="fixed z-30 w-full  bg-transparent border-b border-gray-200 transition-colors duration-300 dark:border-gray-700 lg:border-b backdrop-blur dark:bg-transparent">
            <div className="mx-auto flex flex-wrap items-center justify-between ">
                <div className="w-full p-3 lg:px-5 lg:pl-3">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button onClick={() => setOpen(!open)} className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline">

                                <Icons.fries />
                            </button>
                            <a className="flex items-center" href="/">
                                <img
                                    alt=""
                                    src="/logo2-dark.png"
                                    className="mr-3 h-6 sm:h-8"
                                />
                            </a>
                            <div className="ml-16 hidden md:block">
                                <div className="flex   items-center px-4">
                                    <TeamSwitcher />
                                    <Header className="mx-6" />
                                </div></div>
                        </div>
                        <div className="flex items-center lg:gap-3 ">
                            <div className="flex items-center">
                                <div
                                    className="w-fit dark:text-white"
                                    data-testid="flowbite-tooltip-target"
                                >
                                    <button className="flex items-center">
                                        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="sr-only">Notifications</span>
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
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div
                                    data-testid="flowbite-tooltip"
                                    tabIndex={-1}
                                    className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                    id=":r0:"
                                    role="tooltip"
                                    style={{ position: "absolute", top: 61, left: "884.984px" }}
                                >
                                    <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                        <ul className="">
                                            <div className="max-w-[24rem]">
                                                <div className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                                    Notifications
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                alt=""
                                                                src="../images/users/bonnie-green.png"
                                                                className="h-11 w-11 rounded-full"
                                                            />
                                                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                                                                <svg
                                                                    className="h-3 w-3 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-full pl-3">
                                                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                New message from&nbsp;
                                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                                    Bonnie Green
                                                                </span>
                                                                : "Hey, what's up? All set for the
                                                                presentation?"
                                                            </div>
                                                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                a few moments ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                alt=""
                                                                src="../images/users/jese-leos.png"
                                                                className="h-11 w-11 rounded-full"
                                                            />
                                                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                                                                <svg
                                                                    className="h-3 w-3 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-full pl-3">
                                                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                                    Jese Leos
                                                                </span>
                                                                &nbsp;and&nbsp;
                                                                <span className="font-medium text-gray-900 dark:text-white">
                                                                    5 others
                                                                </span>
                                                                &nbsp;started following you.
                                                            </div>
                                                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                10 minutes ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                alt=""
                                                                src="../images/users/joseph-mcfall.png"
                                                                className="h-11 w-11 rounded-full"
                                                            />
                                                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                                                                <svg
                                                                    className="h-3 w-3 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-full pl-3">
                                                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                                    Joseph Mcfall
                                                                </span>
                                                                &nbsp;and&nbsp;
                                                                <span className="font-medium text-gray-900 dark:text-white">
                                                                    141 others
                                                                </span>
                                                                &nbsp;love your story. See it and view more
                                                                stories.
                                                            </div>
                                                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                44 minutes ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                alt=""
                                                                src="../images/users/leslie-livingston.png"
                                                                className="h-11 w-11 rounded-full"
                                                            />
                                                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                                                                <svg
                                                                    className="h-3 w-3 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-full pl-3">
                                                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                                    Leslie Livingston
                                                                </span>
                                                                &nbsp;mentioned you in a comment:&nbsp;
                                                                <span className="font-medium text-primary-700 dark:text-primary-500">
                                                                    @bonnie.green
                                                                </span>
                                                                &nbsp;what do you say?
                                                            </div>
                                                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                1 hour ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                alt=""
                                                                src="../images/users/robert-brown.png"
                                                                className="h-11 w-11 rounded-full"
                                                            />
                                                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                                                                <svg
                                                                    className="h-3 w-3 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="w-full pl-3">
                                                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                                    Robert Brown
                                                                </span>
                                                                &nbsp;posted a new video: Glassmorphism - learn
                                                                how to implement the new design trend.
                                                            </div>
                                                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                3 hours ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="block rounded-b-xl bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                                                >
                                                    <div className="inline-flex items-center gap-x-2">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            className="h-6 w-6"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span>View all</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="w-fit dark:text-white"
                                    data-testid="flowbite-tooltip-target"
                                >
                                    <button className="flex items-center">
                                        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="sr-only">Apps</span>
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
                                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <ThemeToggle className="hidden lg:block md:block" />
                            </div>
                            <div className="hidden lg:block">
                                <div
                                    className="w-fit dark:text-white "

                                >
                                    <UserNav />
                                </div>
                                <div
                                    data-testid="flowbite-tooltip"
                                    tabIndex={-1}
                                    className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200   bg-transparent text-gray-900 dark:border-none   dark:text-white"
                                    id=":r4:"
                                    role="tooltip"
                                    style={{ position: "absolute", top: 57, left: "1070.36px" }}
                                >
                                    <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                        <ul className="">
                                            <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
                                                <span className="block text-sm">Neil Sims</span>
                                                <span className="block truncate text-sm font-medium">
                                                    neil.sims@flowbite.com
                                                </span>
                                            </div>
                                            <div className="my-1 h-px bg-gray-100 dark:bg-gray-600" />
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Dashboard
                                            </li>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Settings
                                            </li>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Earnings
                                            </li>
                                            <div className="my-1 h-px bg-gray-100 dark:bg-gray-600" />
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Sign out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader