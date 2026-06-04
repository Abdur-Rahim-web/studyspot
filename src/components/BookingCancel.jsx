"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function BookingCancel({ booking, bookingId }) {
    const handleCancel = async () => {
        try {

            const {data: tokenData} = await authClient.token();
            console.log("Token in BookingCancel:", tokenData);

            const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${tokenData?.token}`
                }
            });

            const data = await res.json();

            window.location.reload();

            if (res.ok) {
                toast.success("Booking canceled successfully!");
            } else {
                toast.error("Failed to cancel booking. Please try again.");
            }

        } catch (error) {
            toast.error("Error canceling booking:", error);
        }
    };

    return (
        <AlertDialog>
            <Button variant="danger" className="mt-5">Cancel Booking </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>{booking.roomName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="danger" onClick={handleCancel}>
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}