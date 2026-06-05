"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useMemo, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { toast } from "react-toastify";

export default function BookingModal({ room }) {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [note, setNote] = useState("");

    const timeSlots = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
    ];

    const endTimeOptions = timeSlots.filter(
        (slot) => slot > startTime
    );

    const totalCost = useMemo(() => {
        if (!startTime || !endTime) return 0;

        const startHour = Number(startTime.split(":")[0]);
        const endHour = Number(endTime.split(":")[0]);

        return (endHour - startHour) * room.hourlyRate;
    }, [startTime, endTime, room.hourlyRate]);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async () => {
        const bookingData = {
            roomId: room._id,
            roomName: room.roomName,
            roomImage: room.image,
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            userImage: user.image,
            date,
            startTime,
            endTime,
            totalCost,
            note,
            status: "confirmed",
            createdAt: new Date(),
        };
        // console.log("Booking Data:", bookingData);

        const {data: tokenData} = await authClient.token();
        console.log("Token in BookingModal:", tokenData);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData?.token}`,
                },
                body: JSON.stringify(bookingData),
            });
            const data = await res.json();
            console.log("Booking Response:", data);

            if (res.ok) {
                toast.success("Booking successful!");
            } else {
                toast.error("Failed to book. Please try again.");
            }
        } catch (error) {
            console.error("Error booking room:", error);
            toast.error("An error occurred while booking the room.");
        }
    };

    return (
        <Modal>
            <Button className=" inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-10 py-7 text-sm font-semibold text-white transition hover:bg-indigo-700">

                <FaCalendarCheck />

                Book Now

            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-indigo-100 text-indigo-600">
                                <FaCalendarCheck />
                            </Modal.Icon>

                            <Modal.Heading>
                                Book Study Room
                            </Modal.Heading>

                            <p className="mt-2 text-sm text-gray-500">
                                Select your preferred date and time slot.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">

                                    <TextField>
                                        <Label>Date</Label>
                                        <Input
                                            type="date"
                                            min={new Date().toISOString().split("T")[0]}
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Start Time</Label>

                                        <select
                                            className="w-full rounded-lg border p-3"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                        >
                                            <option value="">
                                                Select Start Time
                                            </option>

                                            {timeSlots.map((slot) => (
                                                <option
                                                    key={slot}
                                                    value={slot}
                                                >
                                                    {slot}
                                                </option>
                                            ))}
                                        </select>
                                    </TextField>

                                    <TextField>
                                        <Label>End Time</Label>

                                        <select
                                            className="w-full rounded-lg border p-3"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                        >
                                            <option value="">
                                                Select End Time
                                            </option>

                                            {endTimeOptions.map((slot) => (
                                                <option
                                                    key={slot}
                                                    value={slot}
                                                >
                                                    {slot}
                                                </option>
                                            ))}
                                        </select>
                                    </TextField>

                                    <TextField>
                                        <Label>Total Cost</Label>

                                        <Input
                                            readOnly
                                            value={`$${totalCost}`}
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Special Note</Label>

                                        <Input
                                            placeholder="Any special requirements?"
                                            value={note}
                                            onChange={(e) =>
                                                setNote(e.target.value)
                                            }
                                        />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                slot="close"
                                variant="secondary"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={handleBooking}
                                color="primary"
                                slot="close"
                            >
                                Confirm Booking
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}