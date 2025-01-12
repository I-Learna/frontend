import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ContactText = () => {
  return (
    <div className="space-y-3 h-full flex flex-col justify-evenly max-w-2xl m-auto">
      <PageTitle>We're here to help you cucceed</PageTitle>

      <p className="max-w-lg">
        Email, call or complete the form to learn how ilearna can solve your
        messaging problem
      </p>

      <div className="font-normal space-y-2">
        <p>info@ileana.io</p>
        <p>+1 234 567 890 (Mon–Fri, 9 AM – 6 PM)</p>
      </div>

      <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:space-x-5 md:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-3 xl:flex-row xl:space-y-0 xl:space-x-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <h3 className="font-semibold mb-2 text-xl capitalize">
            customer support
          </h3>
          <p className="font-light">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <h3 className="font-semibold mb-2 text-xl capitalize">
            feedback & suggestions
          </h3>
          <p className="font-light">
            We value your feedback and are continuously working on to improve
            ilearna. Your input is crucial in shaping the the future of ilearna
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
