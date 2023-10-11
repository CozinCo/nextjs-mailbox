import { headers } from 'next/headers'
import { staticImapConn } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { FetchMessageObject } from 'imapflow'
import { simpleParser } from 'mailparser';
interface CustomMessageObj extends FetchMessageObject {
    id: string
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    try {
        let emailData: Record<string, any> = {}
        const headersInstance = headers()
        const [id, mailbox] = params.id.split('-')
        const user = headersInstance.get('iauth')!
        const client = await staticImapConn(user)
        if (client.authenticated) {

            let lock = await client.getMailboxLock(mailbox);
            let getMessage = await client.fetchOne(id, { source: true, flags: true, labels: true, internalDate: true }) as CustomMessageObj
            let parsed = await simpleParser(getMessage.source);
            
            emailData.from = {
                name: parsed?.from?.value[0],
                email: parsed?.from?.value[1]
            };
            emailData.to = {
                name: Array.isArray(parsed?.to) === true ? parsed?.to : parsed?.to?.value[0],
                email: Array.isArray(parsed?.to) === true ? parsed?.to : parsed?.to?.value[1],                 
            }
            emailData.replyTo = parsed?.replyTo
            emailData.subject = parsed.subject;
            emailData.body = parsed.html;
            emailData.textAsHtml = parsed.text|| parsed.textAsHtml;
            emailData.attachments = parsed.attachments;
            emailData.time = parsed.date;
            emailData.attachments = parsed.attachments;
            emailData.headers = {
                threadTopic: parsed.headers.get("thread-topic"),
                inReplyTo: parsed.headers.get("in-reply-to"),
                mimeVersion: parsed.headers.get("mime-version"),
            };  
             
          lock.release()
            return new NextResponse(JSON.stringify({ success: true, message: "", result: emailData }), {
                status: 200,
            });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
            result: []
        })
    }

}
