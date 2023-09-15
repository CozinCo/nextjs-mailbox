import fs from 'fs'
import path from 'path'
import imap from 'imap'
import { ServerConfig } from '@/config/mailServer'
export const configDir = path.join(process.cwd(), 'src', "data")

export const IMAP_ServerConfig = async (currentUser: keyof typeof ServerConfig) => {
    const data = await ReadCurrentUserConfig(currentUser)
    const imapConfig = {
        host: data.imap_host,
        port: data.imap_port as number,
        tls: true, user: data.user, password: data.password
    };
    const imapConnection = new imap(imapConfig);
    imapConnection.connect()
    return imapConnection
}
export const ReadCurrentUserConfig = (currentUser: keyof typeof ServerConfig) => {
    const data = fs.readFileSync(`${configDir}/${currentUser}.json`, { encoding: 'utf-8' })
    const config = JSON.parse(data)
    const domain = currentUser.split('@')[1]
    return config[domain]
}