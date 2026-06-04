"use client";

import Image from "next/image";
import { Card, Avatar } from "@heroui/react";
import { BookingCancel } from "@/components/BookingCancel";

const BookingCard = ({ bookings }) => {
    return (
        <div className="space-y-5">
            {bookings.map((booking) => (
                <Card
                    key={booking._id}
                    className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                    <div className="lg:hidden">
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={booking.roomImage}
                                alt={booking.roomName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold">
                                    {booking.roomName}
                                </h2>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${booking.status === "confirmed"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={booking.userImage} />
                                    <Avatar.Fallback>{booking.userName.charAt(0)}</Avatar.Fallback>
                                </Avatar>

                                <div>
                                    <p className="font-medium">
                                        {booking.userName}
                                    </p>

                                    <p className="text-sm text-gray-500 break-all">
                                        {booking.userEmail}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <div className="rounded-xl bg-gray-50 p-3 text-center">
                                    <p className="text-xs text-gray-500">
                                        Date
                                    </p>

                                    <p className="mt-1 text-sm font-medium">
                                        {booking.date}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-gray-50 p-3 text-center">
                                    <p className="text-xs text-gray-500">
                                        Time
                                    </p>

                                    <p className="mt-1 text-sm font-medium">
                                        {booking.startTime}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-indigo-50 p-3 text-center">
                                    <p className="text-xs text-gray-500">
                                        Cost
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-indigo-600">
                                        ${booking.totalCost}
                                    </p>
                                </div>
                            </div>

                            {booking.note && (
                                <div className="rounded-xl bg-gray-50 p-3">
                                    <p className="mb-1 text-xs text-gray-500">
                                        Note
                                    </p>

                                    <p className="text-sm">
                                        {booking.note}
                                    </p>
                                </div>
                            )}

                            <BookingCancel
                                booking={booking}
                                bookingId={booking._id}
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="p-3">
                            <div className="flex items-center gap-5">
                                <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl">
                                    <Image
                                        src={booking.roomImage}
                                        alt={booking.roomName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-lg font-semibold">
                                                    {booking.roomName}
                                                </h2>

                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-medium ${booking.status === "confirmed"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    {booking.status}
                                                </span>
                                            </div>

                                            <div className="mt-4 flex items-center gap-8">
                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Date
                                                    </p>

                                                    <p className="font-medium">
                                                        {booking.date}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Time
                                                    </p>

                                                    <p className="font-medium">
                                                        {booking.startTime} - {booking.endTime}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-gray-500">
                                                        Cost
                                                    </p>

                                                    <p className="font-semibold text-indigo-600">
                                                        ${booking.totalCost}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <Avatar.Image
                                                    alt="User"
                                                    src={booking.userImage}
                                                />
                                                <Avatar.Fallback>
                                                    {booking.userName?.charAt(0)}
                                                </Avatar.Fallback>
                                            </Avatar>

                                            <div>
                                                <p className="text-sm font-medium">
                                                    {booking.userName}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {booking.userEmail}
                                                </p>
                                            </div>
                                        </div>

                                        <BookingCancel
                                            booking={booking}
                                            bookingId={booking._id}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default BookingCard;