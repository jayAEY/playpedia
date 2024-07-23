import UserInfo from "@/components/User-Info";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <UserInfo
      DataTable={DataTable}
      // Payment={Payment}
      columns={columns}
    />
  );
};

export default Dashboard;
