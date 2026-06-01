"use client";

import { Button, Avatar } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/rooms"
          className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
        >
          Rooms
        </Link>
      </li>

      <li>
        <Link
          href="/add-room"
          className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
        >
          Add Room
        </Link>
      </li>

      <li>
        <Link
          href="/my-listings"
          className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
        >
          My Listings
        </Link>
      </li>

      <li>
        <Link
          href="/my-bookings"
          className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
        >
          My Bookings
        </Link>
      </li>
    </>
  );

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
            <BookOpen className="h-5 w-4" />
          </div>

          <div>
            <h2 className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent">
              StudySpot
            </h2>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks}
        </ul>

        {user ? (
          <div className="hidden items-center gap-3 lg:flex">
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.image} />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button
              onClick={handleLogout}
              variant="danger"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/login">
              <Button
                variant="outline"
                className="h-10 bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button
                variant="solid"
                className="h-10 bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Register
              </Button>
            </Link>
          </div>
        )}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-slate-800 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-white/95 px-4 py-6 backdrop-blur-xl dark:bg-slate-950/95 lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks}
          </ul>

          {user ? (
            <div className="mt-6 flex items-center gap-3">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                variant="danger"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  variant="solid"
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;