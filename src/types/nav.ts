import { Icons } from "@/components/icons"

export interface SidebarNavProps {
  items: SidebarNavItem[]
}
export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
export interface SidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export interface MainNavItem extends NavItem { }

export interface SidebarNavItem extends NavItemWithChildren { }
export interface FolderFromApi {
  path: string,
  pathAsListed:string,
  flags: {},
  delimiter: string,
  listed: boolean,
  parentPath: '',
  parent: any[],
  name: string,
  subscribed: boolean,
  specialUse: string,
  specialUseSource: string
}