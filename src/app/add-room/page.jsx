import AddRoomForm from "@/components/AddRoomForm";
import { FaPlusCircle } from "react-icons/fa";

export const metadata = {
    title: "StudySpot-Add Room",
};

const AddRoomPage = () => {

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-900 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-4xl">

                <div className="text-center">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 dark:border-indigo-500/20 dark:bg-indigo-500/10">

                        <FaPlusCircle className="text-indigo-500" />

                        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                            Create New Study Room
                        </span>

                    </div>

                    <h1 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                        Add Study Room
                    </h1>

                    <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400">
                        Create and publish your study room for students and learners.
                    </p>

                </div>

                <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950 md:p-10">

                    <AddRoomForm />

                </div>

            </div>

        </section>
    );
};

export default AddRoomPage;