
import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    // console.log('Session in MyBookingPage:', session);

    const {token} = session ? await auth.api.getToken({
        headers: await headers()
    }) : {};
    // console.log("Token in MyBookingPage:", token);

    const user = session?.user;
    // console.log('User in MyBookingPage:', user);

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();
    // console.log('Bookings in MyBookingPage:', bookings);

    return (
        <div className="bg-slate-100">
            <div className='mx-10 md:mx-40 my-5'>
                <h1 className='text-2xl font-bold mb-4'>My Bookings</h1>
                <BookingCard bookings={bookings} />
            </div>
        </div>
    );
};

export default MyBookingPage;