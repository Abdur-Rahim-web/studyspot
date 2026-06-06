"use client";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const StudentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ariana Rahman",
      role: "University Student",
      review:
        "StudySpot completely changed the way I study. The quiet rooms and smooth booking process help me stay productive every day.",
    },
    {
      id: 2,
      name: "Nafis Ahmed",
      role: "Engineering Student",
      review:
        "I love the modern environment and fast booking system. It feels premium and helps me focus during exam preparation.",
    },
    {
      id: 3,
      name: "Tasnia Karim",
      role: "Medical Student",
      review:
        "The best platform for finding peaceful study rooms. The facilities and atmosphere are absolutely amazing.",
    },
  ];

  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto max-w-3xl text-center">
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-white/5">
            
            <FaStar className="text-yellow-500" />

            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
              Student Feedback
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">
            What Students Say
            <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              About StudySpot
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
            Hear from students who use StudySpot to stay focused,
            productive, and organized during their learning journey.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-8
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-white/10
                dark:bg-slate-900
              "
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-500/10">
                
                <FaQuoteLeft className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-gray-400">
                {testimonial.review}
              </p>

              <div className="mt-6 flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;