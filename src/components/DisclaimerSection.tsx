const DisclaimerSection = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="disclaimer-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-xl border-l-4 border-accent bg-accent/5 p-6 md:p-8" role="alert">
          <h2 id="disclaimer-heading" className="mb-3 font-heading text-lg font-semibold text-foreground">
            Important Disclaimer
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This calculator is provided for <strong className="text-foreground">educational and illustrative purposes only</strong>.
            The projections shown are based on hypothetical assumptions and do not represent actual investment performance.
            Mutual fund investments are subject to market risks. Past performance is not indicative of future results.
            Please read all scheme-related documents carefully before investing. Consult a qualified financial advisor
            for personalized investment advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
