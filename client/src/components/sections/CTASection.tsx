import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * CTASection Component
 * Staff Engineer Level: Scroll-triggered animations, gradient backgrounds, premium typography
 */

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
            Ready to Transform Your Sales Process?
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Book a free 30-minute strategy call to discover how AXON can build your next high-performance sales engine.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Strategy Call Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={itemVariants}
          >
            {[
              "✓ No credit card required",
              "✓ 30-minute strategy call",
              "✓ Customised recommendations",
            ].map((badge, idx) => (
              <motion.span
                key={idx}
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
