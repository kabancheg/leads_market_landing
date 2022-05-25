import React from "react";
import Accordion from "@/components/Accordion";

const questionsAnswers = [
  {
    question: "Combien de leads puis je acheter?",
    answer:
      "Vous n'avez pas de limites d'achat, There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
];

const Faq = () => {
  return (
    <div className="faq-area bg-f3feff ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Foire aux questions </span>
          <h2>Dédié à aider tout ce dont les gens ont besoin</h2>
        </div>
        <div className="faq-accordion style-two">
          <div className="accordion" id="faqAccordion">
            <Accordion questionsAnswers={questionsAnswers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
