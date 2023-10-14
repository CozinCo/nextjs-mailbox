"use client"
import React from 'react'
import { fetcher } from '@/lib/fetcher'
import RightSidebar from './components/RightSidebar';
import TrialNotice from './components/TrialNotice';
import LeftSidbar from './components/LeftSidbar';
import MainHeader from './components/MainHeader';

import { AllFolders } from '@/types/nav';
import BackgroundLayer from '@/components/common/backgroundlayer'
import OfferBbanner from '@/components/common/offer-banner'; 
import ChatBox from '@/components/shared/chatBox';
import { useAuth } from '@/hooks/useAuth';
import { IUser } from '@/context/AuthContext';


const layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(true);
    const ctx = useAuth()
    const iauth =  JSON.parse(localStorage.getItem("iauth")!) as IUser  
     
    const [AllFolders, setAllFolders] = React.useState<AllFolders[]>([]);
    const FetchMailBox = React.useCallback(
        async () => {
            const { folder } = await fetcher('/mailservice/folderList', {
                headers: {
                    iauth:iauth.email
                }
            })
            setAllFolders(folder)
            return
        },
        [],
    )
 
    React.useEffect(() => {
        FetchMailBox()
    }, [])
    return (
        <div className="min-h-screen flex flex-col h-screen relative">
            <BackgroundLayer />
            
            <div>
                <MainHeader open={open} setOpen={setOpen}  ctx={ctx}/>
            </div>
            {/* main container */}
            <div className="flex-1 flex flex-row overflow-y-hidden pt-16 ">
                <main className={`flex-1 ${open ? "lg:ml-64 xl:ml-70" : "lg:ml-16 xl:ml-16"} relative w-full duration-75 h-full transition-width  bg-transparent overflow-y-auto `}>
                    {/* <OfferBbanner/> */}

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
            {ctx?.openChatBox && <ChatBox closeChatBox={ctx}/>}
            

            <TrialNotice />
        </div>
    )
}



export default layout