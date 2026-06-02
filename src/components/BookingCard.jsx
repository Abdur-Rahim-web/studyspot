"use client";

import Image from "next/image";
import { Card } from "@heroui/react";
import { BookingCancel } from "@/components/BookingCancel";


const BookingCard = ({ bookings }) => {
    return (
        <div className="space-y-6">
            {bookings.map((booking) => (
                <Card
                    key={booking._id}
                    className="overflow-hidden color-slate-900 dark:color-slate-100"
                >
                    <Card>
                        <div className="flex flex-col md:flex-row">
                            <div className="relative h-64 md:h-auto md:w-80 shrink-0">
                                <Image
                                    src={booking.roomImage}
                                    alt={booking.roomName}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 p-6">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <h2 className="text-xl font-bold">
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

                                <div className="mt-4 grid gap-2 text-sm">
                                    <p>
                                        <strong>Date:</strong> {booking.date}
                                    </p>

                                    <p>
                                        <strong>Time:</strong>{" "}
                                        {booking.startTime} - {booking.endTime}
                                    </p>

                                    <p>
                                        <strong>Total Cost:</strong> $
                                        {booking.totalCost}
                                    </p>

                                    <p>
                                        <strong>Email:</strong>{" "}
                                        {booking.userEmail}
                                    </p>

                                    {booking.note && (
                                        <p>
                                            <strong>Note:</strong>{" "}
                                            {booking.note}
                                        </p>
                                    )}
                                </div>

                                <BookingCancel booking={booking} bookingId={booking._id} />

                            </div>
                        </div>
                    </Card>
                </Card>
            ))}
        </div>
    );
};

export default BookingCard;