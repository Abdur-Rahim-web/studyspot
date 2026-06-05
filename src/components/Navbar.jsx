"use client";

import { Button, Avatar } from "@heroui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  const { data: session } = authClient.useSession();

  if (!mounted) return null;

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const navLinkClass = (path) =>
    `text-sm font-medium transition ${pathname === path
      ? "text-indigo-600 dark:text-indigo-400"
      : "text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
            <BookOpen className="h-5 w-5" />
          </div>

          <h2 className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent">
            StudySpot
          </h2>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">

          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/rooms"
              className={navLinkClass("/rooms")}
            >
              Rooms
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  href="/add-room"
                  className={navLinkClass("/add-room")}
                >
                  Add Room
                </Link>
              </li>

              <li>
                <Link
                  href="/my-listings"
                  className={navLinkClass("/my-listings")}
                >
                  My Listings
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className={navLinkClass("/my-bookings")}
                >
                  My Bookings
                </Link>
              </li>
            </>
          )}
        </ul>

        {user ? (
          <div className="hidden items-center gap-3 lg:flex">

            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <span className="font-medium">
                {user.name}
              </span>
            </div>

            <Button
              color="danger"
              onClick={handleLogout}
            >
              Logout
            </Button>

          </div>
        ) : (
          <div className="hidden items-center gap-3 lg:flex">

            <Link href="/login">
              <Button
                className="bg-emerald-600 text-white"
              >
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button
                className="bg-indigo-600 text-white"
              >
                Register
              </Button>
            </Link>

          </div>
        )}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-white px-4 py-5 dark:bg-slate-950 lg:hidden">

          <ul className="flex flex-col gap-4">

            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/rooms"
                className={navLinkClass("/rooms")}
              >
                Rooms
              </Link>
            </li>

            {user && (
              <>
                <li>
                  <Link
                    href="/add-room"
                    className={navLinkClass("/add-room")}
                  >
                    Add Room
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-listings"
                    className={navLinkClass("/my-listings")}
                  >
                    My Listings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-bookings"
                    className={navLinkClass("/my-bookings")}
                  >
                    My Bookings
                  </Link>
                </li>
              </>
            )}
          </ul>

          {user ? (
            <div className="mt-5 flex flex-col gap-3">

              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <span>{user.name}</span>
              </div>

              <Button
                color="danger"
                onClick={handleLogout}
              >
                Logout
              </Button>

            </div>
          ) : (
            <div className="mt-5 flex flex-col gap-3">

              <Link href="/login">
                <Button className="w-full bg-emerald-600 text-white">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="w-full bg-indigo-600 text-white">
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