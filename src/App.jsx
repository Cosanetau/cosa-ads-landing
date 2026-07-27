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

const sharedSupport =
  "COSA Core puts bookings, job cards, invoices and parts in one system. First month free. No setup fee. Cancel anytime.";

// One page per Google Ads headline so the first thing they see matches the click.
const landings = {
  "/": {
    headline: "Workshop Software Made Easy",
    support: sharedSupport,
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core workshop dashboard",
    showcaseTitle: "See COSA Core in a real workshop.",
    showcaseText: "Dashboard, booking diary, follow ups and support in one system.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
  "/ditch-paper-job-cards": {
    headline: "Ditch The Paper Job Cards",
    support:
      "Keep every job, note and part on one digital card. Print when you need to, and turn finished work into an invoice without retyping.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core dashboard replacing paper job cards",
    showcaseTitle: "Digital job cards your floor can follow.",
    showcaseText: "Less lost paperwork. More work that makes it onto the invoice.",
    pains: [
      {
        problem: "Paper job cards get lost and work goes unbilled.",
        solution:
          "Digital job cards keep every job, note and part in one place, so everything billable ends up on the invoice.",
      },
      {
        problem: "Customers call for updates and nobody knows the status.",
        solution:
          "Office notes and technician notes sit on the same job card for a clear answer.",
      },
      {
        problem: "Parts and labour live in different places.",
        solution:
          "Add work and parts to the job as it happens, then invoice from the same record.",
      },
    ],
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
  "/no-setup-fee": {
    headline: "No setup fee, cancel anytime",
    support:
      "Start COSA Core with first month free. No setup fee, no lock in contract, and you can cancel before the free month ends and pay nothing.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core with no setup fee",
    showcaseTitle: "Full access from day one.",
    showcaseText: "Try the whole system before you pay a cent.",
    pains: [
      {
        problem: "Most software wants a setup fee before you even try it.",
        solution: "COSA Core has no setup fee. Start free and see if it fits.",
      },
      {
        problem: "Long contracts lock you in before the tool proves itself.",
        solution: "Cancel anytime. If you cancel in the free month, you pay nothing.",
      },
      {
        problem: "You need the full system, not a limited trial.",
        solution: "First month free includes every feature on every plan.",
      },
    ],
    gallery: ["dashboard", "booking-diary", "support"],
  },
  "/aussie-workshops": {
    headline: "Built For Aussie Workshops",
    support:
      "Workshop software built in Perth for Australian workshops. Bookings, job cards, invoices and parts in one place, with local support.",
    image: "/screenshots/booking-diary.png",
    imageAlt: "COSA Core booking diary for Australian workshops",
    showcaseTitle: "Made for the way Aussie workshops run.",
    showcaseText: "Built and supported in Perth, not bolted on from overseas.",
    pains: painPoints,
    gallery: ["booking-diary", "dashboard", "follow-ups"],
  },
  "/first-month-free": {
    headline: "First Month Free",
    support:
      "Get full access to COSA Core for your first month free. No setup fee. Cancel anytime. Takes a couple of minutes to start.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core first month free",
    showcaseTitle: "Try the full system before you pay.",
    showcaseText: "Bookings, job cards, invoices and parts included from day one.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
  "/run-workshop-smarter": {
    headline: "Run Your Workshop Smarter",
    support:
      "One system for the diary, job cards, invoices and parts. Less chasing paperwork. More time on cars.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core workshop dashboard",
    showcaseTitle: "Today's workshop in one screen.",
    showcaseText: "Jobs, alerts and team activity without the whiteboard chaos.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
  "/bookings-jobs-invoices": {
    headline: "Bookings, Jobs & Invoices",
    support:
      "Run the booking diary, job cards and invoices from one place. First month free on every plan.",
    image: "/screenshots/booking-diary.png",
    imageAlt: "COSA Core booking diary",
    showcaseTitle: "From booking to invoice without retyping.",
    showcaseText: "The diary, the job and the invoice stay connected.",
    pains: painPoints,
    gallery: ["booking-diary", "dashboard", "follow-ups"],
  },
  "/workshop-software": {
    headline: "Workshop Software Made Easy",
    support: sharedSupport,
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core workshop software",
    showcaseTitle: "Simple software for busy workshops.",
    showcaseText: "Clean screens your team can use without training days.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "support"],
  },
  // Keep older ad paths working.
  "/bookings": {
    headline: "Workshop Software Made Easy",
    support:
      "One live diary for the whole team. See the day at a glance, confirm jobs fast and stop chasing whiteboards.",
    image: "/screenshots/booking-diary.png",
    imageAlt: "COSA Core booking diary",
    showcaseTitle: "A booking diary your floor can actually follow.",
    showcaseText: "Live schedule, job numbers and status in one view.",
    pains: painPoints,
    gallery: ["booking-diary", "dashboard", "follow-ups"],
  },
  "/job-cards": {
    headline: "Ditch The Paper Job Cards",
    support:
      "Keep every job, note and part on one digital card. Print when you need to, and turn finished work into an invoice without retyping.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core digital workshop system",
    showcaseTitle: "Digital job cards your floor can follow.",
    showcaseText: "Less lost paperwork. More work that makes it onto the invoice.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
  "/invoicing": {
    headline: "Bookings, Jobs & Invoices",
    support:
      "Turn a quote into a job and a job into an invoice. First month free, then clear monthly pricing with no setup fee.",
    image: "/screenshots/dashboard.png",
    imageAlt: "COSA Core invoices and workshop tools",
    showcaseTitle: "Quotes and invoices that follow the job.",
    showcaseText: "Line items, labour and totals ready to print or email.",
    pains: painPoints,
    gallery: ["dashboard", "booking-diary", "follow-ups"],
  },
};

const screenshotMeta = {
  dashboard: {
    src: "/screenshots/dashboard.png",
    alt: "COSA Core dashboard",
    label: "Dashboard",
  },
  "booking-diary": {
    src: "/screenshots/booking-diary.png",
    alt: "COSA Core booking diary",
    label: "Booking diary",
  },
  "follow-ups": {
    src: "/screenshots/follow-ups.png",
    alt: "COSA Core follow ups",
    label: "Follow ups",
  },
  support: {
    src: "/screenshots/support.png",
    alt: "COSA Core support tickets",
    label: "Support",
  },
};

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

function Hero({ billingCycle, landing }) {
  return (
    <section className="hero hero-with-shot">
      <div className="hero-copy">
        <h1>{landing.headline}</h1>

        <p className="offer-badge">
          <Gift size={16} />
          First month free on every plan
        </p>

        <p className="hero-text">{landing.support}</p>

        <div className="hero-actions">
          <OfferCta billingCycle={billingCycle} />
        </div>

        <Microcopy />

        <p className="hero-trust">Built in Perth for Australian workshops.</p>
      </div>

      <div className="hero-shot">
        <img src={landing.image} alt={landing.imageAlt} />
      </div>
    </section>
  );
}

function ProductShowcase({ landing }) {
  const gallery = (landing.gallery || ["dashboard", "booking-diary", "follow-ups"])
    .map((key) => screenshotMeta[key])
    .filter(Boolean);

  return (
    <section className="section product-showcase">
      <div className="section-heading">
        <p className="section-kicker">Inside COSA Core</p>
        <h2>{landing.showcaseTitle}</h2>
        <span>{landing.showcaseText}</span>
      </div>

      <div className="screenshot-grid">
        {gallery.map((shot) => (
          <figure key={shot.src} className="screenshot-card">
            <img src={shot.src} alt={shot.alt} />
            <figcaption>{shot.label}</figcaption>
          </figure>
        ))}
      </div>
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

function PainSection({ billingCycle, landing }) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Why workshops switch.</h2>
      </div>

      <div className="pain-stack">
        {(landing?.pains || painPoints).map((item) => (
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

// Conversion thank-you page: Stripe lands here so Google Ads can record the
// Subscribe conversion, then the customer is prompted to sign in.
function WelcomeBridge() {
  const [status, setStatus] = useState("checking");
  const [workshopName, setWorkshopName] = useState("");
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id") || "";
  const appWelcomeUrl = `${CORE_APP_URL}/welcome${window.location.search}`;
  const loginUrl = `${CORE_APP_URL}/login`;

  useEffect(() => {
    let cancelled = false;

    const fireConversion = () => {
      if (typeof window.gtag !== "function" || !sessionId) return;
      const storageKey = `cosa-ads-conversion:${sessionId}`;
      if (sessionStorage.getItem(storageKey)) return;
      sessionStorage.setItem(storageKey, "1");
      window.gtag("event", "conversion", {
        send_to: "AW-18332129397/-g7OCJWXztIcEPWwuKVE",
      });
    };

    async function handleWelcome() {
      if (!sessionId) {
        setStatus("missing");
        return;
      }

      try {
        const response = await fetch(
          `${CORE_APP_URL}/api/checkout-status?session_id=${encodeURIComponent(sessionId)}`,
        );
        const result = await response.json().catch(() => ({}));

        if (cancelled) return;

        if (response.ok && result.paymentComplete) {
          fireConversion();
          setWorkshopName(result.businessName || "");
          setStatus("ready");
          return;
        }

        setStatus("pending");
      } catch {
        if (!cancelled) setStatus("pending");
      }
    }

    handleWelcome();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <main className="welcome-bridge welcome-thankyou">
      <img src="/cosa-wordmark.png" alt="COSA" width="160" />

      {status === "checking" ? (
        <>
          <h1>Confirming your subscription…</h1>
          <p>Hang tight while we finish setup.</p>
        </>
      ) : null}

      {status === "ready" ? (
        <>
          <p className="offer-badge">
            <BadgeCheck size={16} />
            Subscription confirmed
          </p>
          <h1>Thanks{workshopName ? `, ${workshopName}` : ""}. You are in.</h1>
          <p>
            Your first month is free. Sign in to open COSA Core and start adding
            bookings.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={loginUrl}>
              Sign in to COSA Core
              <ArrowRight size={16} />
            </a>
            <a className="secondary-button" href={appWelcomeUrl}>
              Continue setup
            </a>
          </div>
          <p className="hero-trust">No setup fee. Cancel anytime.</p>
        </>
      ) : null}

      {status === "pending" || status === "missing" ? (
        <>
          <h1>Almost there.</h1>
          <p>
            {status === "missing"
              ? "Open COSA Core to finish setting up your workshop."
              : "Your checkout is still processing. Sign in once your account is ready."}
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={loginUrl}>
              Sign in to COSA Core
              <ArrowRight size={16} />
            </a>
            <a className="secondary-button" href={appWelcomeUrl}>
              Continue to setup
            </a>
          </div>
        </>
      ) : null}
    </main>
  );
}

function getLandingConfig() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return landings[path] || landings["/"];
}

export default function App() {
  const [billingCycle, setBillingCycle] = useState(DEFAULT_BILLING);
  const landing = getLandingConfig();

  if (window.location.pathname.startsWith("/welcome")) {
    return <WelcomeBridge />;
  }

  return (
    <main>
      <Header billingCycle={billingCycle} />
      <Hero billingCycle={billingCycle} landing={landing} />
      <ProductShowcase landing={landing} />
      <PricingSection
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />
      <OfferStrip />
      <PainSection billingCycle={billingCycle} landing={landing} />
      <FaqSection />
      <FinalCtaSection billingCycle={billingCycle} />
      <Footer />
      <StickyMobileCta billingCycle={billingCycle} />
    </main>
  );
}
