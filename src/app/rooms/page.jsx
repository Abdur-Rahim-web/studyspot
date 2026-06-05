import AllRoomCard from "@/components/AllRoomCard";
import {
  FaLayerGroup,
  FaSearch,
} from "react-icons/fa";

export const metadata = {
  title: "StudySpot-Available Rooms"
};

const AllRoomsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    cache: "no-store",
  });

  const rooms = await res.json();

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
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

          {/* Search UI */}
          <div className="relative w-full md:max-w-sm">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search rooms..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                py-3
                pl-12
                pr-4
                text-sm
                outline-none
                transition
                focus:border-indigo-500
                dark:border-white/10
                dark:bg-slate-950
                dark:text-white
              "
            />

          </div>

        </div>

        {/* Empty State */}
        {
          rooms.length === 0 && (
            <div className="mt-20 text-center">

              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                No Rooms Found
              </h3>

              <p className="mt-3 text-slate-600 dark:text-gray-400">
                There are currently no available study rooms.
              </p>

            </div>
          )
        }

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {rooms.map((room) =>

            <AllRoomCard key={room._id} room={room} />

          )}

        </div>

      </div>

    </section>
  );
};

export default AllRoomsPage;