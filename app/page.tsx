import type { Metadata } from "next";

import { HeroVisual } from "@/components/home/hero-visual";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/ui/section-intro";
import { CaseCard } from "@/components/work/case-card";
import {
  contactDescription,
  contactPrompt,
  experienceSnapshot,
  homeHero,
  professionalSummary,
  profileLinks,
  publishedPortfolioCases,
  resumeAsset,
  whatIBring,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Senior Technical Product Manager connecting product strategy, software development, AI, automation and digital transformation.",
});

export default function Home() {
  const linkedInProfile = profileLinks.find(
    (profile) => profile.label === "LinkedIn",
  );

  return (
    <PageShell>
      <main className="flex-1">
        <section className="pb-20 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="fade-up space-y-8 text-white">
              <div className="space-y-5">
                <p className="eyebrow text-white/62">{homeHero.name}</p>
                <p className="text-lg font-medium tracking-[-0.03em] text-white/78 sm:text-xl">
                  {homeHero.title}
                </p>
                <h1 className="text-balance max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  {homeHero.statement}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  {homeHero.supportingText}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#selected-work" variant="primary">
                  View Selected Work
                </ButtonLink>
                <ButtonLink
                  download={resumeAsset.downloadName}
                  href={resumeAsset.href}
                  variant="secondary"
                >
                  {resumeAsset.label}
                </ButtonLink>
                {linkedInProfile ? (
                  <ButtonLink href={linkedInProfile.href} variant="secondary">
                    Connect on LinkedIn
                  </ButtonLink>
                ) : null}
              </div>
            </div>

            <HeroVisual />
          </Container>
        </section>

        <section id="selected-work" className="pb-24 sm:pb-32">
          <Container>
            <SectionIntro
              eyebrow="Selected Work"
              title="Three case studies that show product strategy, technical depth and delivery thinking."
              description="A focused selection across SaaS, enterprise transformation and AI/data prototyping."
              invert
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {publishedPortfolioCases.map((caseStudy) => (
                <CaseCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                  featured={caseStudy.featured}
                />
              ))}
            </div>
          </Container>
        </section>

        <section id="about" className="pb-24 sm:pb-28">
          <Container>
            <div className="surface-card rounded-[2rem] p-7 sm:p-9 lg:p-10">
              <div className="max-w-4xl space-y-4">
                <p className="eyebrow text-muted">Professional Introduction</p>
                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
                  Product thinking with technical depth.
                </h2>
              </div>

              <div className="mt-8 max-w-4xl space-y-5 text-[1.02rem] leading-8 text-ink/78">
                <p>{professionalSummary[0]}</p>
                <p>{professionalSummary[1]}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24 sm:pb-28">
          <Container>
            <SectionIntro
              eyebrow="What I Bring"
              title="A compact view of how I contribute."
              description="Focused on discovery, technical collaboration and practical AI opportunities."
              invert
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {whatIBring.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.6rem] border p-6 ${
                    index === 1
                      ? "surface-card-dark border-white/10 text-white"
                      : "surface-card text-ink"
                  }`}
                >
                  <p
                    className={`eyebrow ${
                      index === 1 ? "text-white/66" : "text-ink/58"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <h2
                    className={`mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] ${
                      index === 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`mt-4 text-base leading-7 ${
                      index === 1 ? "text-white/74" : "text-ink/72"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="experience" className="pb-24 sm:pb-28">
          <Container>
            <div className="surface-card-dark rounded-[2rem] p-7 text-white sm:p-9 lg:p-10">
              <SectionIntro
                eyebrow="Experience Snapshot"
                title="A concise view of the roles behind the work."
                description="Structured as a quick professional summary, not a full resume."
                invert
              />

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {experienceSnapshot.map((item) => (
                  <article
                    key={item.role}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5"
                  >
                    <p className="eyebrow text-white/42">Role</p>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">
                      {item.role}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-white/68">
                      {item.context}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="pb-24 sm:pb-28">
          <Container>
            <div className="surface-card rounded-[2rem] p-7 sm:p-9 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-end">
                <div className="space-y-5">
                  <p className="eyebrow text-muted">Contact</p>
                  <h2 className="text-balance max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
                    {contactPrompt}
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-ink/72 sm:text-lg">
                    {contactDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {profileLinks.map((profile) => (
                    <ButtonLink
                      key={profile.label}
                      href={profile.href}
                      variant="ghost"
                    >
                      {profile.label}
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </PageShell>
  );
}
