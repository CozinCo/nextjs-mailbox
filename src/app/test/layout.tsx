import React from 'react'
import TestNavbar from './components/navbar'
import TestSidebar from './components/TestSidebar'
import TestModal from './components/TestModal'

const TestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            {/* <div>
                <header className="sticky top-0 z-50 w-full lg:border-b">
                    <div className="flex h-16 items-center px-4">
                        tes
                    </div>
                </header>
            </div> */}
            <TestNavbar />
            <div>
                <div className="border-t">
                    <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] ">
                        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-[250px] shrink-0 md:sticky md:block">

                        <TestSidebar/>
                        </aside>
                        <div className='lg:border-l-2 px-1 max-h-screen'>
                            {children}
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestLayout