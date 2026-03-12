import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const HeroSection = ({ onStartClick }: { onStartClick: () => void }) => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28 lg:py-36">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Theme Toggle */}
      <div className="absolute right-4 top-4 z-20 md:right-8 md:top-8">
        <ThemeToggle />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-heading text-sm font-semibold text-primary">
            Investor Education Tool
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Smart SIP Investment
            <span className="block text-primary">Calculator</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Estimate the future value of your systematic investments with transparent assumptions.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onStartClick}
              className="rounded-lg bg-primary px-8 py-3.5 font-heading text-base font-semibold text-primary-foreground shadow-card transition-all hover:shadow-elevated hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Start using the SIP calculator"
            >
              Start Calculating
            </button>
            <a
              href="#education"
              className="rounded-lg border-2 border-primary bg-transparent px-8 py-3.5 font-heading text-base font-semibold text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Learn how SIP works"
            >
              Learn How SIP Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
