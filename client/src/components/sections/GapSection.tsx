import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * GapSection Component
 * Staff Engineer Level: Scroll-triggered animations, staggered reveals, premium typography
 */

export const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section className="py-20 md:py-32 bg-white border-y border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-foreground" variants={itemVariants}>
            Are Your Website Visitors Turning into Revenue, or Just Page Views?
          </motion.h2>

          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most websites are just digital business cards—beautiful to look at, but generating zero revenue. They sit there, collecting dust, while your competitors are converting visitors into qualified leads and paying customers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">AXON changes that.</span> We build high-performance sales engines that work 24/7. Every visitor is qualified, every lead is tracked, and every conversion is measurable. Your website stops being a brochure and becomes a revenue-generating machine.
            </p>
          </motion.div>

          {/* Highlight box with animation */}
          <motion.div
            className="mt-8 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <p className="text-foreground font-semibold">
              The difference? A strategic approach to design, automation, and conversion optimization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
