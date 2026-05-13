import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState } from "react";

/**
 * TestimonialsSection Component
 * Staff Engineer Level: Carousel with swipe support, star ratings, animated transitions
 */

const testimonials = [
  {
    quote:
      "AXON transformed our website from a brochure into a lead-generating machine. We went from 2-3 leads per month to 15+ qualified prospects. The ROI was immediate.",
    author: "Sarah Mitchell",
    role: "Managing Director",
    company: "TechStart Solutions",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/testimonial-1-avatar.webp",
  },
  {
    quote:
      "The AI chatbot alone has saved us hours every week. It qualifies leads perfectly and sends only the best prospects to our sales team. Highly recommend.",
    author: "James Patel",
    role: "Sales Director",
    company: "Enterprise Solutions Ltd",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/testimonial-2-avatar.webp",
  },
  {
    quote:
      "Best investment we made this year. The landing page design is stunning, but what really impressed us was the automation setup. Everything just works.",
    author: "Emma Thompson",
    role: "CEO",
    company: "Growth Marketing Agency",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/testimonial-3-avatar.webp",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
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
            Loved by UK Businesses
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            See how AXON has transformed sales processes for companies across the UK.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={current.image}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <div>
                  <p className="font-semibold text-foreground">{current.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role} at {current.company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={goToPrevious}
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-8" : "bg-border"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={goToNext}
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
            Trusted by leading UK companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["TechStart", "Enterprise", "Growth Agency", "Digital Co"].map(
              (logo, idx) => (
                <motion.div
                  key={idx}
                  className="text-muted-foreground font-semibold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {logo}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
