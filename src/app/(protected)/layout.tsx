"use client"
import React from 'react'
import { fetcher } from '@/lib/fetcher'
import RightSidebar from './components/RightSidebar';
import TrialNotice from './components/TrialNotice';
import LeftSidbar from './components/LeftSidbar';
import MainHeader from './components/MainHeader';

import { AllFolders } from '@/types/nav';


const layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(true);
    const [AllFolders, setAllFolders] = React.useState<AllFolders[]>([]);

    const FetchMailBox = React.useCallback(
        async () => {
            const { folder } = await fetcher('/mailservice/folderList', {
                headers: {
                    "iauth": "mullayam06@outlook.com"
                }
            })
            setAllFolders(folder)
            return
        },
        [],
    )

    React.useEffect(() => {
        FetchMailBox()
    },[])
    return (
        <div className="min-h-screen flex flex-col h-screen relative">
            <div>
                <MainHeader open={open} setOpen={setOpen} />
            </div>
            {/* main container */}
            <div className="flex-1 flex flex-row overflow-y-hidden pt-16 ">
                <main className={`flex-1 ${open ? "lg:ml-64 xl:ml-70" : "lg:ml-16 xl:ml-16"} relative w-full duration-75 h-full transition-width  bg-transparent overflow-y-auto `}>
                    {children}
                </main>
                {/* Left Sidebar */}
                <nav className="order-firs overflow-y-auto ">
                    <LeftSidbar open={open} AllFolders={AllFolders} />
                </nav>

                <aside className="hidden lg:block overflow-y-auto">
                    <RightSidebar />
                </aside>
            </div>
            {/* Screen Notice */}

            <TrialNotice />
        </div>
    )
}



export default layout