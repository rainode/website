import Link from "next/link";
import { Button } from "@/components/ui/button";

type SiteHeaderLabels = {
  brandName: string;
  brandTagline: string;
  cta: string;
};

type SiteHeaderProps = {
  labels: SiteHeaderLabels;
};

export function SiteHeader({ labels }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base font-semibold text-primary shadow-glow">
          R
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight">
            {labels.brandName}
          </p>
          <p className="text-xs text-muted-foreground">{labels.brandTagline}</p>
        </div>
      </Link>
      {/* <div className="flex items-center gap-2">
        <Button size="sm" className="shadow-glow">
          {labels.cta}
        </Button>
      </div> */}
    </header>
  );
}
