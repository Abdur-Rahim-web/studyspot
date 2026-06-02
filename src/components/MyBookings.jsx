"use client";

import Image from "next/image";
import {
    Card,
    CardBody,
    Button,
    Chip,
} from "@heroui/react";

const MyBookingsClient = ({ bookings }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">
                My Bookings
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                    <Card
                        key={booking._id}
                        className="overflow-hidden"
                    >
                        <img
                            src={booking.roomImage}
                            alt="Room"
                            className="h-56 w-full object-cover"
                        />

                        <CardBody className="space-y-3">
                            <div className="flex justify-between items-center">
                                <h2 className="font-bold">
                                    Booking
                                </h2>

                                <Chip
                                    color={
                                        booking.status === "confirmed"
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {booking.status}
                                </Chip>
                            </div>

                            <p>
                                <strong>Date:</strong>{" "}
                                {booking.date}
                            </p>

                            <p>
                                <strong>Time:</strong>{" "}
                                {booking.startTime} - {booking.endTime}
                            </p>

                            <p>
                                <strong>Cost:</strong> $
                                {booking.totalCost}
                            </p>

                            {booking.note && (
                                <p>
                                    <strong>Note:</strong>{" "}
                                    {booking.note}
                                </p>
                            )}

                            <Button
                                color="danger"
                                className="w-full"
                            >
                                Cancel Booking
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyBookingsClient;