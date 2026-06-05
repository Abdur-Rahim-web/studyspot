"use client";

import Image from "next/image";
import { DeleteRoom } from "./DeleteRoom";
import { EditRoom } from "./EditRoom";
import {
    FaDollarSign,
    FaLayerGroup,
    FaUsers,
    FaChair,
} from "react-icons/fa";

const MyListingsCard = ({ room }) => {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-slate-950">

            <div className="flex flex-col lg:flex-row">

                <div className="relative h-64 w-full lg:h-auto lg:w-80">
                    <Image
                        src={room.image}
                        alt={room.roomName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {room.roomName}
                        </h2>

                        <p className="mt-3 line-clamp-2 text-slate-600 dark:text-slate-400">
                            {room.description}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                            <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                                <div className="mb-2 text-indigo-500">
                                    <FaLayerGroup />
                                </div>

                                <p className="text-xs text-slate-500">
                                    Floor
                                </p>

                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                    {room.floor}
                                </h4>
                            </div>

                            <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                                <div className="mb-2 text-emerald-500">
                                    <FaUsers />
                                </div>

                                <p className="text-xs text-slate-500">
                                    Capacity
                                </p>

                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                    {room.capacity}
                                </h4>
                            </div>

                            <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                                <div className="mb-2 text-yellow-500">
                                    <FaDollarSign />
                                </div>

                                <p className="text-xs text-slate-500">
                                    Rate
                                </p>

                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                    ${room.hourlyRate}/hr
                                </h4>
                            </div>

                            <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                                <div className="mb-2 text-pink-500">
                                    <FaChair />
                                </div>

                                <p className="text-xs text-slate-500">
                                    Bookings
                                </p>

                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                    {room.bookingCount}
                                </h4>
                            </div>

                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {room.amenities?.map((amenity, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                                >
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <EditRoom room={room} />

                        <DeleteRoom room={room} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyListingsCard;