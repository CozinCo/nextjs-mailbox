import { headers } from 'next/headers'
import { staticImapConn } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
 
export async function GET(req: NextRequest) {
    const headersInstance = headers()
    const user = headersInstance.get('iauth')!
    const client = await staticImapConn(user)
    const folder = await client.list()
    return NextResponse.json({
        folder,
    })

}