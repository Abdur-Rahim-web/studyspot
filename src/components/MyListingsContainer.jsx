"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import MyListingsCard from "./MyListingsCard";

const MyListingsContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: session } = authClient.useSession();

    useEffect(() => {
        const fetchRooms = async () => {
            if (!session?.user?.id) return;

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/my-rooms/${session.user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenData?.token}`,
                    },
                }
            );

            const data = await res.json();

            setRooms(data);
            setLoading(false);
        };

        fetchRooms();
    }, [session]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-20 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white">
                        My Listings
                    </h1>

                    <p className="mt-3 text-slate-600 dark:text-slate-400">
                        Manage all your study room listings in one place.
                    </p>
                </div>

                {rooms.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                            No Rooms Found
                        </h2>

                        <p className="mt-3 text-slate-600 dark:text-gray-400">
                            You have not added any rooms yet.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {rooms.map((room) => (
                            <MyListingsCard
                                key={room._id}
                                room={room}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyListingsContainer;