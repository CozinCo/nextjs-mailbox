import { siteConfig } from "@/config/site"

export const fetcher = async (url: string, options: any = {},): Promise<any> => {

    const res = await fetch(`${siteConfig.apiUrl}/api${url}`, {
        next: { revalidate: 30 },
        ...options
    })
    const data = await res.json()

    return data
}