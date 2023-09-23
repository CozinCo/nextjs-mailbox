import React from 'react'

interface  PropsType {
  open:boolean,
  key:number,
  label:string,
  icon?:string
}
const LeftSidebarItem = ({open,key,label,icon}:PropsType) => {
  return (
    <li key={key}>
    <div className="w-full">
        <a
            className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            href="/"
        >
           <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"

                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span
                className={`px-4 ${open ? "" : "ml-3"} transition-width flex-1 whitespace-nowrap`}
                data-testid="flowbite-sidebar-item-content"

            >
                {label}
            </span>
        </a>
    </div>
</li>
  )
}

export default LeftSidebarItem