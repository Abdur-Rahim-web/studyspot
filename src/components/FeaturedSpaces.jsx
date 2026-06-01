import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaCalendarAlt,
} from "react-icons/fa";

const FeaturedSpaces = async () => {

    const res = await fetch("http://localhost:5000/featured-rooms");

    const rooms = await res.json();

    return (
        <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

                    <div className="max-w-2xl">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">

                            <FaCalendarAlt className="text-indigo-500" />

                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                Popular Study Spaces
                            </span>

                        </div>

                        <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">

                            Explore Our

                            <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                                {" "}
                                Featured Rooms
                            </span>

                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
                            Discover beautifully designed study environments built for focus,
                            collaboration, and productivity.
                        </p>

                    </div>

                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {rooms.map((room) => (

                        <div
                            key={room._id}
                            className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-white/10
                dark:bg-slate-950
              "
                        >

                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">

                                <Image
                                    src={room.image}
                                    alt={room.roomName}
                                    fill
                                    className="object-cover transition duration-500 hover:scale-110"
                                />

                                {/* Price */}
                                <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                                    ${room.hourlyRate}/hr

                                </div>

                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                                    {room.roomName}

                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-400">

                                    {room.description.slice(0, 100)}...

                                </p>

                                {/* Info */}
                                <div className="mt-5 space-y-2">

                                    <p className="text-sm text-slate-700 dark:text-gray-300">
                                        Floor: {room.floor}
                                    </p>

                                    <p className="text-sm text-slate-700 dark:text-gray-300">
                                        Capacity: {room.capacity}
                                    </p>

                                </div>

                                {/* Amenities */}
                                <div className="mt-5 flex flex-wrap gap-2">

                                    {room.amenities.slice(0, 3).map((item, index) => (

                                        <span
                                            key={index}
                                            className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                    {room.amenities.length > 3 && (

                                        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-gray-300">

                                            +{room.amenities.length - 3} more

                                        </span>

                                    )}

                                </div>

                                {/* Button */}
                                <Link
                                    href={`/rooms/${room._id}`}
                                    className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-indigo-600 transition hover:gap-3 dark:text-indigo-400"
                                >

                                    View Details

                                    <FaArrowRight />

                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default FeaturedSpaces;