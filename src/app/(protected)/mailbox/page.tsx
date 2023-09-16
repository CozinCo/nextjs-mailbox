import { RightClickContextMenu } from "@/components/common/contextMenu";
import MailFooter from "../components/mailFooter";
import MailHeader from "../components/mailHeader";
import MailItem from "../components/mailItem";
import { fetcher } from "@/lib/fetcher";

const FetchMails = async () => {
  const response  = await fetcher("/mailservice/read/inbox",{
    headers:{
      iauth:"mullayam06@outlook.com"
    }
  })
  return response
}
export default async function Mailbox() {
  const {result} = await FetchMails()
 
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <MailHeader />
      <RightClickContextMenu>
        <MailItem result={result}/>
      </RightClickContextMenu>      
      <MailFooter />
    </div>
  );
}
