import { staticImapConn } from "@/lib/helpers";
import { MailBoxes } from 'imap'
import { NextRequest, NextResponse } from "next/server";
// import { ImapFlow } from 'imapflow';
export async function GET(req: NextRequest) {
    const credential = req.headers.get('iauth')!  
   
    const client = await staticImapConn(credential)
    client.status("inbox",{recent:true,highestModseq:true,messages:true,uidNext:true,uidValidity:true,unseen:true})
    
     
    return new NextResponse(JSON.stringify({ success: false, message: "MailBox Received",result:"mailboxNames" }), {
        status: 401,
    });
}