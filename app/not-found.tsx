import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1 pb-24 pt-12 sm:pb-28 sm:pt-20">
        <Container>
          <section className="surface-card rounded-[2rem] p-7 sm:p-9 lg:p-10">
            <p className="eyebrow text-muted">404</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">
              The link may be outdated or the route may not be public in this
              version of the portfolio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/" variant="ghost">
                Back to Home
              </ButtonLink>
              <ButtonLink href="/work" variant="ghost">
                View Selected Work
              </ButtonLink>
            </div>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
