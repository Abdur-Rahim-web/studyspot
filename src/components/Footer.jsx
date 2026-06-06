import Link from "next/link";
import { FaBookOpen, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-slate-950 text-white">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

                <div>
                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg">
                            <FaBookOpen className="h-5 w-4 text-white" />
                        </div>

                        <div>
                            <h2 className="font-bold text-3xl bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                                StudySpot
                            </h2>
                            <p className="text-sm text-gray-400">
                                Smart Study Room Booking
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                        Discover quiet and modern study spaces designed for focus,
                        productivity, and collaborative learning experiences.
                    </p>

                    <div className="mt-6 flex items-center gap-4">

                        <Link
                            href="#"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-indigo-600"
                        >
                            <FaFacebook className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-indigo-600"
                        >
                            <FaXTwitter className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-indigo-600"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-indigo-600"
                        >
                            <FaInstagram className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>

                    <ul className="mt-5 space-y-3 text-sm text-gray-400">
                        <li>
                            <Link
                                href="/"
                                className="transition hover:text-indigo-400"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/rooms"
                                className="transition hover:text-indigo-400"
                            >
                                Rooms
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/add-room"
                                className="transition hover:text-indigo-400"
                            >
                                Add Room
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-listings"
                                className="transition hover:text-indigo-400"
                            >
                                My-Listings
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-bookings"
                                className="transition hover:text-indigo-400"
                            >
                                My Bookings
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Features</h3>

                    <ul className="mt-5 space-y-3 text-sm text-gray-400">
                        <li>Real-Time Room Booking</li>
                        <li>Advanced Search & Filter</li>
                        <li>Secure Authentication</li>
                        <li>Responsive Dashboard</li>
                        <li>Modern Study Environment</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>

                    <div className="mt-5 space-y-4 text-sm text-gray-400">

                        <div className="flex items-start gap-3">
                            <FaMapPin className="mt-1 h-5 w-5 text-indigo-400" />
                            <p>
                                21 Learning Avenue,
                                <br />
                                Dhaka, Bangladesh
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <IoMail className="h-5 w-5 text-indigo-400" />
                            <p>studyspot@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhone className="h-5 w-5 text-indigo-400" />
                            <p>+880 1234-567890</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-400 sm:px-6 md:flex-row lg:px-8">

                    <p>
                        © {new Date().getFullYear()} StudySpot. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <Link
                            href="#"
                            className="transition hover:text-indigo-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-indigo-400"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;