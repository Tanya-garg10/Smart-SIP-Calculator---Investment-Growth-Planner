import { Link } from "react-router-dom";

const footerLinks = {
  About: [
    { name: "Our Mission", path: "/about" },
    { name: "Team", path: "/about#team" },
    { name: "Careers", path: "/about#careers" },
  ],
  "Investor Education": [
    { name: "SIP Guide", path: "/sip-guide" },
    { name: "Mutual Funds 101", path: "/mutual-funds-101" },
    { name: "Risk Assessment", path: "/risk-assessment" },
  ],
  Contact: [
    { name: "Support", path: "/support" },
    { name: "Feedback", path: "/feedback" },
    { name: "Partner With Us", path: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Disclaimer", path: "/disclaimer" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider opacity-70">
                {category}
              </h3>
              <ul className="space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
          <p>For educational purposes only. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
