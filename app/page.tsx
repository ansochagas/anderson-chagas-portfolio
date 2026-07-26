import type { Metadata } from "next";

import { ExecutiveMetrics } from "@/components/home/executive-metrics";
import { HomeExperienceList } from "@/components/home/home-experience-list";
import { SelectedWorkTeasers } from "@/components/home/selected-work-teasers";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  aboutSkillBlocks,
  contactDescription,
  contactPrompt,
  experienceHighlights,
  heroMetrics,
  homeHero,
  professionalSummary,
  resumeAsset,
  profileLinks,
} from "@/data/site-content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Executive portfolio for Anderson Chagas, Senior Technical Product Manager focused on SaaS, AI, automation and digital transformation.",
});

export default function Home() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1 pb-28">
        <section className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <Container className="space-y-10 lg:space-y-12">
            <div className="space-y-7 text-white">
              <div className="space-y-3">
                <p className="text-base font-medium tracking-[-0.03em] text-white/82 sm:text-lg">
                  {homeHero.name}
                </p>
                <div className="space-y-2">
                  <p className="text-base text-white/64 sm:text-lg">
                    {homeHero.title}
                  </p>
                  <p className="text-sm text-white/44 sm:text-base">
                    {homeHero.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-[12ch] text-balance text-[clamp(3.2rem,6vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                  {homeHero.statement}
                </h1>
                <p className="max-w-[40rem] text-lg leading-8 text-white/70 sm:text-[1.35rem] sm:leading-9">
                  {homeHero.supportingText}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#selected-work" variant="primary">
                  View Selected Work
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <ExecutiveMetrics metrics={heroMetrics} />
          </Container>
        </section>

        <section id="about" className="py-16 sm:py-20">
          <Container className="grid gap-12 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:items-start">
            <div className="space-y-6 text-white">
              <h2 className="max-w-[14ch] text-balance text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                Product leadership with business clarity and technical depth.
              </h2>
              <div className="max-w-[40rem] space-y-5 text-base leading-8 text-white/72 sm:text-lg">
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

            <div className="grid gap-6 md:grid-cols-2">
              {aboutSkillBlocks.map((block) => (
                <article
                  key={block.title}
                  className="border-t border-white/10 pt-5 text-white"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/70">
                    {block.summary}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/52 sm:text-base">
                    {block.items.join(" / ")}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="experience" className="py-16 sm:py-20">
          <Container className="space-y-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-end">
              <div className="space-y-4 text-white">
                <h2 className="max-w-[14ch] text-balance text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
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

            <HomeExperienceList entries={experienceHighlights} />
          </Container>
        </section>

        <section id="selected-work" className="py-16 sm:py-20">
          <Container className="space-y-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-end">
              <div className="space-y-4 text-white">
                <h2 className="max-w-[15ch] text-balance text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  Selected work with depth kept in the case pages.
                </h2>
              </div>

              <p className="max-w-[42rem] text-base leading-8 text-white/68 sm:text-lg">
                Three case studies showing strategy, technical depth and
                implementation thinking.
              </p>
            </div>

            <SelectedWorkTeasers />
          </Container>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <Container>
            <div className="rounded-[2.4rem] border border-white/10 bg-[#102734]/46 p-7 text-white sm:p-9 lg:p-10">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)] xl:items-end">
                <div className="space-y-5">
                  <h2 className="max-w-[16ch] text-balance text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] sm:max-w-[14ch]">
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
