import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server';
import { configDir } from '@/lib/helpers';
import { ServerConfig } from '@/config/mailServer';

type RequestBody = {
    domain?: string;
    imap_host?: string;
    imap_port?: number;
    name: string;
    smtp_host?: string;
    smtp_port?: number
    user: string;
    password: string;
}
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let configJSON: Record<string, any> = {};
        const body = await req.json() as RequestBody;
        const domainName = (body.domain!).toLowerCase();
        // fs.readdirSync(configDir).forEach(file => {
        //     if (file.includes(body.name)) {
        //         configJSON = JSON.parse(fs.readFileSync(`${configDir}/${file}`, { encoding: 'utf-8' }));
        //     }
        //     return new NextResponse(JSON.stringify({ success: false, message: "Tenant is already exist", result: null }), {
        //         status: 200,
        //     });
        // })
        delete body.domain
        if (domainName === "gmail.com" || domainName === "outlook.com") {
            configJSON = {
                ...ServerConfig,                
                [domainName]:{
                    ...ServerConfig[domainName],
                    user: body.user,
                    password: body.password
                }             
            }
        } else {
            configJSON = {
                ...ServerConfig,
                [domainName]: {
                    ...body
                }
            }
        }        
        // fs.createWriteStream(`${configDir}/${body.user}.json`, { encoding: 'utf-8' }).write(JSON.stringify(configJSON));

        return new NextResponse(JSON.stringify({ success: true, message: "Account Setup Successfull", result: { name: body.name, email: body.user } }), {
            status: 200,
        });
    } catch (error: any) {

        return new NextResponse(JSON.stringify({ success: false, message: "Something Went Wrong", result: 0 }), {
            status: 200,
        });
    }
}