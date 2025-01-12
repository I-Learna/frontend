import React from "react";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";
import ContactText from "@/components/routes/contact/ContactText";
import ContactForm from "@/components/routes/contact/ContactForm";

export const metadata: Metadata = {
  title: "I Learna Contacts",
  ...baseMetadata,
};

const Page = () => {
  return (
    <main className="flex flex-col lg:flex-row px-2 py-5 space-y-5 lg:space-x-5">
      <div className="lg:w-1/2">
        <ContactText />
      </div>

      <div className="lg:w-1/2">
        <ContactForm />
      </div>
    </main>
  );
};

export default Page;
