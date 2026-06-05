import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
    title: "StudySpot-My Bookings",
};

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return (
            <div className="p-10 text-center font-bold text-3xl">
                Please login first.
            </div>
        );
    }

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${session.user.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        }
    );

    const data = await res.json();

    console.log("Bookings Response:", data);

    const bookings = Array.isArray(data) ? data : [];

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="mx-4 md:mx-20 lg:mx-40 py-5">
                <h1 className="mb-6 text-3xl font-bold">
                    My Bookings
                </h1>

                <BookingCard bookings={bookings} />
            </div>
        </div>
    );
};

export default MyBookingPage;