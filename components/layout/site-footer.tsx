import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { profileLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/90 bg-page-soft/72">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="font-heading text-lg font-medium tracking-[-0.03em] text-ink">
              Anderson Chagas
            </p>
            <p className="text-base text-ink/72">
              Senior Technical Product Manager
            </p>
            <p className="text-sm text-ink/58">
              Based in Brazil / Available for remote collaboration
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
      </Container>
    </footer>
  );
}
