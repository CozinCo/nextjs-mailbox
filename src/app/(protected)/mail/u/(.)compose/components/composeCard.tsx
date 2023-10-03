"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DismissModalContext } from '@/components/modal/modal';
import { TagsInput } from "react-tag-input-component";
import { SendMail } from '@/lib/fetcher'
import moment from 'moment';
import { toast } from '@/hooks/use-toast';
 
export default function ComposeCard() {
    const { onDismiss } = React.useContext(DismissModalContext);
    const [selected, setSelected] = React.useState<string[]>([]);
     

    const handleSendButtonClick = async () => {     
        const SendData = {
            "subject": (document.getElementById("subject") as HTMLInputElement).value,
            "message": (document.getElementById("message") as HTMLTextAreaElement).value,
            "recipients": selected
        }
        const { data } = await SendMail(SendData)
        if (!data.success) {
            toast({
                variant: "destructive",
                title: data.message,

            })
            return
        }
        onDismiss()
        return toast({
            variant: "default",
            title: "Message sent",
            description: moment(new Date()).format('MMMM Do YYYY,[at] h:mm:ss'),
        });
    }
    return (
        <>
            <div className="my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]">
                <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                >
                    <circle cx={8} cy={8} r={8} strokeWidth={0} />
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6.75 7.75h1.5v3.5"
                    />
                    <circle cx={8} cy={4} r=".5" fill="none" />
                </svg>
                <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                    <p>In Trial Mode, you can send up to 100 emails per day. 
                        Before you can make requests to the SEND, you will need to grab
                        your API key from your dashboard.
                    </p>
                </div>
            </div>
            <div className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
                <div className="flex min-h-[calc(theme(spacing.12)+1px)] items-center flex-wrap   gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                    <h2 className="mr-auto py-3 inline-flex gap-0.5 justify-center overflow-hidden   text-sm font-medium transition rounded-full bg-zinc-900  px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300">
                        Send a New Mail
                    </h2>
                    <div className="flex justify-between items-center py-3 gap-2">

                        <a className="px-2 py-1 bg-rose-600 dark:text-white text-gray-100 font-bold rounded hover:bg-gray-500" href="#">[ ]</a>
                        <span className="px-2 py-1 cursor-pointer bg-amber-600 dark:text-white text-gray-100 font-bold rounded hover:bg-gray-500" onClick={() => onDismiss()}>Close</span>
                    </div>
                </div>
                <div className="group dark:bg-white/2.5 dark:text-white">
                    <div className="max-w-4xl px-10 my-4 bg-transparent shadow-md dark:text-white">
                        <div className="">
                            <a className="text-2xl text-white font-bold   hover:text-gray-600" href="#"> Send a message to your friend developers</a>
                            <div className="grid w-full gap-2 mt-2">
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="fruits"
                                    classNames={{
                                        input: "flex w-full rounded-md border border-input px-3 text-sm bg-transparent dark:placeholder:text-slate-900 dark:text-slate-900  text-black  disabled:cursor-not-allowed disabled:opacity-50",
                                        tag: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 text-sm  cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                                    }}
                                    placeHolder="To Email"
                                />

                                <Input type="text" id='subject' placeholder="Subject" />
                                <Textarea id='message' placeholder="Type your message here." rows={18} />
                                    
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={handleSendButtonClick}
                                type="button"
                                className="inline-flex gap-0.5 justify-center overflow-hidden text-normal text-white transition bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                            >
                                Send
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                    className="mt-0.5 h-5 w-5 -mr-1"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                                    />
                                </svg>
                            </button>



                            <div>
                                <span className="flex items-center">
                                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
                                    <h1 className="text-white font-bold">Khatab wedaa</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}
