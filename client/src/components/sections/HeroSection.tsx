import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * HeroSection Component
 * Staff Engineer Level: Sophisticated animations, scroll-triggered effects, responsive design
 * Design: Asymmetric layout with data visualization, premium positioning
 */

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-foreground leading-tight font-bold"
                variants={itemVariants}
              >
                High-Performance Sales Engines for UK Businesses
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                We combine conversion-driven design with AI automation to transform visitors into qualified leads, 24/7.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-lg group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary rounded-lg"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators with animation */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-border"
              variants={itemVariants}
            >
              {[
                { value: "£800", label: "Starting Investment" },
                { value: "24/7", label: "Lead Qualification" },
                { value: "100%", label: "Custom Built" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual with parallax effect */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl"
            variants={imageVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/hero-data-visualization-Tkm375RKx3B46zBGPxW9wo.webp"
              alt="Data visualization showing growth trends"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
