import { ServerConfig } from "@/config/mailServer";
import { IMAP_ServerConfig } from "@/lib/helpers";
import { MailBoxes } from 'imap'
import { NextRequest, NextResponse } from "next/server";
// import { ImapFlow } from 'imapflow';
export async function GET(req: NextRequest) {
    const credential = req.headers.get('iauth') as keyof typeof ServerConfig;
   
    const imapConnection = await IMAP_ServerConfig(credential)
    imapConnection.once('ready', function () {
        imapConnection.getBoxes((err: any, mailboxList: MailBoxes) => {
            if (err) {
                console.error(err);
                return;
            }
            const mailboxNames = Object.keys(mailboxList);
            return new NextResponse(JSON.stringify({ success: false, message: "MailBox Received",result:mailboxNames }), {
                status: 401,
            });
        });
       
    })
    return new NextResponse(JSON.stringify({ success: false, message: "MailBox Received",result:"mailboxNames" }), {
        status: 401,
    });
}