import Banner from "@/components/Banner";
import FeaturedSpaces from "@/components/FeaturedSpaces";
import HowItWorks from "@/components/How It Works";
import StudentTestimonials from "@/components/StudentTestimonials";
import WhyChooseStudySpot from "@/components/WhyChooseStudySpot";

export const metadata = {
  title: "StudySpot-Home"
};

export default function Home() {
  return <>
    <Banner />
    <WhyChooseStudySpot />
    <FeaturedSpaces />
    <HowItWorks />
    <StudentTestimonials />
  </>
}
