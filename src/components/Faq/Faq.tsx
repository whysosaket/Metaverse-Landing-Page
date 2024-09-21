import { useState } from "react";
import { FaqItem, faqs } from "./seed";

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  const toggleQuestion = (index: number) => {
    setSelectedQuestion(index === selectedQuestion ? -1 : index);
  };

  return (
    <div className=" mx-auto mt-6">
      {faqs.map((faq: FaqItem, index: number) => (
        <div
          key={index}
          className={`border-b border-[#fff]  mb-8  ${index===selectedQuestion?"pb-4":"pb-1"}`}
          onClick={() => toggleQuestion(index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-[#b0b0b0]">
              {faq.question}
            </h3>
            <span
              className={`${
                selectedQuestion === index
                  ? "transform rotate-180"
                  : "transform rotate-0"
              } transition-transform duration-200 ease-in-out`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#c9c9c9]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    selectedQuestion === index
                      ? "M19 9l-7 7-7-7"
                      : "M9 5l7 7-7 7"
                  }
                />
              </svg>
            </span>
          </div>
          <div
            className={`${
              selectedQuestion === index ? "md:max-h-32" : "max-h-0"
            } overflow-hidden transition-all duration-200 ease-in-out mt-2`}
          >
            <p className="text-[#7d7d7d] font-universolight">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;