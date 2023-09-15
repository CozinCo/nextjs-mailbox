import fs from 'fs'
import imap from 'imap';
import path from 'path'
import { NextRequest, NextResponse } from 'next/server';
import { ServerConfig } from '@/config/mailServer';
import { configDir } from '@/lib/helpers';
type RequestBody = {
    email: string;
    password: string;
}
export async function POST(req: NextRequest) {
    let isError = false;
    try {
        const body = await req.json() as RequestBody;
        const extractDomain = body.email.split('@')[1] as keyof typeof ServerConfig;
        const isExistingDomain = ServerConfig.hasOwnProperty(extractDomain)
        if (!isExistingDomain) {
            return new NextResponse(JSON.stringify({ success: isExistingDomain, message: "The Domain you tried is not exist in server config file. Please add Domain and SMTP/IMAP configurations too", result: null }), {
                status: 401,
            });
        }
        const imapConfig = {
            host: ServerConfig[extractDomain].imap_host,
            port: ServerConfig[extractDomain].imap_port as number,
            tls: true, user: body.email, password: body.password
        };
        const imapConnection = new imap(imapConfig);
          imapConnection.connect()        
       
        fs.createWriteStream(`${configDir}/${body.email}.json`, { encoding: 'utf-8' }).write(JSON.stringify({ ...ServerConfig, [extractDomain]: { ...ServerConfig[extractDomain], user: body.email, password: body.password } }));
        
        if (isError) {
            new NextResponse(JSON.stringify({ success: false, message: "Authentication Failed" }), {
                status: 401,
            });
        } else {
            return new NextResponse(JSON.stringify({ success: true, message: "Authentication Successful" }), {
                status: 200,
            });
        }


    } catch (error: any) {
        console.log("test")
        return new NextResponse(JSON.stringify({ success: false, message: error.message }), {
            status: 401,
        });
    }
}