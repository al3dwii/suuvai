
// src/app/(main)/admin-dashboard/page.tsx  (or whatever the route file is)

import { AdminDashboardCard } from "@/components/admin-dashboard-card";
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { UserTable } from "@/components/custom/UserTable";
import {
  getAllUsersWithCount,
  getNewUsersTodayCount,
} from "@/lib/queries";

export const dynamic = "force-dynamic";

interface DashboardProps {
  searchParams: { page?: string; [key: string]: string | undefined };
}

export default async function AdminDashboard({ searchParams }: DashboardProps) {
  /* -------- Clerk v6 changes -------- */
  const { userId } = await auth();          // ← await
  if (!userId) redirect("/sign-in");

  const clerk = await clerkClient();        // ← initialise backend SDK
  const user  = await clerk.users.getUser(userId);

  if (user.publicMetadata?.isAdmin !== true) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Unauthorized</h2>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  /* Pagination & stats */
  const page         = parseInt(searchParams.page || "1", 10);
  const limit        = 10;
  const { users, totalUsers } = await getAllUsersWithCount(page, limit);
  const newUsersToday        = await getNewUsersTodayCount();

  /* Render */
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <AdminDashboardCard
              title="Total Users"
              value={String(totalUsers)}
              description="All registered users so far"
              trend={0}
              icon="users"
            />
            <AdminDashboardCard
              title="New Users Today"
              value={String(newUsersToday)}
              description="Number of users who joined since midnight"
              trend={0}
              icon="users"
            />
          </div>
        </div>

        <UserTable
          users={users as []}
          totalUsers={totalUsers}
          currentPage={page}
          limit={limit}
        />
      </main>
    </div>
  );
}
