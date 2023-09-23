import React from 'react'
import RightSidebar from './components/RightSidebar';
import TrialNotice from './components/TrialNotice';
import LeftSidbar from './components/LeftSidbar';
import MainHeader from './components/MainHeader';

const MailLayout = ({ children }: { children: React.ReactNode }) => {
    const open = true

    return (
        <div className="min-h-screen flex flex-col h-screen relative">
            <div>
                <MainHeader />
            </div>
            {/* main container */}
            <div className="flex-1 flex flex-row overflow-y-hidden pt-16 ">
                <main className={`flex-1 ${open ? "lg:ml-64 xl:ml-70" : "lg:ml-16 xl:ml-16"} relative w-full duration-75 h-full transition-width  bg-transparent overflow-y-auto `}>
                    {children}                    
                </main>
                {/* Left Sidebar */}
                <nav className="order-firs overflow-y-auto ">
                    <LeftSidbar open={open} />
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

export default MailLayout