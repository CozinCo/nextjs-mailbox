import { siteConfig } from "@/config/site"

export const fetcher = async (url: string, options: any = {},): Promise<any> => {

    const res = await fetch(`${siteConfig.apiUrl}/api${url}`, {
        next: { revalidate: 30 },
        ...options
    })
    const data = await res.json()

    return data
}
export const FetchMailBoxMails = async (mailboxName: string = "inbox") => {
    const response = await fetcher(`/mailservice/read/${mailboxName}`, {
      headers: {
        iauth: "mullayam06@outlook.com"
      }
    })
    return response
  }