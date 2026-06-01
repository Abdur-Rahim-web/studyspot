import BookingModal from "@/components/BookingModal";
import { DeleteRoom } from "@/components/DeleteRoom";
import { EditRoom } from "@/components/EditRoom";
import Image from "next/image";
import Link from "next/link";

import {
    FaArrowLeft,
    FaChair,
    FaDollarSign,
    FaLayerGroup,
    FaUsers,
    FaCheckCircle,
    FaCalendarCheck,
} from "react-icons/fa";

const RoomDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/rooms/${id}`, {
        cache: "no-store",
    });

    const room = await res.json();

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-900 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Back Button */}
                <Link
                    href="/rooms"
                    className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:border-indigo-500
            hover:text-indigo-600
            dark:border-white/10
            dark:bg-slate-950
            dark:text-gray-300
          "
                >

                    <FaArrowLeft />

                    Back to Rooms

                </Link>

                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                    {/* Image Section */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">

                        <div className="relative h-75 w-full sm:h-112.5">

                            <Image
                                src={room.image}
                                alt={room.roomName}
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">

                        {/* Badge */}
                        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 dark:border-indigo-500/20 dark:bg-indigo-500/10">

                            <FaCalendarCheck className="text-indigo-500" />

                            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                                Study Room Available
                            </span>

                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">

                            {room.roomName}

                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-gray-400">

                            {room.description}

                        </p>

                        {/* Info Grid */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                            {/* Floor */}
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">

                                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">

                                    <FaLayerGroup />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        Floor
                                    </p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                        {room.floor}
                                    </h4>

                                </div>

                            </div>

                            {/* Capacity */}
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">

                                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">

                                    <FaUsers />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        Capacity
                                    </p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                        {room.capacity}
                                    </h4>

                                </div>

                            </div>

                            {/* Hourly Rate */}
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">

                                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-300">

                                    <FaDollarSign />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        Hourly Rate
                                    </p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                        ${room.hourlyRate}/hr
                                    </h4>

                                </div>

                            </div>

                            {/* Booking Count */}
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">

                                <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-500/10 dark:text-pink-300">

                                    <FaChair />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        Total Bookings
                                    </p>

                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                        {room.bookingCount}
                                    </h4>

                                </div>

                            </div>

                        </div>

                        {/* Amenities */}
                        <div className="mt-10">

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                                Amenities

                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">

                                {room.amenities?.map((item, index) => (

                                    <div
                                        key={index}
                                        className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-indigo-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-indigo-700
                      dark:bg-indigo-500/10
                      dark:text-indigo-300
                    "
                                    >

                                        <FaCheckCircle />

                                        {item}

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            {/* Book Now */}
                            <BookingModal />

                            {/* Edit Room */}
                            <EditRoom  room={room}/>

                            {/* Delete Room */}
                            <DeleteRoom room={room} />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RoomDetailsPage;