import { headers } from 'next/headers'
import { SMTP_SERVER_CONFIG } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
type RequestBody = {
    recipients: string[];
    message: string;
    subject?: string;
    cc?: string[];
    bcc?: string[];
attachments?: string[];
}
export async function POST(req: NextRequest) {
   try {
    const headersInstance = headers()
    const body = await req.json() as RequestBody;
    const user = headersInstance.get('iauth')!
    const transporter = await SMTP_SERVER_CONFIG(user)
    const info = await transporter.sendMail({
        from: user, // sender address
        to: body.recipients, // list of receivers
        subject: body.subject, // Subject line
        text: body.message, // plain text body
        html: body.message, 
      });    
      console.log("Message sent: %s", info.messageId);
    return NextResponse.json({
       success: true,
       message:"Mail Sent Successfully",
    })

   } catch (error) {
    return NextResponse.json({
        success: false,
       message:"Something went Wrong",

     })
   }
}