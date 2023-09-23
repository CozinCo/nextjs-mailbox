import React from 'react'
import { MobileNav } from '@/components/shared/mobile-nav'
import { ScrollArea } from '@/components/ui/scroll-area'
import TeamSwitcher from '@/components/shared/team-switcher'
import { Search } from '@/components/shared/search'
import { UserNav } from '@/components/shared/user-nav'
import { SidebarNav } from '@/components/shared/sidebar-nav'
import SpeedDial from '@/components/common/speedDial'
import { Header } from '@/components/shared/header'
import StackedNav from './components/stacked'
import { fetcher } from '@/lib/fetcher'

const FetchMailBoxList = async () => {
    return await fetcher('/mailservice/folderList', {
        headers: {
            "iauth": "mullayam06@outlook.com"
        }
    })
}
const layout = async ({ children }: { children: React.ReactNode }) => {
    const { folder } = await FetchMailBoxList()
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <div>
                <header className="sticky top-0 inset-x-0 z-10  w-full lg:border-b">
                    <div className="flex h-16 items-center px-4">
                        <TeamSwitcher />
                        <Header className="mx-6" />
                        <MobileNav />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </header>
            </div>
            <div>
                <div className="border-t">
                    <div className="md:grid md:grid-cols-[210px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[210px_minmax(0,1fr)] ">
                        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-[250px] shrink-0 md:sticky md:block">
                            <ScrollArea className="h-full py-4 pl-2 px-4 lg:py-4">
                                <SidebarNav AllFolders={folder} />
                            </ScrollArea>

                        </aside>
                        <div className='lg:border-l-2 px-1 max-h-screen'>
                            {children}
                            <SpeedDial />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default layout