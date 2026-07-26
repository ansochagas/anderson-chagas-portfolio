import { Container } from "@/components/ui/container";
import { profileLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#081820] text-white">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="font-heading text-lg font-medium tracking-[-0.03em] text-white">
              Anderson Chagas
            </p>
            <p className="text-base text-white/78">
              Senior Technical Product Manager
            </p>
            <p className="text-sm leading-6 text-white/62">
              Based in Brazil / Available for remote collaboration
            </p>
          </div>

          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/72">
              {profileLinks.slice(0, 3).map((profile) => (
                <li key={profile.label}>
                  <a
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8bcfff]/70"
                    href={profile.href}
                    rel={
                      profile.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    target={profile.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
