import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { profileLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#081820] text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="font-heading text-lg font-medium tracking-[-0.03em] text-white">
              Anderson Chagas
            </p>
            <p className="text-base text-white/72">
              Senior Technical Product Manager
            </p>
            <p className="text-sm text-white/52">
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
