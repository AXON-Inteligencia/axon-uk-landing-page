import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

/**
 * ServicesSection Component
 * Staff Engineer Level: Staggered card animations, hover effects, responsive grid
 */

const services = [
  {
    title: "Premium Conversion-Optimised Landing Pages",
    description: "Speed, SEO, and user experience built for maximum lead generation. Every pixel is optimised for conversions.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/services-icon-1-Ug8VgNdnPUjJGgn8Qz3c9r.webp",
    features: [
      "Mobile-first responsive design",
      "SEO-optimised for UK search",
      "Lightning-fast load times",
    ],
  },
  {
    title: "AI-Powered Lead Qualification Assistants",
    description: "Intelligent chatbots that pre-qualify leads 24/7. Deliver only sales-ready prospects to your team.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/services-icon-2-f29mkRAszXiRZzseXCnyMK.webp",
    features: [
      "Natural language conversations",
      "Instant lead scoring",
      "WhatsApp & email handoff",
    ],
  },
  {
    title: "Seamless Workflow Automation",
    description: "Integrate with your existing tools. Automate repetitive tasks and focus on closing deals.",
    icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663658288933/nP2bvyqazAQS5hwuMnp9VY/services-icon-3-8APKyu7FJKXNey3vFFAWoj.webp",
    features: [
      "CRM integration (HubSpot, Pipedrive)",
      "Slack & email notifications",
      "Custom workflow builder",
    ],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Our High-Impact Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Three core capabilities that transform your business into a lead-generating powerhouse.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg p-8 border border-border cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Icon */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16"
                  loading="lazy"
                />
              </motion.div>

              {/* Title and Description */}
              <h3 className="text-foreground mb-3 font-semibold">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIdx) => (
                  <motion.li
                    key={featureIdx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + featureIdx * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
