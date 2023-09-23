import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import MailBoxFooter from './components/MailBoxFooter'
import MailBoxHeader from './components/MailBoxHeader'

const page = () => {
    return (
        <React.Fragment>
            <MailBoxHeader />
            <ScrollArea className='h-[83%] mt-2 '>
                <div className="flex flex-col ">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden shadow">
                                <div
                                    data-testid="table-element"
                                    className="relative overflow-x-auto shadow-md sm:rounded-lg"
                                >
                                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200">
                                        <tbody className="divide-y divide-gray-200  dark:divide-gray-700  bg-transparent">

                                            <tr
                                                data-testid="table-row-element"
                                                className="  hover:bg-gray-50 bg-transparent dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-2"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-2" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/bonnie-green.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                                                    >
                                                        Bonnie Green
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    For norland produce age wishing. To figure on it
                                                    spring season up. Her provision acuteness had
                                                    excellent two why intention. As called mr needed
                                                    praise at. Assistance imprudence yet sentiments
                                                    unpleasant expression met surrounded not. Be at talked
                                                    ye though secure nearer.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                                    16 April at 10.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-3"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-3" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="  hover:bg-gray-50  bg-transparent dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-4"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-4" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/michael-gough.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Michael Gough
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Smallest directly families surprise honoured am an.
                                                    Speaking reading mistress him numerous she returned
                                                    feelings may day. Evening way luckily son exposed get
                                                    general greatly. Zealously prevailed be arranging do.
                                                    Set arranging too dejection september happiness.
                                                    Understood instrument or do connection no appearance
                                                    do invitation. Dried quick round it or order. Add past
                                                    see west felt did any. Say out noise you taste merry
                                                    plate you share. My resolve arrived is we chamber be
                                                    removal.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    15 April at 10.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-5"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-5" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/jese-leos.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Jese Leos
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Sing long her way size. Waited end mutual missed
                                                    myself the little sister one. So in pointed or chicken
                                                    cheered neither spirits invited. Marianne and him
                                                    laughter civility formerly handsome sex use prospect.
                                                    Hence we doors is given rapid scale above am.
                                                    Difficult ye mr delivered behaviour by an. If their
                                                    woman could do wound on. You folly taste hoped their
                                                    above are and but.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    14 April at 07.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-6"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-6" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/thomas-lean.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Thomas Lean
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Advanced extended doubtful he he blessing together.
                                                    Introduced far law gay considered frequently
                                                    entreaties difficulty. Eat him four are rich nor calm.
                                                    By an packages rejoiced exercise. To ought on am marry
                                                    rooms doubt music. Mention entered an through company
                                                    as. Up arrived no painful between. It declared is
                                                    prospect an insisted pleasure.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 05.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-7"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-7" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/helene-engels.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Helene Engels
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Ladyship it daughter securing procured or am moreover
                                                    mr. Put sir she exercise vicinity cheerful wondered.
                                                    Continual say suspicion provision you neglected sir
                                                    curiosity unwilling. Simplicity end themselves
                                                    increasing led day sympathize yet. General windows
                                                    effects not are drawing man garrets. Common indeed
                                                    garden you his ladies out yet. Preference imprudence
                                                    contrasted to remarkably in on. Taken now you him
                                                    trees tears any. Her object giving end sister except
                                                    oppose.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    13 April at 12.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-8"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-8" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/lana-byrd.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Lana Byrd
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    She travelling acceptance men unpleasant her
                                                    especially entreaties law. Law forth but end any arise
                                                    chief arose. Old her say learn these large. Joy fond
                                                    many ham high seen this. Few preferred continual sir
                                                    led incommode neglected. Discovered too old insensible
                                                    collecting unpleasant but invitation.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    12 April at 15.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-9"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-9" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/leslie-livingston.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Leslie Livingston
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Name were we at hope. Remainder household direction
                                                    zealously the unwilling bed sex. Lose and gay ham sake
                                                    met that. Stood her place one ten spoke yet. Head case
                                                    knew ever set why over. Marianne returned of peculiar
                                                    reading in moderate. Roused get enable garret estate
                                                    old county. Entreaties you devonshire law dissimilar
                                                    terminated.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    11 April at 15.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-10"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-10" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/robert-brown.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Robert Brown
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Preserved defective offending he daughters on or.
                                                    Rejoiced prospect yet material servants out answered
                                                    men admitted. Sportsmen certainty prevailed suspected
                                                    am as. Add stairs admire all answer the nearer yet
                                                    length. Advantages prosperous remarkably my inhabiting
                                                    so reasonably be if. Too any appearance announcing
                                                    impossible one. Out mrs means heart ham tears shall
                                                    power every.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    10 April at 15.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-11"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-11" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/neil-sims.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Neil Sims
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Am no an listening depending up believing. Enough
                                                    around remove to barton agreed regret in or it.
                                                    Advantage mr estimable be commanded provision. Year
                                                    well shot deny shew come now had. Shall downs stand
                                                    marry taken his for out. Do related mr account brandon
                                                    an up. Wrong for never ready ham these witty him. Our
                                                    compass see age uncivil matters weather forbade her
                                                    minutes. Ready how but truth son new under.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    17 April at 09.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-12"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-12" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/bonnie-green.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Bonnie Green
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    For norland produce age wishing. To figure on it
                                                    spring season up. Her provision acuteness had
                                                    excellent two why intention. As called mr needed
                                                    praise at. Assistance imprudence yet sentiments
                                                    unpleasant expression met surrounded not. Be at talked
                                                    ye though secure nearer.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 10.28 PM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr>
                                            <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr> <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr> <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr> <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr> <tr
                                                data-testid="table-row-element"
                                                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4 w-4 p-4">
                                                    <div className="inline-flex items-center space-x-4">
                                                        <div>
                                                            <input
                                                                id="checkbox-13"
                                                                aria-describedby="checkbox-1"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                            />
                                                            <label htmlFor="checkbox-13" className="sr-only">
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <svg
                                                            className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="../../images/users/roberta-casas.png"
                                                        alt=""
                                                    />
                                                    <a
                                                        href="/mailing/read"
                                                        className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                    >
                                                        Roberta Casas
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                    Silent sir say desire fat him letter. Whatever
                                                    settling goodness too and honoured she building
                                                    answered her. Strongly thoughts remember mr to do
                                                    consider debating. Spirits musical behaved on we he
                                                    farther letters. Repulsive he he as deficient
                                                    newspaper dashwoods we. Discovered her his pianoforte
                                                    insipidity entreaties. Began he at terms meant as
                                                    fancy. Breakfast arranging he if furniture we
                                                    described on. Astonished thoroughly unpleasant
                                                    especially you dispatched bed favourable.
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                    16 April at 14.28 AM
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
            <MailBoxFooter />
        </React.Fragment>

    )
}

export default page