import Faq from "@/components/molecules/Faq";
import TopInstructors from "@/components/molecules/TopInstructors";
import HomeCarousel from "@/components/routes/home/HomeCarousel";
import HomeCTA from "@/components/routes/home/HomeCTA";
import HomeFeatures from "@/components/routes/home/HomeFeatures";
import UsersReviews from "@/components/routes/home/UsersReviews";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Learna",
  ...baseMetadata,
};

export default function Home() {
  return (
    <main className="space-y-16">
      <section>
        <HomeCarousel />
      </section>

      <section>
        <HomeFeatures />
      </section>

      <section>
        <TopInstructors />
      </section>

      <section>
        <HomeCTA />
      </section>

      <section>
        <UsersReviews />
      </section>

      <section>
        <Faq />
      </section>
    </main>
  );
}
