"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface UserDropdownProps {
  user: {
    name?: string | null;
    email?: string;
    image?: string | null;
  };
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full cursor-pointer"
      >
        <Image
          width={50}
          height={50}
          src={user.image || "/default-avatar.png"}
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover border"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-12 z-50 w-52 rounded-xl bg-white p-2 shadow-xl text-gray-800 border">
            <div className="border-b px-3 py-2 mb-2">
              <p className="font-semibold truncate">{user.name || "User"}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              Dashboard
            </Link>

            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              My Profile
            </Link>

            <button
              onClick={async () => {
                await authClient.signOut();
                setIsOpen(false);
                router.refresh();
              }}
              className="w-full text-left rounded-lg px-3 py-2 text-red-600 hover:bg-red-50"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
