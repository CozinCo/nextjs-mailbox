import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "../ui/scroll-area"
import { useAuth } from "@/hooks/useAuth"

export function ChatsList({ children }: { children: React.ReactNode }) {
  const ctx =  useAuth()
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle> <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">QuickChat</div>
          </div>
          </SheetTitle>

        </SheetHeader>
        <div className="grid gap-4 py-2">
          <div className="flex flex-col py-8 pl-6 pr-2 flex-shrink-0">

            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <ScrollArea className="h-96">
                <div className="flex flex-col space-y-1 mt-4 -mx-2 px-2">
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" onClick={() => ctx?.setOpenChatBox(!ctx?.openChatBox)}>
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      H
                    </div>
                    <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                  </button>
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                      M
                    </div>
                    <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                    <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                      2
                    </div>
                  </button>
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                      P
                    </div>
                    <div className="ml-2 text-sm font-semibold">Philip Tucker</div>
                  </button>
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                      C
                    </div>
                    <div className="ml-2 text-sm font-semibold">Christine Reid</div>
                  </button>
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                      J
                    </div>
                    <div className="ml-2 text-sm font-semibold">Jerry Guzman</div>
                  </button>
                </div>
              </ScrollArea>

              <div className="flex flex-row items-center justify-between text-xs mt-6">
                <span className="font-bold">Archivied</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  7
                </span>
              </div>

              <ScrollArea>
                <div className="flex flex-col space-y-1 mt-4 -mx-2 px-2">
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      H
                    </div>
                    <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                  </button>
                  <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                      M
                    </div>
                    <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                    <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                      2
                    </div>
                  </button>
                </div>
              </ScrollArea>


            </div>
          </div>

        </div>

      </SheetContent>
    </Sheet>
  )
}
