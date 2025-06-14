import { useState } from "react";

const faqData = [
  {
    question: "What is Movie & Series Explorer?",
    answer: "It’s a simple app that helps you browse through top movies and series with search and filter options.",
  },
  {
    question: "Can I search by genre?",
    answer: "Currently, no. The search only works for titles. Genre filtering might be added in a future version.",
  },
  {
    question: "Is this app free?",
    answer: "Yes, this app is completely free to use.",
  },
  {
    question: "Can I contribute titles?",
    answer: "Not yet. But you can fork the project and submit suggestions!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-title">❓ Frequently Asked Questions</div>
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? "open" : ""}`}
          onClick={() => toggle(i)}
        >
          <div className="faq-question">
            {item.question}
            <span>{openIndex === i ? "▲" : "▼"}</span>
          </div>
          <div className="faq-answer-wrapper">
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
