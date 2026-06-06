import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AllRoomCard = ({ room }) => {
    return (
        <div>
            <div
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

              <div className="relative h-64 w-full overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.roomName}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                  ${room.hourlyRate}/hr

                </div>

              </div>

              <div className="flex flex-1 flex-col p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                  {room.roomName}

                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-400">

                  {room.description?.slice(0, 100)}...

                </p>

                <div className="mt-5 space-y-2">

                  <p className="text-sm text-slate-700 dark:text-gray-300">
                    Floor: {room.floor}
                  </p>

                  <p className="text-sm text-slate-700 dark:text-gray-300">
                    Capacity: {room.capacity}
                  </p>

                  <p className="text-sm text-slate-700 dark:text-gray-300">
                    Bookings: {room.bookingCount}
                  </p>

                </div>

                <div className="mt-5 flex flex-wrap gap-2">

                  {room.amenities?.slice(0, 3).map((item, index) => (

                    <span
                      key={index}
                      className="
                        rounded-full
                        bg-indigo-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-indigo-700
                        dark:bg-indigo-500/10
                        dark:text-indigo-300
                      "
                    >
                      {item}
                    </span>

                  ))}

                  {room.amenities?.length > 3 && (

                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-gray-300">

                      +{room.amenities.length - 3} more

                    </span>

                  )}

                </div>

                <Link
                  href={`/rooms/${room._id}`}
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-6
                    font-semibold
                    text-indigo-600
                    transition
                    hover:gap-3
                    dark:text-indigo-400
                  "
                >

                  View Details

                  <FaArrowRight />

                </Link>

              </div>

            </div>
        </div>
    );
};

export default AllRoomCard;