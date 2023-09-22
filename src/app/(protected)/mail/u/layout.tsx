import { RightClickContextMenu } from "@/components/common/contextMenu";
import MailFooter from "../../components/mailFooter";
import MailHeader from "../../components/mailHeader";
export default async function DefaultLayout({ children }: { children: React.ReactNode }) {


    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <MailHeader />
            <RightClickContextMenu>
                {children}
            </RightClickContextMenu>
            <MailFooter />
        </div>
    );
}
