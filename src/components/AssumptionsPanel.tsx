import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const assumptions = [
  {
    id: "returns",
    title: "Return Assumptions",
    content:
      "The calculator uses a fixed annual return rate for projection. Actual mutual fund returns vary based on market conditions, fund type, and economic factors. Past performance does not guarantee future results.",
  },
  {
    id: "duration",
    title: "Investment Duration",
    content:
      "The projection assumes consistent monthly contributions throughout the entire investment period without interruption. Missing or varying contributions will affect the actual outcome.",
  },
  {
    id: "market",
    title: "Market Variability",
    content:
      "Markets experience cycles of growth and decline. The straight-line growth shown in this calculator does not reflect the actual volatility investors experience. Real returns may be higher or lower in any given period.",
  },
  {
    id: "purpose",
    title: "Educational Purpose",
    content:
      "This calculator is designed solely for educational and illustrative purposes. It is not financial advice. Consult a qualified financial advisor before making investment decisions.",
  },
];

const AssumptionsPanel = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="assumptions-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2
            id="assumptions-heading"
            className="mb-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            Assumptions & Methodology
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Understand the basis for these projections.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Accordion type="multiple" className="w-full">
              {assumptions.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssumptionsPanel;
