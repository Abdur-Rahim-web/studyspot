"use client";

import { useEffect, useState } from "react";
import AllRoomCard from "./AllRoomCard";
import { FaSearch } from "react-icons/fa";

const RoomsContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState("");
    const [amenity, setAmenity] = useState("");

    useEffect(() => {
        const fetchRooms = async () => {
            const params = new URLSearchParams();

            if (search) {
                params.append("search", search);
            }

            if (amenity) {
                params.append("amenities", amenity);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?${params.toString()}`
            );

            const data = await res.json();

            setRooms(data);
        };

        fetchRooms();
    }, [search, amenity]);

    return (
        <>
            <div className="mt-10 flex flex-col gap-4 md:flex-row">

                <div className="relative flex-1">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search rooms..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            py-3
                            pl-12
                            pr-4
                            text-sm
                            outline-none
                            transition
                            focus:border-indigo-500
                            dark:border-white/10
                            dark:bg-slate-950
                            dark:text-white
                        "
                    />
                </div>

                <select
                    value={amenity}
                    onChange={(e) => setAmenity(e.target.value)}
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        dark:border-white/10
                        dark:bg-slate-950
                        dark:text-white
                    "
                >
                    <option value="">All Amenities</option>
                    <option value="Wi-Fi">Wi-Fi</option>
                    <option value="Projector">Projector</option>
                    <option value="Whiteboard">Whiteboard</option>
                    <option value="Air Conditioning">
                        Air Conditioning
                    </option>
                    <option value="Quiet Zone">Quiet Zone</option>
                    <option value="Power Outlets">Power Outlets</option>
                </select>

            </div>

            {rooms.length === 0 ? (
                <div className="mt-20 text-center">

                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        No Rooms Found
                    </h3>

                    <p className="mt-3 text-slate-600 dark:text-gray-400">
                        No study rooms matched your search.
                    </p>

                </div>
            ) : (
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <AllRoomCard
                            key={room._id}
                            room={room}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default RoomsContainer;