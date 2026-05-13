import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * FAQSection Component
 * Staff Engineer Level: Accordion with smooth animations, SEO-optimized structured data
 */

const faqs = [
  {
    question: "How long does it take to build a landing page?",
    answer:
      "Our standard landing page takes 7-10 business days from kickoff to launch. We handle everything from strategy and design to deployment and optimization. For more complex projects with custom integrations, timeline may extend to 2-3 weeks.",
  },
  {
    question: "What is included in the 800 GBP Standard Setup?",
    answer:
      "The Standard Setup includes a premium, conversion-optimised landing page, mobile-responsive design, SEO optimisation, basic lead capture form, and 7 days of support. It is perfect for businesses looking to establish their online presence quickly.",
  },
  {
    question: "Can I upgrade from Standard to Advanced later?",
    answer:
      "Absolutely! Many clients start with Standard and upgrade to Advanced (AI Chatbot + Automation) after seeing initial results. We will apply your Standard investment towards the upgrade, so you only pay the difference.",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "Our AI chatbot uses natural language processing to understand visitor questions and automatically qualify leads. It asks relevant questions, captures information, and routes qualified prospects directly to your sales team via WhatsApp, email, or your CRM.",
  },
  {
    question: "What CRMs do you integrate with?",
    answer:
      "We integrate with HubSpot, Pipedrive, Salesforce, Zoho, and most popular CRMs. We also support custom integrations via Zapier, Make, or n8n. If your CRM is not listed, we can likely still make it work - just ask!",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! All packages include 30 days of support. After that, we offer optional maintenance plans starting at 99 GBP per month, which includes updates, optimisations, and 24/7 monitoring.",
  },
  {
    question: "What if I am not satisfied with the results?",
    answer:
      "We are confident in our work, but if you are not satisfied within 14 days of launch, we will make revisions at no extra cost. We want you to love your landing page as much as we do.",
  },
  {
    question: "Can you help with Google Ads and traffic?",
    answer:
      "We specialise in building landing pages that convert, but we do not run ads directly. However, our pages are optimised for Google Ads, and we can provide recommendations on keyword strategy, ad copy, and campaign structure.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white border-y border-border relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16 md:mb-24 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-foreground" variants={itemVariants}>
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Everything you need to know about AXON services and process.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <AccordionItem
                  value={`item-${idx}`}
                  className="border border-border rounded-lg px-6 bg-background hover:bg-secondary/30 transition-colors"
                >
                  <AccordionTrigger className="text-foreground font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
