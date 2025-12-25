import { Separator } from "@/components/ui/separator";

type SiteFooterLabels = {
  rights: string;
  terms: string;
  privacy: string;
  status: string;
};

type SiteFooterProps = {
  labels: SiteFooterLabels;
};

export function SiteFooter({ labels }: SiteFooterProps) {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12">
      <Separator className="bg-white/10" />
      <div className="mt-6 flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2025 Rainode. {labels.rights}</p>
        <div className="flex gap-6">
          <a className="transition hover:text-foreground" href="/terms">
            {labels.terms}
          </a>
          <a className="transition hover:text-foreground" href="/privacy">
            {labels.privacy}
          </a>
          <a className="transition hover:text-foreground" href="/status">
            {labels.status}
          </a>
        </div>
      </div>
    </footer>
  );
}
