import { siteConfig } from "@/config/site"

export const fetcher = async (url: string, options: any = {},): Promise<any> => {

    const res = await fetch(`${siteConfig.apiUrl}/api${url}`, {
        // next: { revalidate: 60 },
       
        ...options
    })
    const data = await res.json()

    return data
}
export const FetchMailBoxMails = async (mailboxName: string ,iauth: string) => {
   
    const response = await fetcher(`/mailservice/get-mailbox-mails/${mailboxName}`, {
      headers: {
        iauth 
      }
    })
    
    return response
  }
  export const FetchForReadMail = async (SequenceString: string = "1:*",mailboxName: string = "inbox",iauth: string) => {
     
    const response = await fetcher(`/mailservice/read/${SequenceString}-${mailboxName}`, {
      headers: {
        iauth 
      }
    })
    return response
  }
  export const SendMail = async (data:Record<string,any>,iauth:string) => {
    const response = await fetcher(`/mailservice/send`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        iauth 
      }
    })
   
    return {...response}
  }