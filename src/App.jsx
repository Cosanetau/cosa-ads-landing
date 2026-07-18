import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Gift,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const CORE_APP_URL = "https://core.cosa.net.au";
const MAIN_SITE_URL = "https://cosa.net.au";
const OFFER_PROMO_CODE = "FIRSTFREE";
const LEGAL_ENTITY_NAME = "CUSTOM OPERATING SOFTWARE AUSTRALIA";
const LEGAL_ABN = "66 778 317 026";

const DEFAULT_PLAN_KEY = "growth";
const DEFAULT_BILLING = "monthly";
const CTA_LABEL = "Start My Free Month";

function getOfferSubscribeUrl(planKey, billingCycle = DEFAULT_BILLING) {
  const billing = billingCycle === "yearly" ? "yearly" : "monthly";
  return `${CORE_APP_URL}/subscribe?plan=${planKey}&billing=${billing}&code=${OFFER_PROMO_CODE}`;
}

function getYearlyPrice(monthlyPrice) {
  return monthlyPrice * 11;
}

const plans = [
  {
    name: "Starter",
    planKey: "starter",
    users: "5 users",
    monthlyPrice: 99,
    fit: "Small workshops getting off paper.",
  },
  {
    name: "Growth",
    planKey: "growth",
    users: "10 users",
    monthlyPrice: 149,
    fit: "Busy independent workshops.",
    featured: true,
  },
  {
    name: "Scale",
    planKey: "scale",
    users: "20 users",
    monthlyPrice: 249,
    fit: "Larger teams running multiple bays.",
  },
];

const painPoints = [
  {
    problem: "Paper job cards get lost and work goes unbilled.",
    solution:
      "Digital job cards keep every job, note and part in one place, so everything billable ends up on the invoice.",
  },
  {
    problem: "The diary, the whiteboard and the spreadsheet never agree.",
    solution:
      "One live booking diary the whole team sees. No double bookings and fewer missed appointments.",
  },
  {
    problem: "Quoting and invoicing eats your nights.",
    solution:
      "Turn a quote into a job and a job into an invoice without retyping anything. Done before you leave the shop.",
  },
];

const includedFeatures = [
  "Booking diary",
  "Digital job cards",
  "Customers & vehicle history",
  "Quotes & invoices",
  "Parts & inventory",
  "Staff accounts",
  "Reporting",
  "Service reminders",
  "Accounting integrations",
];

const offerFaq = [
  {
    question: "How does the free month work?",
    answer:
      "Pick monthly or yearly, create your workshop login and complete secure checkout. Your first month is free on either option, with full access from day one.",
  },
  {
    question: "When will I be charged?",
    answer:
      "Your card is saved at checkout but nothing is charged for the first month. On monthly, your first payment is the plan price after the free month. On yearly, you are charged the annual price after the free month, and the annual price covers a full year for the cost of 11 months.",
  },
  {
    question: "Can I cancel during the free month?",
    answer:
      "Yes. Cancel anytime from Settings inside COSA Core. If you cancel during the free month you pay nothing at all.",
  },
  {
    question: "Is there a setup fee or contract?",
    answer:
      "No. The listed price is the whole price and you can cancel whenever you like.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Minutes. Checkout creates your workshop automatically and you can sign straight in and start adding bookings the same day.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. Upgrade to a bigger user limit anytime from inside COSA Core. Billing adjusts automatically for the rest of your period.",
  },
  {
    question: "What support is included?",
    answer:
      "Every plan includes support from the COSA team via the in app support page and email. You talk directly to the people who build the software.",
  },
  {
    question: "Is it suitable for a small workshop?",
    answer:
      "Yes. The Starter plan covers up to 5 users and includes every feature. Small workshops get exactly the same software as large ones.",
  },
];

function OfferCta({ planKey = DEFAULT_PLAN_KEY, billingCycle }) {
  return (
    <a className="primary-button" href={getOfferSubscribeUrl(planKey, billingCycle)}>
      {CTA_LABEL}
      <ArrowRight size={18} />
    </a>
  );
}

function Microcopy() {
  return (
    <p className="microcopy">
      <ShieldCheck size={15} />
      No setup fee. Cancel anytime. Takes 2 minutes.
    </p>
  );
}

function Header({ billingCycle }) {
  return (
    <header className="site-header">
      <a className="brand" href={MAIN_SITE_URL} aria-label="COSA home">
        <img src="/cosa-wordmark.png" alt="COSA" />
      </a>

      <a
        className="header-button"
        href={getOfferSubscribeUrl(DEFAULT_PLAN_KEY, billingCycle)}
      >
        {CTA_LABEL}
        <ArrowRight size={16} />
      </a>
    </header>
  );
}

function Hero({ billingCycle }) {
  return (
    <section className="hero">
      <p className="offer-badge">
        <Gift size={16} />
        First month free on every plan
      </p>

      <h1>Run your workshop without the paperwork.</h1>

      <p className="hero-text">
        COSA Core replaces the paper diary, the whiteboard and the spreadsheet
        with one system for bookings, job cards, invoices and parts. Set up in
        minutes and see if it fits the way your workshop runs.
      </p>

      <div className="hero-actions">
        <OfferCta billingCycle={billingCycle} />
      </div>

      <Microcopy />

      <p className="hero-trust">Built in Perth for Australian workshops.</p>
    </section>
  );
}

function PricingSection({ billingCycle, setBillingCycle }) {
  const isYearly = billingCycle === "yearly";

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <h2>Simple pricing.</h2>
        <span>
          Every plan includes everything. You only pick how many users your
          team needs. All prices include GST.
        </span>
      </div>

      <div className="billing-toggle-wrap">
        <div className="billing-toggle" aria-label="Billing cycle">
          <button
            type="button"
            className={!isYearly ? "active" : ""}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>

          <button
            type="button"
            className={isYearly ? "active" : ""}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        <p className="billing-toggle-note">
          {isYearly ? (
            <>
              <strong>Best value:</strong>
              <span>pay for 11 months and get a full year</span>
            </>
          ) : (
            <>
              <strong>Flexible:</strong>
              <span>month to month with no contracts</span>
            </>
          )}
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => {
          const yearlyPrice = getYearlyPrice(plan.monthlyPrice);

          return (
            <article
              key={plan.planKey}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              <div>
                {plan.featured ? (
                  <p className="plan-flag">
                    <Sparkles size={14} />
                    Most workshops start here
                  </p>
                ) : null}

                <p className="plan-name">{plan.name}</p>
                <h3>{plan.users}</h3>

                <p className="price-free">First month free</p>

                {isYearly ? (
                  <>
                    <strong>then ${yearlyPrice}/year</strong>
                    <p className="gst-note">
                      Incl. GST. Covers a full year for the price of 11 months.
                    </p>
                  </>
                ) : (
                  <>
                    <strong>then ${plan.monthlyPrice}/month</strong>
                    <p className="gst-note">Incl. GST. No setup fee.</p>
                  </>
                )}

                <p className="plan-fit">{plan.fit}</p>

                <ul className="plan-list">
                  <li>
                    <Check size={16} />
                    Every feature included
                  </li>
                  <li>
                    <Check size={16} />
                    No contracts
                  </li>
                  <li>
                    <Check size={16} />
                    Cancel anytime
                  </li>
                </ul>
              </div>

              <a href={getOfferSubscribeUrl(plan.planKey, billingCycle)}>
                {CTA_LABEL}
                <ChevronRight size={18} />
              </a>
            </article>
          );
        })}
      </div>

      <p className="pricing-footnote">
        Your card is saved at checkout and nothing is charged until the free
        month ends. Cancel before then and you pay nothing. Need more than 20
        users? <a href={`${MAIN_SITE_URL}/contact`}>Talk to COSA</a>.
      </p>
    </section>
  );
}

function OfferStrip() {
  const points = [
    "Full access from day one",
    "No setup fee",
    "Cancel anytime",
    "Nothing charged in month one",
  ];

  return (
    <section className="offer-strip" aria-label="Offer terms">
      {points.map((point) => (
        <span key={point}>
          <BadgeCheck size={16} />
          {point}
        </span>
      ))}
    </section>
  );
}

function PainSection({ billingCycle }) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Why workshops switch.</h2>
      </div>

      <div className="pain-stack">
        {painPoints.map((item) => (
          <article key={item.problem} className="pain-row">
            <p className="pain-problem">{item.problem}</p>
            <p className="pain-solution">
              <Check size={17} />
              {item.solution}
            </p>
          </article>
        ))}
      </div>

      <div className="included-strip">
        <p>Everything is included on every plan:</p>
        <div className="included-pills">
          {includedFeatures.map((feature) => (
            <span key={feature}>
              <Check size={14} />
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="section-cta">
        <div>
          <OfferCta billingCycle={billingCycle} />
          <Microcopy />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Questions workshops ask before starting.</h2>
      </div>

      <div className="faq-grid">
        {offerFaq.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection({ billingCycle }) {
  return (
    <section className="section">
      <div className="final-cta">
        <h2>Ready for a tidier workshop?</h2>
        <p>
          Start today and use the full system in your workshop before you pay
          anything. If it does not earn its place, cancel and pay nothing.
        </p>

        <div className="hero-actions">
          <OfferCta billingCycle={billingCycle} />
        </div>

        <Microcopy />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © 2026 {LEGAL_ENTITY_NAME} trading as COSA. ABN {LEGAL_ABN}.
      </p>

      <nav>
        <a href={MAIN_SITE_URL}>cosa.net.au</a>
        <a href={`${MAIN_SITE_URL}/integrations`}>Integrations</a>
        <a href={`${MAIN_SITE_URL}/privacy`}>Privacy</a>
        <a href={`${MAIN_SITE_URL}/terms`}>Terms</a>
        <a href={`${CORE_APP_URL}/login`}>Sign In</a>
      </nav>
    </footer>
  );
}

function StickyMobileCta({ billingCycle }) {
  return (
    <div className="sticky-cta">
      <a
        className="primary-button"
        href={getOfferSubscribeUrl(DEFAULT_PLAN_KEY, billingCycle)}
      >
        {CTA_LABEL}
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

// Conversion bridge: Stripe sends new subscribers here so Google Ads can
// record the conversion on this domain, then we forward them into the app.
function WelcomeBridge() {
  useEffect(() => {
    const target = `${CORE_APP_URL}/welcome${window.location.search}`;
    const timer = window.setTimeout(() => {
      window.location.replace(target);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="welcome-bridge">
      <img src="/cosa-wordmark.png" alt="COSA" width="140" />
      <p>Setting up your account…</p>
    </main>
  );
}

export default function App() {
  const [billingCycle, setBillingCycle] = useState(DEFAULT_BILLING);

  if (window.location.pathname.startsWith("/welcome")) {
    return <WelcomeBridge />;
  }

  return (
    <main>
      <Header billingCycle={billingCycle} />
      <Hero billingCycle={billingCycle} />
      <PricingSection
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />
      <OfferStrip />
      <PainSection billingCycle={billingCycle} />
      <FaqSection />
      <FinalCtaSection billingCycle={billingCycle} />
      <Footer />
      <StickyMobileCta billingCycle={billingCycle} />
    </main>
  );
}
