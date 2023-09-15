import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarMenu } from "@/config/sidebarMenu"
import Link from "next/link"


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-5", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Button className="py-2 mb-4 mx-4 hidden lg:block md:block bg-blue-500" variant={"outline"}>
             New Mail
          </Button>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Primary
          </h2>
          <div className="space-y-1">
            {SidebarMenu.map((item, i) => (
              <div key={i}>
                <Link href={item.link} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-blue-200 dark:bg-amber-300 text-blue-800 dark:text-blue-800">
                    6
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Categories
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Playlists
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Labels
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
            <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
         <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
               <span className="sr-only">Close</span>
               <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
               </svg>
            </button>
         </div>
         <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
         </p>
         <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
      </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}