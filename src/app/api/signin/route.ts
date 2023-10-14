import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server';
import { ServerConfig } from '@/config/mailServer';
import { configDir, createImapConnection } from '@/lib/helpers';

type RequestBody = {
    email: string;
    password: string;
}
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json() as RequestBody;
        const extractDomain = body.email.split('@')[1] as keyof typeof ServerConfig;
        const domains = fs.readdirSync(configDir)
        if (!domains.includes(`${body.email}.json`)) {
            return new NextResponse(JSON.stringify({ success: false, isExistingDomain:extractDomain, message: "The Domain you tried is not exist in server config file. Please add Domain and SMTP/IMAP configurations too", result: null }), {
                status: 200,
            });
        }
       
        const client = await createImapConnection(extractDomain, body.email, body.password);
        if (!client.authenticated) {
            new NextResponse(JSON.stringify({ success: false, message: "Authentication Failed" }), {
                status: 200,
            });
        }      
  
        return new NextResponse(JSON.stringify({ success: true, message: "Authentication Successful" }), {
            status: 200,
        });
    } catch (error: any) {
        console.log(error)
        return new NextResponse(JSON.stringify({ success: false, message: error.responseText }), {
            status: 200,
        });
    }
}