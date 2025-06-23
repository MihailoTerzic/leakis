'use client';
import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "What is your training philosophy?",
    answer:
      "Our approach is grounded in mindful movement, personalized coaching, and sustainable progress tailored to you.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, we provide both in-person and online coaching tailored to your schedule and goals.",
  },
  {
    question: "What should I expect during the first session?",
    answer:
      "The initial session focuses on assessment, goal setting, and creating a personalized plan that fits your lifestyle.",
  },
  {
    question: "How can I book a session?",
    answer:
      "You can easily book a session by contacting us through the website or directly via email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white max-w-4xl mx-auto">
      <h2 className="font-serif text-3xl md:text-5xl font-light text-black leading-tight mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleIndex(index);
              }}
            >
              <h3 className="font-serif text-xl md:text-2xl font-light text-black mb-2 flex justify-between items-center">
                {question}
                <span
                  className={`transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </h3>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                  opacity: isOpen ? 1 : 0,
                  transitionProperty: 'max-height, opacity',
                }}
              >
                <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed tracking-wide mt-2">
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
