"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  CalendarCheck,
  Wrench,
  Users,
  Settings,
  Headset,
  ChevronRight,
  Menu,
  X,
  Building2,
  Droplets,
  UserRound,
} from "lucide-react";

type UserRole = "user" | "admin" | "branchmanager";

interface DashboardSidebarProps {
  role: UserRole;
}

const roleBasedSidebarItems = {
  user: [
    {
      title: "Dashboard",
      href: "/user/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Booking",
      href: "/user/dashboard/booking",
      icon: CalendarCheck,
    },
    {
      title: "Upcoming Bookings",
      href: "/user/dashboard/upcoming",
      icon: CalendarDays,
    },
    {
      title: "My Profile",
      href: "/user/dashboard/profile",
      icon: UserRound,
    },
  ],

  admin: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      href: "/admin/dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Users",
      href: "/admin/dashboard/users",
      icon: Users,
    },
    {
      title: "Branches",
      href: "/admin/dashboard/branches",
      icon: Building2,
    },
    {
      title: "Services",
      href: "/admin/dashboard/services",
      icon: Droplets,
    },
    {
      title: "My Profile",
      href: "/admin/dashboard/profile",
      icon: UserRound,
    },
  ],

  branchmanager: [
    {
      title: "Dashboard",
      href: "/branchmanager/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Bookings",
      href: "/branchmanager/dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Services",
      href: "/branchmanager/dashboard/services",
      icon: Droplets,
    },
    {
      title: "Upcoming Bookings",
      href: "/branchmanager/dashboard/bookings/upcoming",
      icon: CalendarDays,
    },
    {
      title: "My Profile",
      href: "/branchmanager/dashboard/profile",
      icon: UserRound,
    },
  ],
};

const DashboardSidebar = ({ role }: DashboardSidebarProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic menu based on user role
  const menuItems = roleBasedSidebarItems[role] ?? [];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg bg-[#162A65] p-2.5 text-white shadow-lg lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex min-h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#162A65] text-white">
              <Wrench size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#162A65]">CarWash</h2>
              <p className="text-xs text-gray-400">
                {role === "admin"
                  ? "Admin Dashboard"
                  : role === "branchmanager"
                    ? "Branch Manager"
                    : "User Dashboard"}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === `${item.href}`
                  ? pathname === item.href
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.title}
                  href={`${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-[#162A65] text-white shadow-md shadow-blue-900/20"
                      : "text-gray-600 hover:bg-blue-50 hover:text-[#162A65]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />

                    <span className="text-sm font-medium">{item.title}</span>
                  </div>

                  {isActive && <ChevronRight size={17} />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="shrink-0 border-t border-gray-100 p-4">
          <Link
            href="/dashboard/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-blue-50 hover:text-[#162A65]"
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </Link>

          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <div className="flex items-center gap-2 text-[#162A65]">
              <Headset size={20} />
              <span className="text-sm font-semibold">Need Help?</span>
            </div>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Contact support if you need any assistance.
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            © 2026 CarWash
          </p>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
