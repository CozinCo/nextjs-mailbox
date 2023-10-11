import fs from 'fs'
import path from 'path'
 
import { ImapFlow } from 'imapflow';
import nodemailer from "nodemailer";

import { ServerConfig } from '@/config/mailServer'
export const configDir = path.join(process.cwd(), 'src', "data")
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export function validateEmail(email:string) {
    return emailRegex.test(email);
  }
export const SMTP_SERVER_CONFIG = async (currentUser:string) => {
    const data = await ReadCurrentUserConfig(currentUser)
    const transporter = nodemailer.createTransport({
        host: String(data.smtp_host),
        port: Number(data.smtp_port),
        secure:Boolean(data.secure),         
        auth: { user: data.user, pass: data.password },
    });
    return transporter
}
export const staticImapConn = async (currentUser: string) => {
    const data = await ReadCurrentUserConfig(currentUser)
    const client = new ImapFlow({
        logger: false,
        host: data.imap_host,
        port: data.imap_port,
        secure: true,
        auth: { user: data.user, pass: data.password },
    });
    await client.connect();
    return client
}
export const staticImapClient = (user: string) => staticImapConn(user)
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
