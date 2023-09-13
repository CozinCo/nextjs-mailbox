import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { MainNav } from "@/app/(protected)/components/main-nav"
import { Search } from "@/app/(protected)/components/search"
import TeamSwitcher from "@/app/(protected)/components/team-switcher"
import { UserNav } from "@/app/(protected)/components/user-nav"
import Sidebar from "@/components/shared/sidebar"
import SpeedDial from "@/components/common/speedDial"
import localFont from 'next/font/local'
const CalSans = localFont({ src: '../../assets/fonts/CalSans-SemiBold.woff2', variable: '--font-cal-sans',fallback: ["--font-inter" ]});


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function ProtectedLayout(props: { children: React.ReactNode }): JSX.Element  {
  return (
    <div className={`${CalSans.variable} flex-col md:flex `}>
    
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-8 grid-cols-0">
            <Sidebar />
            <div className="col-span-7 lg:border-l py-2">               
            {props.children}    
            <SpeedDial />       
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
