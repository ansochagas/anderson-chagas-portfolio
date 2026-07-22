import type { Metadata } from "next";

import { EditorialCaseSection } from "@/components/home/editorial-case-section";
import { ExecutiveMetrics } from "@/components/home/executive-metrics";
import { ExperienceEditorial } from "@/components/home/experience-editorial";
import { ExpertiseBlocks } from "@/components/home/expertise-blocks";
import { HeroVisual } from "@/components/home/hero-visual";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getDetailedCaseBySlug } from "@/data/case-content";
import {
  aboutSkillBlocks,
  bcsKpis,
  contactDescription,
  contactPrompt,
  experienceHighlights,
  heroMetrics,
  homeHero,
  professionalSummary,
  profileLinks,
  publishedPortfolioCases,
  resumeAsset,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Executive portfolio for Anderson Chagas, Senior Technical Product Manager focused on SaaS, AI, automation and digital transformation.",
});

export default function Home() {
  const linkedInProfile = profileLinks.find(
    (profile) => profile.label === "LinkedIn",
  );
  const publishedCaseStories = publishedPortfolioCases
    .map((caseStudy) => ({
      caseStudy,
      detail: getDetailedCaseBySlug(caseStudy.slug),
    }))
    .filter((item) => item.detail);

  return (
    <PageShell>
      <main className="flex-1 pb-28">
        <section className="pb-24 pt-10 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
          <Container className="space-y-10 lg:space-y-12">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(500px,1.04fr)] xl:items-center 2xl:grid-cols-[minmax(0,0.94fr)_minmax(560px,1.06fr)]">
              <div className="space-y-8 text-white">
                <div className="space-y-5">
                  <p className="eyebrow text-[#8bcfff]">{homeHero.name}</p>
                  <div className="space-y-3">
                    <p className="text-lg font-medium tracking-[-0.03em] text-white/74 sm:text-xl">
                      {homeHero.title}
                    </p>
                    <p className="text-sm uppercase tracking-[0.28em] text-white/42 sm:text-base">
                      {homeHero.subtitle}
                    </p>
                  </div>
                  <h1 className="max-w-[12ch] text-balance text-[clamp(3.35rem,5.2vw,6rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
                    {homeHero.statement}
                  </h1>
                  <p className="max-w-[38rem] text-lg leading-8 text-white/68 sm:text-[1.32rem] sm:leading-9">
                    {homeHero.supportingText}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="#selected-work" variant="primary">
                    View Selected Cases
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary">
                    Contact
                  </ButtonLink>
                  {linkedInProfile ? (
                    <ButtonLink href={linkedInProfile.href} variant="secondary">
                      LinkedIn
                    </ButtonLink>
                  ) : null}
                </div>
              </div>

              <HeroVisual />
            </div>

            <ExecutiveMetrics metrics={heroMetrics} />
          </Container>
        </section>

        <section id="about" className="py-20 sm:py-24">
          <Container className="grid gap-10 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-start">
            <div className="space-y-6 text-white">
              <p className="eyebrow text-[#8bcfff]">About</p>
              <h2 className="max-w-[14ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Executive product leadership with real technical depth.
              </h2>
              <div className="max-w-[39rem] space-y-5 text-base leading-8 text-white/72 sm:text-lg">
                {professionalSummary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  My work sits between product, technology and business
                  execution, especially where SaaS, AI, automation and process
                  transformation intersect.
                </p>
              </div>
            </div>

            <ExpertiseBlocks blocks={aboutSkillBlocks} />
          </Container>
        </section>

        <section id="experience" className="py-20 sm:py-24">
          <Container className="space-y-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-end">
              <div className="space-y-4 text-white">
                <p className="eyebrow text-[#c6ccff]">Experience</p>
                <h2 className="max-w-[14ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Product, governance and systems work shaped by delivery
                  reality.
                </h2>
              </div>

              <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
                A non-linear path across software development, enterprise
                transformation and SaaS product leadership, with emphasis on
                discovery, coordination and buildable solutions.
              </p>
            </div>

            <ExperienceEditorial entries={experienceHighlights} />
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container className="space-y-10">
            <div className="space-y-4 text-white">
              <p className="eyebrow text-[#8bcfff]">Selected Cases</p>
              <h2 className="max-w-[20ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Three case studies showing strategy, technical depth and
                implementation thinking.
              </h2>
            </div>

            <div className="space-y-8">
              {publishedCaseStories.map(({ caseStudy, detail }, index) =>
                detail ? (
                  <EditorialCaseSection
                    key={caseStudy.slug}
                    caseStudy={caseStudy}
                    detail={detail}
                    index={index}
                  />
                ) : null,
              )}
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container className="space-y-8">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-center">
              <div className="space-y-4 text-white">
                <p className="eyebrow text-[#62B778]">BCS KPIs</p>
                <h2 className="max-w-[15ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl">
                  A SaaS trajectory with measurable growth.
                </h2>
              </div>

              <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
                Public metrics currently available for BCS Sports Analytics,
                highlighting user reach, revenue, team leadership and product
                continuity.
              </p>
            </div>

            <ExecutiveMetrics metrics={bcsKpis} />
          </Container>
        </section>

        <section id="contact" className="py-20 sm:py-24">
          <Container>
            <div className="rounded-[2.4rem] border border-white/10 bg-[#102734]/88 p-7 text-white backdrop-blur-sm sm:p-9 lg:p-10">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] xl:items-end">
                <div className="space-y-5">
                  <p className="eyebrow text-[#F4A83D]">Contact</p>
                  <h2 className="max-w-[16ch] text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    {contactPrompt}
                  </h2>
                  <p className="max-w-[38rem] text-base leading-8 text-white/70 sm:text-lg">
                    {contactDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 xl:justify-end">
                  <ButtonLink
                    download={resumeAsset.downloadName}
                    href={resumeAsset.href}
                    variant="secondary"
                  >
                    {resumeAsset.label}
                  </ButtonLink>
                  {profileLinks.map((profile) => (
                    <ButtonLink
                      key={profile.label}
                      href={profile.href}
                      variant="secondary"
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
