import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold">404</h1>

            <p className="mt-4 text-gray-500">
                Page not found
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 text-white"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;