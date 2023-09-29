import { Icons } from "@/components/icons"
import { AddressObject, Attachment, EmailAddress, HeaderValue, ParsedMail } from 'mailparser';


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
  pathAsListed: string,
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
export interface MailBoxData {
  seq: number;
  id: string;
  date: Date;
  subject: string;
  name: string;
  address: string;
}
export interface ReadMailResult {
  // Make sure lock is released, otherwise next `getMailboxLock()` never returns
  from: {
    email: string ;   
    name: string;   
  };
  to: {
    name: AddressObject[] | EmailAddress ;
    email: AddressObject[] ;
  };
  subject: string ;
  body: string | false;
  attachments: Attachment[];
  time: Date | undefined;
  headers: {
    threadTopic: HeaderValue | undefined;
    inReplyTo: HeaderValue | undefined;
    mimeVersion: HeaderValue | undefined;
  };
}
export interface AllFolders  
    {
        path: string,
        pathAsListed: string,
        flags: Record<string, any>,
        delimiter: string,
        listed: boolean,
        parentPath: string,
        parent: any[],
        name: string,
        subscribed: boolean
    }
