"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, } from "@heroui/react";
import { toast } from "react-toastify";

export function EditRoom({ room }) {
    const {id} = room;

    const amenitiesOptions = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    const onSubmit = async (e) => {

        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const amenities = formData.getAll("amenities");

        const roomData = {
            roomName: formData.get("roomName"),
            description: formData.get("description"),
            image: formData.get("image"),
            floor: formData.get("floor"),
            capacity: Number(formData.get("capacity")),
            hourlyRate: Number(formData.get("hourlyRate")),
            amenities,
            bookingCount: 0,
            createdAt: new Date(),
        };

        console.log(roomData);

        try {

            const {data: tokenData} = await authClient.token();
            console.log("Token in EditRoom:", tokenData);

            const res = await fetch(`http://localhost:5000/rooms/${room._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData?.token}`,
                },
                body: JSON.stringify(roomData),
            });

            const data = await res.json();

            // console.log(data);

            window.location.reload();

            if (res.ok) {

                toast.success("Room updated successfully!");

                form.reset();

            } else {

                toast.error(data.message || "Failed to update room");

            }

        } catch (error) {

            toast.error("Something went wrong");

        }
        redirect(`/rooms/${room._id}`);
    };


    return (
        <Modal>
            <Button className=" inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-10 py-7 text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-slate-950 dark:text-gray-300 "
            >
                Edit Room
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Study Room</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="max-h-[70vh] overflow-y-auto p-6">
                            <form className="space-y-8" onSubmit={onSubmit}>

                                <div>

                                    <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                        Room Name
                                    </label>

                                    <input
                                        defaultValue={room.roomName}
                                        type="text"
                                        name="roomName"
                                        placeholder="Quiet Focus Room"
                                        required
                                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                    />

                                    <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                        Choose a clear and professional room name.
                                    </p>

                                </div>

                                <div>

                                    <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                        Description
                                    </label>

                                    <textarea
                                        defaultValue={room.description}
                                        rows={3}
                                        name="description"
                                        placeholder="Write room description..."
                                        required
                                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                    />

                                    <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                        Briefly explain the room environment and facilities.
                                    </p>

                                </div>

                                <div>

                                    <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                        Image URL
                                    </label>

                                    <input
                                        defaultValue={room.image}
                                        type="url"
                                        name="image"
                                        placeholder="https://example.com/image.jpg"
                                        required
                                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                    />

                                    <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                                        Use a high-quality landscape image for better appearance.
                                    </p>

                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                                    <div>

                                        <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                            Floor
                                        </label>

                                        <input
                                            defaultValue={room.floor}
                                            type="text"
                                            name="floor"
                                            placeholder="3rd Floor"
                                            required
                                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                        />

                                    </div>

                                    <div>

                                        <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                            Capacity
                                        </label>

                                        <input
                                            defaultValue={room.capacity}
                                            type="number"
                                            name="capacity"
                                            min="1"
                                            placeholder="4"
                                            required
                                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                        />

                                        <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                            Enter how many students can study comfortably.
                                        </p>

                                    </div>

                                    <div>

                                        <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                            Hourly Rate ($)
                                        </label>

                                        <input
                                            defaultValue={room.hourlyRate}
                                            type="number"
                                            name="hourlyRate"
                                            min="1"
                                            placeholder="5"
                                            required
                                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-500/20"
                                        />

                                        <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                            Set a reasonable hourly booking price.
                                        </p>

                                    </div>

                                </div>

                                <div>

                                    <label className="mb-4 block text-sm font-semibold text-slate-700 dark:text-gray-300">
                                        Amenities
                                    </label>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                                        {amenitiesOptions.map((item, index) => (

                                            <label
                                                key={index}
                                                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-indigo-500 hover:bg-indigo-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
                                            >

                                                <input
                                                    type="checkbox"
                                                    name="amenities"
                                                    value={item}
                                                    defaultChecked={room.amenities?.includes(item)}
                                                    className="h-4 w-4 accent-indigo-600"
                                                />

                                                <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                                    {item}
                                                </span>

                                            </label>

                                        ))}

                                    </div>

                                    <p className="mt-3 text-xs text-slate-500 dark:text-gray-400">
                                        Select all facilities available in this study room.
                                    </p>

                                </div>

                                <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type="submit">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>

                            </form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}