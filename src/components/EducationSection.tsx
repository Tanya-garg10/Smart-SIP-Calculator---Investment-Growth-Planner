import { motion } from "framer-motion";

const cards = [
  {
    title: "What is SIP?",
    description:
      "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in a mutual fund. It brings discipline to investing and removes the need to time the market.",
    points: [
      "Invest a fixed amount every month",
      "Start with amounts as low as ₹500",
      "Benefit from rupee cost averaging",
    ],
  },
  {
    title: "Why Systematic Investing Helps",
    description:
      "Regular investing helps you benefit from compounding — earning returns on your returns. Over time, even small amounts can grow significantly.",
    points: [
      "Power of compounding over long periods",
      "Reduces impact of market volatility",
      "Builds a consistent savings habit",
    ],
  },
  {
    title: "Getting Started with SIP",
    description:
      "Starting a SIP is straightforward. Choose a mutual fund that aligns with your risk tolerance and financial goals, decide on a monthly amount, and stay invested.",
    points: [
      "Choose a fund matching your risk profile",
      "Set a monthly amount you can sustain",
      "Stay invested for the long term",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-surface py-16 md:py-24" aria-labelledby="edu-heading">
      <div className="container mx-auto px-4">
        <h2 id="edu-heading" className="mb-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Investor Education
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Simple explanations to help you make informed decisions.
        </p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-heading text-lg font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              <ul className="mt-auto space-y-2" role="list">
                {card.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
