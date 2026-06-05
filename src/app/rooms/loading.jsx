"use client";
import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Spinner size="xl" />
        </div>
    );
};

export default loading;