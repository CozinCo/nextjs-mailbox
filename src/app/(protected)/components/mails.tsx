import React from "react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

const Mails = () => {
 
  return (
    
      <main className=" relative bg-gray-50 dark:bg-slate-900 rounded-lg mt-2">     

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block  align-middle">
              <div className="overflow-hidden shadow">
                <div
                  data-testid="table-element"
                  className="relative overflow-x-auto shadow-md sm:rounded-lg"
                >
                  <ScrollArea>
                    <table className=" text-left text-sm text-gray-500 dark:text-gray-400  divide-y divide-gray-200">

                      <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-800">
                        <tr
                          data-testid="table-row-element"
                          className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 w-4 p-4">
                            <div className="inline-flex items-center space-x-4">
                              <div>
                                <input
                                  id="checkbox-1"
                                  aria-describedby="checkbox-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                />
                                <label htmlFor="checkbox-1" className="sr-only">
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
                            <Link
                              href="/mailbox/read"
                              className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                            >
                              Neil Sims
                            </Link>
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-white bg-rose-700 no-underline group-hover:no-underline">
                              Inbox
                            </span>
                          </td>
                          <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                            Am no an listening depending up believing. Enough around
                            remove to barton agreed regret in or it. Advantage mr
                            estimable be commanded provision. Year well shot deny shew
                            come now had. Shall downs stand marry taken his for out.
                            Do related mr account brandon an up. Wrong for never ready
                            ham these witty him. Our compass see age uncivil matters
                            weather forbade her minutes. Ready how but truth son new
                            under.
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
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
                            zealously the unwilling bed sex. Lose and gay ham sake met
                            that. Stood her place one ten spoke yet. Head case knew
                            ever set why over. Marianne returned of peculiar reading
                            in moderate. Roused get enable garret estate old county.
                            Entreaties you devonshire law dissimilar terminated.
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                          
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </main>
     

  );
};

export default Mails;
