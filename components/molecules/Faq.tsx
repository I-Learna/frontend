"use client";
import React, { FC, useState } from "react";
import { v4 } from "uuid";

// Define Types
interface IFAQ {
  question: string;
  answer: string;
}

const questions: IFAQ[] = [
  {
    question: "What types of courses are available?",
    answer:
      "We offer live one-on-one sessions, live group courses, and recorded courses in various industries, including specialized tracks in petroleum and more.",
  },
  {
    question: "How do I book a course?",
    answer:
      "Select a course from the home page or course listings, review the course details, and click  Book Now.  Complete your payment, and you ll receive confirmation and session details.",
  },
  {
    question: "Can I access recorded sessions after booking?",
    answer:
      "Yes, recorded courses and sessions are accessible for up to 3 months after booking.",
  },
  {
    question: "What if I need help during my course?",
    answer:
      "Our support team is always available to assist. You can contact us via email, live chat, or the community forum.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Yes, our refund and cancellation policy allows for eligible refunds under specific conditions. Please refer to the Terms & Conditions page for more details.",
  },
  {
    question: "Can I use i.learna on mobile?",
    answer:
      "Yes, our platform is fully responsive and accessible on desktops, tablets, and smartphones.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept a variety of international and national payment methods, including credit cards, bank transfers, and e-wallets.",
  },
  {
    question: "Are there any free courses?",
    answer:
      "While most courses are paid, we occasionally offer free trial lessons and discounted courses.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click  Forgot Password  on the login page, and follow the steps to reset it via email.",
  },
];

const Faq = () => {
  return (
    <div className="w-full max-w-3xl m-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">FAQs</h1>

      {/* Questions */}
      <div className="space-y-5 shadow p-8 rounded-lg">
        {questions.map((q) => (
          <Question q={q} key={v4()} />
        ))}
      </div>
    </div>
  );
};

const Question: FC<{ q: IFAQ }> = (props) => {
  const { q } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="p-4 rounded-md shadow">
      {/* Question Header */}
      <h3
        className={`font-medium cursor-pointer flex justify-between items-center ${
          isOpened ? "text-accent font-bold" : ""
        }`}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <span>{q.question}</span>
        <span>{isOpened ? "-" : "+"}</span>
      </h3>

      {/* Answer with animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpened ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-1 text-customGray font-normal">{q.answer}</p>
      </div>
    </div>
  );
};

export default Faq;
