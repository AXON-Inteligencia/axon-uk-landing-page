import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * PricingSection Component
 * Staff Engineer Level: Animated pricing cards, toggle functionality, comparison table
 */

const pricingPlans = [
  {
    name: "Standard Setup",
    subtitle: "Perfect for getting started",
    price: 800,
    period: "one-time",
    cta: "Get Started",
    highlight: false,
    features: [
      "Premium Conversion-Optimised Landing Page",
      "Mobile-responsive design",
      "SEO optimisation",
      "Basic lead capture form",
    ],
  },
  {
    name: "Advanced AI & Automation",
    subtitle: "Complete revenue engine",
    price: 1500,
    period: "setup",
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Standard, plus:",
      "AI-Powered Lead Qualification Chatbot",
      "Seamless Workflow Automation",
      "CRM integration",
      "30 days of support",
    ],
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white border-y border-border relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          className="text-center mb-16 md:mb-24 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-foreground" variants={itemVariants}>
            Transparent Pricing, Exceptional Value
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose the package that fits your business. All prices in GBP. No hidden fees.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-lg p-8 border relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-white border-primary shadow-2xl"
                  : "bg-background border-border"
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Badge */}
              {plan.badge && (
                <motion.div
                  className="absolute -top-4 left-8 bg-primary px-4 py-1 rounded-full text-sm font-semibold text-white"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Plan Info */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mb-8 ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>
                {plan.subtitle}
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <motion.span
                  className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  £{plan.price.toLocaleString()}
                </motion.span>
                <span className={`ml-2 ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-lg mb-8 font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white hover:bg-gray-100 text-primary"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <motion.li
                    key={featureIdx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.4 + featureIdx * 0.08 }}
                  >
                    {feature.includes("Everything") ? (
                      <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    ) : (
                      <>
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                        <span className={`text-sm ${plan.highlight ? "text-white" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-muted-foreground mb-4">Need something more customised?</p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 rounded-lg"
          >
            Get a Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
