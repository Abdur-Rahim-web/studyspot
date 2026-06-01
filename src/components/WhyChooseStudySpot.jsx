"use client";

import {
    FaWifi,
    FaClock,
    FaShieldAlt,
    FaLaptopHouse,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

const WhyChooseStudySpot = () => {
    const features = [
        {
            icon: <FaWifi className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
            title: "High-Speed Wi-Fi",
            description:
                "Stay connected with fast and reliable internet access in every study room.",
        },
        {
            icon: <FaClock className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
            title: "Flexible Booking",
            description:
                "Reserve study rooms anytime with hourly booking options that fit your schedule.",
        },
        {
            icon: (
                <FaShieldAlt className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            ),
            title: "Secure Access",
            description:
                "Enjoy a safe and verified environment designed for focused learning sessions.",
        },
        {
            icon: (
                <FaLaptopHouse className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            ),
            title: "Modern Facilities",
            description:
                "Smart rooms equipped with projectors, whiteboards, charging ports, and more.",
        },
    ];

    return (
        <section className="bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">

                    {/* Badge */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-white/5">

                        <HiSparkles className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />

                        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                            Why Students Love StudySpot
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">
                        Designed for
                        <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                            {" "}
                            Better Focus
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
                        Discover premium study environments tailored for productivity,
                        collaboration, and uninterrupted learning experiences.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-7
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:border-indigo-300
                hover:shadow-2xl
                dark:border-white/10
                dark:bg-white/5
              "
                        >

                            {/* Icon */}
                            <div
                                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-100
                  transition
                  group-hover:bg-indigo-200
                  dark:bg-indigo-500/10
                  dark:group-hover:bg-indigo-500/20
                "
                            >
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseStudySpot;