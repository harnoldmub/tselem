import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItemProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

interface StatItemPropsInternal extends StatItemProps {
  testId: string;
}

function AnimatedCounter({ end, duration = 2, label, suffix = "", testId }: StatItemPropsInternal) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div
        ref={ref}
        data-testid={testId}
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-destructive mb-3"
      >
        0
      </div>
      <div className="text-lg sm:text-xl font-sans font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-destructive text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-4 block">
            Nos Réalisations
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Une Décennie d'Excellence
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-sans">
            Des chiffres qui témoignent de notre passion et de votre confiance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={2500} suffix="+" label="Projets Réalisés" testId="text-stat-projects" />
          <AnimatedCounter end={850} suffix="+" label="Clients Satisfaits" testId="text-stat-clients" />
          <AnimatedCounter end={50000} suffix="+" label="Photos Livrées" testId="text-stat-photos" />
          <AnimatedCounter end={12} suffix="ans" label="D'Expérience" testId="text-stat-experience" />
        </div>
      </div>
    </section>
  );
}
