import { getTranslations, setRequestLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function Home({ params }: PageProps) {
  setRequestLocale((await params).locale);
  const t = await getTranslations("home");

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 pt-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <Badge
          variant="outline"
          className="border-primary/40 bg-primary/10 text-primary"
        >
          {t("badge")}
        </Badge>
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-primary text-sheen">{chunks}</span>
              ),
            })}
          </h1>
          <p className="text-balance text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>
        {/* <div className="flex flex-wrap gap-3">
          <Button size="lg" className="shadow-glow">
            {t("primaryCta")}
          </Button>
          <Button size="lg" variant="outline">
            {t("secondaryCta")}
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            {t("notePrimary")}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t("noteSecondary")}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-sm font-semibold text-foreground">
            {t("comingSoonTitle")}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t("comingSoonBody")}
          </p>
        </div> */}
      </div>

      <div className="relative">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-lg">{t("cardTitle")}</CardTitle>
              <Badge
                variant="outline"
                className="border-primary/40 bg-primary/10 text-primary"
              >
                {t("badge")}
              </Badge>
            </div>
            <CardDescription>{t("cardDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{t("cardMetricLabel")}</span>
                <span>{t("cardMetricValue")}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[10%] rounded-full bg-primary/80 shadow-glow" />
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-muted-foreground">{t("cardStatusLabel")}</p>
                <p className="font-semibold text-foreground">
                  {t("cardStatusValue")}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-muted-foreground">
                  {t("cardTimelineLabel")}
                </p>
                <p className="font-semibold text-foreground">
                  {t("cardTimelineValue")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
