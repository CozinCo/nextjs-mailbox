import fs from 'fs'
import path from 'path'
import imap from 'imap'
import { ImapFlow } from 'imapflow';

import { ServerConfig } from '@/config/mailServer'
export const configDir = path.join(process.cwd(), 'src', "data")

export const staticImapConn = async (currentUser: string) => {
    const data = await ReadCurrentUserConfig(currentUser)   
    const client = new ImapFlow({
        logger: false,
        host: data.imap_host,
        port: 993,
        secure: true,
        auth: { user:data.user, pass:data.password },
    });
    await client.connect();
    return client
}
export const staticImapClient = (user:string)=>staticImapConn(user)
export const ReadCurrentUserConfig = (currentUser: string) => {
    const data = fs.readFileSync(`${configDir}/${currentUser}.json`, { encoding: 'utf-8' })
    const config = JSON.parse(data)
    const domain = currentUser.split('@')[1]
    return config[domain]
}
export const createImapConnection = async (host: keyof (typeof ServerConfig), user: string, pass: string) => {
    const client = new ImapFlow({
        logger: false,
        host: host,
        port: 993,
        secure: true,
        auth: { user, pass },
    });
    await client.connect();
    return client
}
