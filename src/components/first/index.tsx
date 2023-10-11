"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "../ui/scroll-area"
import { useAuth } from "@/hooks/useAuth"
const Domains = [
  "Outlook",
  "Gmail",
  "Other"
]
const ConfigFields = [
  {
    name: "imap_host",
    label: "Imap Host",
    placeholder: "mail.domain.com",

  },
  {
    name: "imap_port",
    label: "Imap Port",
    placeholder: "993",
  },
  {
    name: "smtp_host",
    label: "SMTP Host",
    placeholder: "smtp/mail.domain.com",
  },
  {
    name: "smtp_port",
    label: "SMTP Port",
    placeholder: "465/587",
  },
  {
    name: "user",
    label: "Username",
    placeholder: "Username",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
]
export function CardWithForm() {
  const ctx = useAuth()
  const [name, setName] = React.useState("")
  const [domain, setDomain] = React.useState<string | null>(null)
  const [config, setConfig] = React.useState<Record<string, any> | null>(null)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value })
  }
  const handleCreateButtonSubmit = async () => {

    // e.preventDefault()
    try {
      ctx?.setLoader(true)
      //   const res = await ctx?.createMailAccount(name, domain, config)
      // if (res) {
      //   setName("")
      //   setDomain(null)
      //   setConfig(null)
      // }
    } catch (error) {

    } finally {
      ctx?.setLoader(false)
    }
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Setup New Mail Account</CardTitle>
        <CardDescription className="text-center">Deploy your new Mailbox Account in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="domain">Domain</Label>
              <Select onValueChange={(value) => setDomain(value)}>
                <SelectTrigger id="domain">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Outlook</SelectItem>
                  <SelectItem value="1">Gmail</SelectItem>
                  <SelectItem value="2">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ScrollArea className={!domain ? "" : "h-56"}>
              {domain && Domains[+domain] === "Other" && <div className="flex flex-col space-y-1.5">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="domainname">
                    Domain Name
                  </Label>
                  <Input placeholder="Domain Name" value="" onChange={(e) => setDomain(e.target.value)} />
                </div>
              </div>}
              {domain &&
                <div className="text-center">Mail Server Configuration</div> &&
                ConfigFields.map((item: any, index) =>
                (
                  <React.Fragment key={index}>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="mt-2" htmlFor={item.name}>{item.label}</Label>
                      <Input placeholder={item.placeholder} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                  </React.Fragment>

                )
                )
              }
            </ScrollArea>

          </div>
        </form>


      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={()=>handleCreateButtonSubmit}>Create</Button>
      </CardFooter>
    </Card>
  )
}
