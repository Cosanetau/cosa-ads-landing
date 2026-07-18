import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  FileText,
  Gift,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Users,
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
    fit: "Busy independent workshops. Most start here.",
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
    problem: "Jobs written on paper get lost, and work goes unbilled.",
    solution:
      "Digital job cards keep every job, note and part in one place — so everything billable ends up on the invoice.",
  },
  {
    problem: "The diary, the whiteboard and the spreadsheet never agree.",
    solution:
      "One live booking diary the whole team sees. No double-booked bays, no surprise no-shows.",
  },
  {
    problem: "Quoting and invoicing eats your nights and weekends.",
    solution:
      "Turn a quote into a job and a job into an invoice without retyping a thing. Done before you leave the shop.",
  },
];

const includedFeatures = [
  "Booking diary",
  "Digital job cards",
  "Customers & vehicle history",
  "Quotes & invoices",
  "Parts & inventory",
  "Staff accounts & clock-on",
  "Reporting",
  "Service reminders",
  "Xero & QuickBooks integration",
];

const showcaseScreens = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Today's jobs, bookings and what needs attention — at a glance.",
    image: "/screenshots/dashboard.png",
  },
  {
    id: "bookings",
    icon: CalendarDays,
    title: "Booking diary",
    text: "The day's schedule, clear. Add a booking in seconds.",
    image: "/screenshots/bookings.png",
  },
  {
    id: "job-cards",
    icon: ClipboardList,
    title: "Job cards",
    text: "Techs and the front desk on the same page, every job.",
    image: "/screenshots/job-cards.png",
  },
  {
    id: "customers",
    icon: Users,
    title: "Customers",
    text: "Full customer and vehicle history the moment they call.",
    image: "/screenshots/customers.png",
  },
  {
    id: "invoicing",
    icon: FileText,
    title: "Invoicing",
    text: "Professional invoices with payments tracked on every job.",
    image: "/screenshots/invoicing.png",
  },
];

const offerFaq = [
  {
    question: "How does the first month free work?",
    answer:
      "Pick monthly or yearly, create your workshop login and complete secure checkout. Your first month is free on either option, with full access from day one.",
  },
  {
    question: "When will I be charged?",
    answer:
      "Your card is saved at checkout but nothing is charged for the first month. On monthly, your first payment is the plan price after the free month. On yearly, you're charged the annual price after the free month — and the annual price is only 11 months, so a second month is free too.",
  },
  {
    question: "Can I cancel during the free month?",
    answer:
      "Yes. Cancel anytime from Settings inside COSA Core. Cancel during the free month and you pay nothing at all.",
  },
  {
    question: "Is there a setup fee or lock-in contract?",
    answer:
      "No and no. The listed price is the whole price, and you can cancel whenever you like.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Minutes, not weeks. Checkout creates your workshop automatically and you can sign straight in and start adding bookings the same day.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. Upgrade to a bigger user limit anytime from inside COSA Core — Stripe prorates the change automatically.",
  },
  {
    question: "What support is included?",
    answer:
      "Every plan includes support from the COSA team via the in-app support page and email. You talk directly to the people who build the software.",
  },
  {
    question: "Is it suitable for a small workshop?",
    answer:
      "Yes. The Starter plan covers up to 5 users and includes every feature — small workshops get exactly the same software as large ones.",
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
      No setup fee · Cancel anytime · Takes 2 minutes
    </p>
  );
}

function Header({ billingCycle }) {
  return (
    <header className="site-header">
      <a className="brand" href={MAIN_SITE_URL} aria-label="COSA home">
        <img src={`${MAIN_SITE_URL}/cosa-wordmark.png`} alt="COSA" />
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

      <h1>
        Run your workshop without the paperwork.
        <span> First month free.</span>
      </h1>

      <p className="hero-text">
        COSA Core replaces the paper diary, the whiteboard and the spreadsheet
        with one system for bookings, job cards, invoices and parts. Try it in
        your workshop free for a month — if it doesn't save you hours, cancel
        and pay nothing.
      </p>

      <div className="hero-actions">
        <OfferCta billingCycle={billingCycle} />
      </div>

      <Microcopy />

      <p className="hero-trust">
        Built in Perth for Australian workshops · Connects with Xero &
        QuickBooks
      </p>
    </section>
  );
}

function PricingSection({ billingCycle, setBillingCycle }) {
  const isYearly = billingCycle === "yearly";

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <h2>Simple pricing. First month free either way.</h2>
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
            Yearly — save a month
          </button>
        </div>

        <p className="billing-toggle-note">
          {isYearly ? (
            <>
              <strong>Best value:</strong>
              <span>first month free, then pay for 11 months and get 12</span>
            </>
          ) : (
            <>
              <strong>Lowest commitment:</strong>
              <span>first month free, then month to month</span>
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
                      Incl. GST · 11 months for a full year — save $
                      {plan.monthlyPrice}
                    </p>
                  </>
                ) : (
                  <>
                    <strong>then ${plan.monthlyPrice}/month</strong>
                    <p className="gst-note">Incl. GST · No setup fee</p>
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
                    {isYearly ? "Pay for 11 months, get 12" : "No lock-in contract"}
                  </li>
                  <li>
                    <Check size={16} />
                    Cancel anytime — even in the free month
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
        Card saved at checkout, charged only after your free month — and never
        if you cancel first. Need more than 20 users?{" "}
        <a href={`${MAIN_SITE_URL}/contact`}>Talk to COSA</a>.
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
        <h2>Sound familiar?</h2>
      </div>

      <div className="pain-stack">
        {painPoints.map((item) => (
          <article key={item.problem} className="pain-row">
            <p className="pain-problem">"{item.problem}"</p>
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

function ShowcaseImage({ screen }) {
  const [failed, setFailed] = useState(false);
  const Icon = screen.icon;

  if (failed) {
    return (
      <div className="shot-fallback" aria-hidden="true">
        <Icon size={30} />
        <span>{screen.title}</span>
      </div>
    );
  }

  return (
    <img
      src={screen.image}
      alt={`COSA Core ${screen.title.toLowerCase()} screen`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ProofSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>See it before you start.</h2>
        <span>Real screens from COSA Core, and a two-minute look inside.</span>
      </div>

      <div className="proof-layout">
        <div className="video-card">
          <video
            src={`${MAIN_SITE_URL}/cosa-core-preview.mp4`}
            controls
            playsInline
            preload="none"
            poster={`${MAIN_SITE_URL}/cosa-core-video-cover.png`}
          />
        </div>

        <div className="shot-grid">
          {showcaseScreens.map((screen) => (
            <figure key={screen.id} className="shot-card">
              <div className="shot-frame">
                <ShowcaseImage screen={screen} />
              </div>
              <figcaption>
                <strong>{screen.title}</strong>
                <span>{screen.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="perth-strip">
        <p>
          <strong>Built and supported in Perth.</strong> COSA Core is developed
          by Custom Operating Software Australia and shaped by the workshops
          that use it every day. When you need help, you talk to the people who
          build it.
        </p>
        <div className="logo-row" aria-label="Available integrations">
          <img src={`${MAIN_SITE_URL}/integrations/xero.svg`} alt="Xero" loading="lazy" />
          <img
            src={`${MAIN_SITE_URL}/integrations/quickbooks.svg`}
            alt="QuickBooks"
            loading="lazy"
          />
          <img src={`${MAIN_SITE_URL}/integrations/podium.svg`} alt="Podium" loading="lazy" />
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
        <p className="offer-badge">
          <Gift size={16} />
          First month free on every plan
        </p>

        <h2>Your first month is free. The paperwork isn't.</h2>
        <p>
          Every week on paper costs you hours you don't get back. Try COSA Core
          free — worst case, you cancel and it cost you nothing.
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
      <span>First month free</span>
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

export default function App() {
  const [billingCycle, setBillingCycle] = useState(DEFAULT_BILLING);

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
      <ProofSection />
      <FaqSection />
      <FinalCtaSection billingCycle={billingCycle} />
      <Footer />
      <StickyMobileCta billingCycle={billingCycle} />
    </main>
  );
}
