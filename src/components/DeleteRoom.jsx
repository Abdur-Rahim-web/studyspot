"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteRoom({ room }) {

    const handleDelete = async () => {
        try {

            const {data: tokenData} = await authClient.token();
            console.log("Token in DeleteRoom:", tokenData);

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${tokenData?.token}`
                }
            });

            const data = await res.json();


            if (res.ok) {
                toast.success("Room deleted successfully!");
            } else {
                toast.error(data.message || "Failed to delete room");
            }
        } catch (error) {
            toast.error("An error occurred while deleting the room");
        }

        redirect("/rooms");
    };


    return (
        <AlertDialog>
            <Button className=" inline-flex items-center justify-center rounded-full bg-red-500 px-10 py-7 text-sm font-semibold text-white transition hover:bg-red-600">
                Delete Room
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete room permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{room.roomName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}