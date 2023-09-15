import React from 'react'

const MailFooter = () => {
  return (
    <div className="w-screen bottom-0 lg:fixed items-center space-y-4 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:sticky sm:flex sm:justify-between sm:space-y-0 mt-2">
    <div className="flex flex-col gap-2">
      <div className="text-xs text-gray-500 dark:text-gray-400">
        0.1 GB of 1 GB used
      </div>
      <div
        id=":r14:"
        aria-label="progressbar"
        aria-valuenow={22}
        role="progressbar"
      >
        <div className="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-1.5">
          <div
            className="flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100 bg-blue-600 h-1.5"
            style={{ width: "22%" }}
          />
        </div>
      </div>
    </div>
    <div className="hidden items-center gap-x-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex">
      Last account activity: 2 hours ago
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 20 20"
        className="text-sm"
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
    </div>
    <div className="mb-4 flex items-center sm:mb-0 sm:hidden">
      <a
        href="#"
        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      >
        <span className="sr-only">Apps</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 20 20"
          className="text-2xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      >
        <span className="sr-only">Previous</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 20 20"
          className="text-2xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      >
        <span className="sr-only">Next</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 20 20"
          className="text-2xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing&nbsp;
        <span className="font-semibold text-gray-900 dark:text-white">
          1-25
        </span>
        &nbsp;of&nbsp;
        <span className="font-semibold text-gray-900 dark:text-white">
          2290
        </span>
      </span>
    </div>
  </div>
  )
}

export default MailFooter