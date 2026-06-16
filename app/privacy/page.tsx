import Link from "next/link";
import { company, offices } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Validation Associates LLC collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "June 2026";

export default function PrivacyPolicyPage() {
  const hq = offices.find((o) => o.isHQ)!;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Text-only navy hero - matches the established hero pattern (clients,
            careers) but omits the image column since this is a legal page. */}
        <section className="relative bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 py-16 md:py-20 lg:py-24">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
              <span className="w-2 h-2 bg-[color:var(--color-green)]" />
              Legal
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/60">
              Last Updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="mx-auto max-w-[820px] px-6 lg:px-10 py-16 md:py-20 text-[color:var(--color-ink)] leading-relaxed">
            <p className="text-lg">
              {company.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates the website
              {" "}
              <a
                href="https://www.validationassociates.com"
                className="text-[color:var(--color-green-deep)] underline hover:no-underline"
              >
                www.validationassociates.com
              </a>{" "}
              (the &ldquo;Site&rdquo;). We provide IT regulatory compliance,
              Healthcare and life sciences consulting & staffing services and
              are committed to protecting your personal information and your
              right to privacy.
            </p>
            <p className="mt-5 text-lg">
              This Privacy Policy explains what information we collect, how we
              use it, and what rights you have concerning it.
            </p>

            <PolicySection number="1" title="Information We Collect">
              <p>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our services, or when you contact us. The personal
                information that we collect depends on the context of your
                interactions with us and the Site, and may include:
              </p>
              <ul className="mt-5 space-y-4">
                <PolicyBullet term="Contact Data">
                  First and last name, email address, postal address, phone
                  number, and other similar contact data.
                </PolicyBullet>
                <PolicyBullet term="Professional Data">
                  Job title, company name, and professional background if
                  submitted via inquiry forms.
                </PolicyBullet>
                <PolicyBullet term="Automatically Collected Data">
                  We automatically collect certain information when you visit,
                  use, or navigate the Site (such as your IP address, browser,
                  and device characteristics). This information does not reveal
                  your specific identity but is primarily needed to maintain
                  the security and operation of our Site, and for our internal
                  analytics.
                </PolicyBullet>
              </ul>
            </PolicySection>

            <PolicySection number="2" title="How We Use Your Information">
              <p>
                We use personal information collected via our Site for a
                variety of business purposes described below:
              </p>
              <ul className="mt-5 space-y-2 list-disc pl-6 marker:text-[color:var(--color-green-deep)]">
                <li>To respond to user inquiries and offer support.</li>
                <li>
                  To send administrative information to you, such as updates to
                  our terms, conditions, and policies.
                </li>
                <li>
                  To deliver professional services and fulfill consulting
                  engagements.
                </li>
                <li>
                  To protect our Site and maintain industry-standard security
                  measures.
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              number="3"
              title="SMS Communications and Third-Party Data Sharing"
            >
              <p className="font-semibold text-[color:var(--color-navy)]">
                We strictly respect your privacy. {company.legalName} does not
                sell, rent, or share personal data, including mobile phone
                numbers and SMS opt-in consent, with third-party entities,
                affiliates, or partners for marketing or promotional purposes.
              </p>
              <p className="mt-4">
                Any text messaging originator opt-in data and consent provided
                to us will be kept strictly confidential and used exclusively
                for direct communication between you and {company.legalName}{" "}
                regarding your specific inquiries or active consulting
                engagements.
              </p>
            </PolicySection>

            <PolicySection number="4" title="Disclosure of Your Information">
              <p>
                We only share information in the following strictly limited
                situations:
              </p>
              <ul className="mt-5 space-y-4">
                <PolicyBullet term="Legal Obligations">
                  We may disclose your information where we are legally
                  required to do so in order to comply with applicable law,
                  governmental requests, a judicial proceeding, court order, or
                  legal process.
                </PolicyBullet>
                <PolicyBullet term="Vital Interests and Legal Rights">
                  We may disclose your information where we believe it is
                  necessary to investigate, prevent, or take action regarding
                  potential violations of our policies, suspected fraud, or
                  situations involving potential threats to the safety of any
                  person.
                </PolicyBullet>
              </ul>
              <p className="mt-5 text-sm italic text-[color:var(--color-ink-muted)]">
                Note: As stated in Section 3, this does not include sharing SMS
                opt-in data or mobile numbers with any third parties for their
                own marketing or business purposes.
              </p>
            </PolicySection>

            <PolicySection number="5" title="Security of Your Information">
              <p>
                Given our focus on IT regulatory compliance, we take data
                security seriously. We have implemented appropriate technical
                and organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards, no electronic transmission over the
                Internet or information storage technology can be guaranteed to
                be 100% secure.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Your Privacy Rights">
              <p>
                Depending on your location, you may have the right to request
                access to the personal information we collect from you, change
                that information, or delete it in some circumstances. To
                request to review, update, or delete your personal information,
                please contact us using the details provided below.
              </p>
              <p className="mt-4">
                If you have opted in to receive SMS messages, you may opt out
                at any time by replying &ldquo;STOP&rdquo; to any message you
                receive from us.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Contact Us">
              <p>
                If you have any questions, comments and/or requests regarding
                this General Privacy Policy or to exercise your rights with
                respect to your Personal Information (as applicable), please
                contact us by email or phone.
              </p>
              <div className="mt-6 bg-[color:var(--color-cream)] border-l-4 border-[color:var(--color-green)] p-6 not-italic">
                <p className="font-semibold text-[color:var(--color-navy)]">
                  {company.legalName}
                </p>
                <p className="mt-2 text-sm">
                  {hq.street}
                  <br />
                  {hq.cityState}
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-semibold text-[color:var(--color-navy)]">
                    Email:
                  </span>{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[color:var(--color-green-deep)] underline hover:no-underline"
                  >
                    {company.email}
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold text-[color:var(--color-navy)]">
                    Phone:
                  </span>{" "}
                  <a
                    href={`tel:${company.hqPhone}`}
                    className="text-[color:var(--color-green-deep)] underline hover:no-underline"
                  >
                    {company.hqPhone}
                  </a>
                </p>
              </div>
            </PolicySection>

            <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] text-sm text-[color:var(--color-ink-muted)]">
              <Link
                href="/"
                className="text-[color:var(--color-green-deep)] underline hover:no-underline"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] leading-tight tracking-tight">
        <span className="text-[color:var(--color-green-deep)] mr-3 font-mono text-xl">
          {number}.
        </span>
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function PolicyBullet({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-[color:var(--color-green-deep)] mt-1.5 shrink-0">
        ›
      </span>
      <span>
        <span className="font-semibold text-[color:var(--color-navy)]">
          {term}:
        </span>{" "}
        {children}
      </span>
    </li>
  );
}
