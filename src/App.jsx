import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  Gift,
  LayoutDashboard,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

const CORE_APP_URL = "https://core.cosa.net.au";
const MAIN_SITE_URL = "https://cosa.net.au";
const OFFER_PROMO_CODE = "FIRSTFREE";
const LEGAL_ENTITY_NAME = "CUSTOM OPERATING SOFTWARE AUSTRALIA";
const LEGAL_ABN = "66 778 317 026";

const DEFAULT_PLAN_KEY = "growth";

function getOfferSubscribeUrl(planKey) {
  return `${CORE_APP_URL}/subscribe?plan=${planKey}&billing=monthly&code=${OFFER_PROMO_CODE}`;
}

const offerPoints = [
  "First month completely free",
  "Full access to every feature on your plan",
  "No setup fee",
  "No long-term contract",
  "Cancel anytime — including during the free month",
  "Paid billing only starts after your free month, unless you cancel",
];

const benefits = [
  {
    icon: Clock,
    title: "Save hours every week",
    text: "Stop juggling paper diaries, whiteboards and spreadsheets. Bookings, jobs and invoices live in one system, so admin that used to take hours takes minutes.",
  },
  {
    icon: FileText,
    title: "Reduce paperwork",
    text: "Digital job cards, quotes and invoices replace loose paper. Nothing gets lost between the front desk and the workshop floor.",
  },
  {
    icon: ClipboardList,
    title: "Keep every job organised",
    text: "Every booking, part, note and customer conversation stays attached to the job — so anyone on your team can pick it up and know exactly where it's at.",
  },
  {
    icon: BarChart3,
    title: "Improve workshop productivity",
    text: "See what's booked, what's waiting on parts and what's ready to invoice at a glance, so the bays stay full and jobs keep moving.",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Booking diary",
    text: "A clear daily view of everything coming in, so you can fill the schedule confidently without double-booking bays or techs.",
  },
  {
    icon: FileText,
    title: "Digital job cards",
    text: "Clean, printable job cards your techs can actually follow. Work gets captured properly, so nothing billable slips through.",
  },
  {
    icon: Users,
    title: "Customer management",
    text: "Every customer, vehicle and service history in one place. Answer 'what did you do last time?' in seconds, not filing cabinets.",
  },
  {
    icon: FileText,
    title: "Quotes and invoices",
    text: "Turn a quote into a job and a job into an invoice without retyping anything. Get paid faster with fewer disputes.",
  },
  {
    icon: Package,
    title: "Inventory and parts",
    text: "Track parts on order, mark arrivals in bulk and see what's holding a job up — so cars don't sit waiting because of a missed part.",
  },
  {
    icon: Users,
    title: "Staff management",
    text: "Staff accounts with the right access for each role, plus technician clock-on so you know where the day's hours actually went.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    text: "Live numbers on jobs, revenue and technician utilisation, so you make decisions on facts instead of gut feel.",
  },
  {
    icon: Wrench,
    title: "Workshop scheduling",
    text: "Plan the day across your whole team. Everyone sees the same live schedule, so the morning huddle takes two minutes.",
  },
];

const showcaseScreens = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Your whole workshop at a glance — today's jobs, bookings and what needs attention.",
    image: "/screenshots/dashboard.png",
  },
  {
    id: "bookings",
    icon: CalendarDays,
    title: "Booking diary",
    text: "See the day's schedule clearly and add bookings in seconds.",
    image: "/screenshots/bookings.png",
  },
  {
    id: "job-cards",
    icon: ClipboardList,
    title: "Job cards",
    text: "Digital job cards that keep techs and the front desk on the same page.",
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
    text: "Professional quotes and invoices, with payments tracked against every job.",
    image: "/screenshots/invoicing.png",
  },
];

const plans = [
  {
    name: "Starter",
    planKey: "starter",
    users: "5 users",
    monthlyPrice: 99,
    fit: "Perfect for small workshops getting off paper.",
  },
  {
    name: "Growth",
    planKey: "growth",
    users: "10 users",
    monthlyPrice: 149,
    fit: "The most popular choice for busy independent workshops.",
    featured: true,
  },
  {
    name: "Scale",
    planKey: "scale",
    users: "20 users",
    monthlyPrice: 249,
    fit: "For larger teams running multiple bays flat out.",
  },
];

const offerFaq = [
  {
    question: "How does the first month free offer work?",
    answer:
      "Choose a plan, create your workshop login and complete secure checkout. Your first month is free, and you get full access to every feature on your plan from day one.",
  },
  {
    question: "When will I be charged?",
    answer:
      "Your card is saved at checkout but nothing is charged for the first month. Your first payment happens when the free month ends — and only if you haven't cancelled.",
  },
  {
    question: "Can I cancel during the free month?",
    answer:
      "Yes. You can cancel anytime from Settings inside COSA Core. If you cancel during the free month, you pay nothing.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. There are no setup fees, onboarding fees or hidden extras. The monthly price is the whole price.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Every plan is month to month. Cancel whenever you like and you simply keep access until the end of your current billing period.",
  },
  {
    question: "Can I change plans?",
    answer:
      "Yes. You can upgrade to a bigger user limit at any time from inside COSA Core, and Stripe prorates the change automatically.",
  },
  {
    question: "What support is included?",
    answer:
      "Every plan includes support from the COSA team via the in-app support page and email. You talk to the people who build the software.",
  },
  {
    question: "Is COSA Core suitable for small workshops?",
    answer:
      "Absolutely. The Starter plan covers up to 5 users, and every plan includes the full feature set — small workshops get the same software as large ones.",
  },
];

function OfferBadge() {
  return (
    <p className="offer-badge">
      <Gift size={16} />
      First month free · No setup fee · Cancel anytime
    </p>
  );
}

function PrimaryOfferCta({ planKey = DEFAULT_PLAN_KEY, children }) {
  return (
    <a className="primary-button" href={getOfferSubscribeUrl(planKey)}>
      {children || "Start Your First Month Free"}
      <ArrowRight size={18} />
    </a>
  );
}

function Reassurance({ text = "No setup fee. No lock-in contract. Cancel anytime." }) {
  return (
    <p className="reassurance">
      <ShieldCheck size={16} />
      {text}
    </p>
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

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={MAIN_SITE_URL} aria-label="COSA home">
        <img src={`${MAIN_SITE_URL}/cosa-wordmark.png`} alt="COSA" />
      </a>

      <div className="header-actions">
        <a className="header-link" href={`${CORE_APP_URL}/login`}>
          Sign In
        </a>

        <a className="header-button" href={getOfferSubscribeUrl(DEFAULT_PLAN_KEY)}>
          Start Free Month
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <OfferBadge />

        <h1>Run your workshop smarter — first month free.</h1>

        <p className="hero-text">
          COSA Core brings bookings, job cards, customers, quotes, invoices,
          staff, parts and reporting into one clean system your whole team can
          use from day one.
        </p>

        <div className="hero-actions">
          <PrimaryOfferCta />

          <a className="secondary-button" href="#pricing">
            View Pricing
          </a>
        </div>

        <Reassurance />
      </div>

      <div className="hero-media">
        <div className="video-card">
          <video
            src={`${MAIN_SITE_URL}/cosa-core-preview.mp4`}
            controls
            playsInline
            poster={`${MAIN_SITE_URL}/cosa-core-video-cover.png`}
          />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="section compact-section">
      <div className="offer-panel">
        <div className="offer-copy">
          <p className="section-kicker">The offer</p>
          <h2>Try COSA Core free for a month. Keep it if it earns its place.</h2>
          <p>
            Start on any plan and use the full system in your workshop for a
            month before you pay a cent. If it's not saving you time, cancel in
            a couple of clicks and pay nothing.
          </p>
          <PrimaryOfferCta />
        </div>

        <ul className="offer-list">
          {offerPoints.map((point) => (
            <li key={point}>
              <BadgeCheck size={18} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-kicker">Why workshops switch</p>
        <h2>Less admin. More cars through the workshop.</h2>
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article key={benefit.title} className="card">
              <div className="card-icon">
                <Icon size={24} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-kicker">Features</p>
        <h2>Everything your workshop runs on, in one system.</h2>
        <span>
          Every plan includes every feature. You only choose how many users
          your team needs.
        </span>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article key={feature.title} className="card">
              <div className="card-icon">
                <Icon size={22} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>

      <div className="section-cta">
        <PrimaryOfferCta />
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-kicker">See it in action</p>
        <h2>Real screens from COSA Core.</h2>
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
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="section-heading">
        <p className="section-kicker">Pricing</p>
        <h2>Simple monthly pricing. First month free on every plan.</h2>
        <span>
          All prices include GST. Every plan includes the full COSA Core
          feature set — plans only differ by user limit.
        </span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.planKey}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
          >
            <div>
              {plan.featured ? (
                <p className="plan-flag">
                  <Sparkles size={14} />
                  Most popular
                </p>
              ) : null}

              <p className="plan-name">{plan.name}</p>
              <h3>{plan.users}</h3>

              <p className="price-free">First month free</p>
              <strong>then ${plan.monthlyPrice}/month</strong>
              <p className="gst-note">Includes GST. No setup fee.</p>

              <p>{plan.fit}</p>

              <ul className="plan-list">
                <li>
                  <Check size={16} />
                  Every COSA Core feature included
                </li>
                <li>
                  <Check size={16} />
                  No lock-in contract
                </li>
                <li>
                  <Check size={16} />
                  Cancel anytime
                </li>
              </ul>
            </div>

            <a href={getOfferSubscribeUrl(plan.planKey)}>
              Start Free Month
              <ChevronRight size={18} />
            </a>
          </article>
        ))}
      </div>

      <p className="pricing-footnote">
        Paid billing starts automatically after your free month unless you
        cancel first. Need more than 20 users?{" "}
        <a href={`${MAIN_SITE_URL}/contact`}>Talk to COSA about a custom plan</a>.
      </p>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section compact-section">
      <div className="proof-panel">
        <p className="section-kicker">Built for Australian workshops</p>
        <h2>Proudly built and operated in Perth.</h2>
        <p>
          COSA Core is developed by Custom Operating Software Australia and
          shaped by feedback from the workshops that use it every day. It
          connects with the tools you already run your business on.
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
        <p className="section-kicker">FAQ</p>
        <h2>Everything about the free month, answered.</h2>
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

function FinalCtaSection() {
  return (
    <section className="section">
      <div className="final-cta">
        <OfferBadge />
        <h2>Start running your workshop smarter today.</h2>
        <p>Get full access to COSA Core for your first month free.</p>

        <div className="hero-actions">
          <PrimaryOfferCta />

          <a className="secondary-button" href="#pricing">
            View Pricing
          </a>
        </div>

        <Reassurance text="No setup fee. Cancel anytime." />
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
        <a href={`${MAIN_SITE_URL}/pricing`}>Pricing</a>
        <a href={`${MAIN_SITE_URL}/contact`}>Contact</a>
        <a href={`${MAIN_SITE_URL}/privacy`}>Privacy</a>
        <a href={`${MAIN_SITE_URL}/terms`}>Terms</a>
        <a href={`${CORE_APP_URL}/login`}>Sign In</a>
      </nav>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <OfferSection />
      <BenefitsSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <ProofSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
