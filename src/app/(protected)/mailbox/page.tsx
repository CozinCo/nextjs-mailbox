import { RightClickContextMenu } from "@/components/common/contextMenu";
import MailFooter from "../components/mailFooter";
import MailHeader from "../components/mailHeader";
import MailItem from "../components/mailItem";

export default async function Mailbox() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <MailHeader />
      <RightClickContextMenu>
        <MailItem />
      </RightClickContextMenu>      
      <MailFooter />
    </div>
  );
}
