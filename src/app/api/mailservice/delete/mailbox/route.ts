import { headers } from 'next/headers'
import { staticImapConn } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
 
export async function GET(req: NextRequest) {
   try {
    const headersInstance = headers()
    const user = headersInstance.get('iauth')!
    const client = await staticImapConn(user)
    await client.mailboxDelete('deleted/test-1694866213507');
   
    return NextResponse.json({
       success:true,
       message:"Folder Deleted" ,
       result:1
    })
   } catch (error) {
    return NextResponse.json({
        success:false,
        message:"Something Went Wrong" ,
        result:null
     })
   }

}