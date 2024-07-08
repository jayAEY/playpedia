import UserInfo from "@/components/User-Info";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return <UserInfo />;
};

export default Dashboard;
