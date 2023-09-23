import { headers } from 'next/headers'
import { staticImapConn } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { FetchMessageObject } from 'imapflow'

interface CustomMessageObj extends FetchMessageObject {
    id: string
}

export async function GET(req: NextRequest, { params }: { params: { mailbox: string } }) {

    try {
        let EmailData: any[] = []
    const headersInstance = headers()
    const user = headersInstance.get('iauth')!
    const client = await staticImapConn(user)
    if (client.authenticated) {
        let lock = await client.getMailboxLock(params.mailbox);
       
        // let message = await client.fetchOne("*", { source: true, flags: true, labels: true, internalDate: true });
        const mailsData= client.fetch('1:*', { envelope: true, }) as  AsyncGenerator<CustomMessageObj, never, void> 
        for await (let message of mailsData) {
            const FilterData = Object.assign({}, {
                seq: message.seq,
                id:message.id,
                date: message.envelope.date,
                subject: message.envelope.subject,
                name: message.envelope.from[0].name!,
                address: message.envelope.from[0].address!,
            })            
            EmailData.push(FilterData)
        }
        lock.release()
        return NextResponse.json({
            success: true,
            message: "MailBox Received",
            result: EmailData
        })
    }

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "MailBox Received",
            result: []
        })
    }


}