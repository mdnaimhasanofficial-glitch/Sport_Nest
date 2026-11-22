import DashboardSidebar from "@/components/dashboard/shared/DashboardSidebar";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  const role = session?.user?.role || "user";
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar role={role} />

      <main className="min-w-0 flex-1 p-6">{children}</main>
    </div>
  );
}
