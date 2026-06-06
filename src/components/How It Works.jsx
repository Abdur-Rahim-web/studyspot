"use client";

import {
    FaBookOpen,
    FaCalendarCheck,
    FaDoorOpen,
} from "react-icons/fa";

import { MdArrowOutward } from "react-icons/md";

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            icon: <FaBookOpen className="text-3xl text-indigo-600 dark:text-indigo-400" />,
            title: "Browse Study Rooms",
            description:
                "Explore a wide range of quiet and modern study rooms with detailed amenities, pricing, and availability.",
        },
        {
            id: "02",
            icon: (
                <FaCalendarCheck className="text-3xl text-indigo-600 dark:text-indigo-400" />
            ),
            title: "Book Your Slot",
            description:
                "Choose your preferred date and time slot with real-time booking availability and instant confirmation.",
        },
        {
            id: "03",
            icon: <FaDoorOpen className="text-3xl text-indigo-600 dark:text-indigo-400" />,
            title: "Start Studying",
            description:
                "Enjoy a peaceful and productive environment designed for focus, collaboration, and better learning.",
        },
    ];

    return (
        <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">

                        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                            Easy Booking Process
                        </span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">
                        How
                        <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                            {" "}
                            StudySpot
                        </span>{" "}
                        Works
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
                        Book your perfect study environment in just a few simple steps and
                        stay focused on achieving your goals.
                    </p>
                </div>

                <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-white/10
                dark:bg-slate-950
              "
                        >

                            <div className="absolute right-6 top-6 text-6xl font-black text-slate-100 dark:text-white/5">
                                {step.id}
                            </div>

                            <div
                                className="
                  flex
                  h-16
                  w-16
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
                                {step.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                                {step.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-400">
                                {step.description}
                            </p>

                            <button
                                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-indigo-600
                  transition
                  hover:gap-3
                  dark:text-indigo-400
                "
                            >
                                Learn More
                                <MdArrowOutward className="text-lg" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;