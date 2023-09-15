import { NavItem, NavItemWithChildren } from "@/types/nav";

export const SidebarNavMenu = [

    {
        title: "All Mail",
        items: [
            {
                title: "Inbox",
                href: "/mailbox",
                label: "Inbox",
                items: [],
                
            },
            {
                title: "Starred",
                href: "/starred",
                items: [],
            },
            {
                title: "Sent",
                href: "/sent",
                items: [],
            },
            {
                title: "Drafts",
                href: "/drafts",
                items: [],
            },
            
            {
                title: "Spam",
                href: "/spam",
                items: [],
            },
            {
                title: "Trash",
                href: "/trash",
                items: [],
            },
        ],
    }
]