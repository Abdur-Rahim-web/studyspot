import RoomsContainer from "@/components/RoomsContainer";
import { FaLayerGroup } from "react-icons/fa";

export const metadata = {
  title: "StudySpot - Available Rooms",
};

const AllRoomsPage = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">
              <FaLayerGroup className="text-indigo-500" />

              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                Available Study Rooms
              </span>
            </div>

            <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">
              Explore All

              <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                {" "}
                Study Spaces
              </span>
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
              Browse all available study rooms designed for productivity,
              collaboration, and focused learning experiences.
            </p>

          </div>

        </div>

        <RoomsContainer />

      </div>
    </section>
  );
};

export default AllRoomsPage;