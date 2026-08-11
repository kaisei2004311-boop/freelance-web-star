import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { FadeIn } from "@/components/FadeIn";
import { flow, navItems, profile, services, skills, works } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web制作ポートフォリオ｜Webサイト制作・コーディング" },
      {
        name: "description",
        content:
          "Webサイト制作・LP制作・レスポンシブ対応・既存サイト修正を承ります。HTML / CSS / JavaScriptを中心に、見やすく使いやすいサイトを制作します。",
      },
      { property: "og:title", content: "Web制作ポートフォリオ｜Webサイト制作・コーディング" },
      {
        property: "og:description",
        content:
          "Webサイト制作・LP制作・レスポンシブ対応・既存サイト修正を承ります。制作の流れとサンプル実績を掲載しています。",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Web制作ポートフォリオ",
          description:
            "HTML / CSS / JavaScriptによるWebサイト制作・LP制作・レスポンシブ対応・既存サイト修正。",
          areaServed: "JP",
          serviceType: ["LP制作", "Webサイト制作", "レスポンシブ対応", "Webサイト修正"],
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ------------------------------------------------------------------ */
/* ヘッダー                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-8">
        <a href="#top" className="min-w-0 truncate font-display text-base font-bold tracking-[0.2em]">
          PORTFOLIO
        </a>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="モバイルナビゲーション"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* セクション共通パーツ                                                */
/* ------------------------------------------------------------------ */

function SectionHeading({ label, lead }: { label: string; lead?: string }) {
  return (
    <FadeIn className="mb-14 md:mb-20">
      <h2 className="font-display text-3xl font-bold tracking-[0.16em] md:text-4xl">{label}</h2>
      <span className="mt-5 block h-px w-12 bg-accent" aria-hidden="true" />
      {lead && <p className="mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">{lead}</p>}
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ */
/* ページ本体                                                          */
/* ------------------------------------------------------------------ */

function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-32 pb-24 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-surface"
          />
          <div className="relative mx-auto w-full max-w-6xl">
            <FadeIn>
              <p className="eyebrow">Portfolio</p>
            </FadeIn>
            <FadeIn delay={120}>
              <h1
                id="hero-title"
                className="mt-8 font-display text-[2.1rem] leading-[1.5] font-bold tracking-tight sm:text-5xl sm:leading-[1.45] lg:text-6xl lg:leading-[1.4]"
              >
                Webサイト制作で、
                <br />
                あなたの想いをカタチに。
              </h1>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="mt-8 text-xs tracking-[0.3em] text-muted-foreground sm:text-sm">
                Web Design / Coding / Responsive
              </p>
            </FadeIn>
            <FadeIn delay={360}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#works"
                  className="inline-flex h-14 items-center justify-center rounded-sm bg-primary px-10 text-sm tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
                >
                  制作実績を見る
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center rounded-sm border border-border px-10 text-sm tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  お問い合わせ
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title" className="px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="ABOUT" />
            <div className="grid gap-12 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16">
              {/* 顔写真スペース：src/assets に画像を追加して <img> に差し替えできます */}
              <FadeIn>
                <div className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-sm border border-dashed border-border bg-surface">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground">PHOTO</span>
                </div>
              </FadeIn>
              <FadeIn delay={120}>
                <h3 className="font-display text-xl font-bold">
                  Web制作・フロントエンド開発を行っています。
                </h3>
                <div className="mt-6 space-y-6 text-sm leading-8 text-muted-foreground">
                  <p>
                    HTML / CSS /
                    JavaScriptを中心に、ユーザーにとって見やすく使いやすいWebサイト制作を心がけています。
                  </p>
                  <p>
                    お客様のご要望を丁寧にヒアリングし、最後まで責任を持って対応いたします。
                    分かりにくい専門用語は使わず、進め方をひとつずつご説明しますので、
                    はじめてWebサイトを依頼される方も安心してご相談ください。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" aria-labelledby="skills-title" className="bg-surface px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="SKILLS" lead="制作で使用している技術です。" />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => (
                <FadeIn as="li" key={skill.title} delay={i * 80}>
                  <div className="h-full rounded-sm border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                    <h3 className="font-display text-lg font-bold tracking-wide">{skill.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{skill.description}</p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE */}
        <section id="service" aria-labelledby="service-title" className="px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="SERVICE" lead="ご対応できる制作内容です。" />
            <ul className="grid gap-6 md:grid-cols-2">
              {services.map((service, i) => (
                <FadeIn as="li" key={service.title} delay={i * 80}>
                  <div className="group h-full rounded-sm border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] md:p-10">
                    <span className="eyebrow">0{i + 1}</span>
                    <h3 className="mt-4 font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-8 text-muted-foreground">{service.description}</p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" aria-labelledby="works-title" className="bg-surface px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="WORKS"
              lead="掲載しているものは、制作スキルをご確認いただくための自主制作サンプルです。"
            />
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <FadeIn as="li" key={work.id} delay={(i % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.45)]">
                    <div className="overflow-hidden bg-muted">
                      <img
                        src={work.image}
                        alt={`${work.title}のサイトイメージ`}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-base font-bold">{work.title}</h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-sm bg-muted px-2.5 py-1 text-[0.7rem] tracking-wider text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{work.description}</p>
                      <a
                        href={work.url ?? "#works"}
                        className="mt-6 inline-flex items-center gap-2 self-start text-xs tracking-[0.18em] text-foreground transition-colors hover:text-accent"
                      >
                        詳しく見る
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* FLOW */}
        <section id="flow" aria-labelledby="flow-title" className="px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="FLOW"
              lead="お問い合わせから納品までの流れです。はじめての方にも分かるようにご案内します。"
            />
            <ol className="border-t border-border">
              {flow.map((item, i) => (
                <FadeIn as="li" key={item.step} delay={i * 60}>
                  <div className="group grid gap-4 border-b border-border py-8 transition-colors duration-300 hover:bg-surface md:grid-cols-[120px_220px_minmax(0,1fr)] md:items-baseline md:gap-8 md:px-4">
                    <span className="font-display text-2xl font-bold text-accent">{item.step}</span>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm leading-8 text-muted-foreground">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="bg-primary px-6 py-24 text-primary-foreground md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="eyebrow text-primary-foreground/60">Contact</p>
              <h2
                id="contact-title"
                className="mt-6 font-display text-2xl leading-[1.6] font-bold md:text-3xl"
              >
                Webサイト制作・修正のご相談はこちら
              </h2>
              <p className="mt-6 text-sm leading-8 text-primary-foreground/70">
                「何から相談すればいいか分からない」という段階でも大丈夫です。
                ご希望をお伺いしたうえで、内容とお見積りをご案内します。
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-12 inline-flex h-14 items-center justify-center rounded-sm bg-accent px-12 text-sm tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                お問い合わせ
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-base font-bold tracking-[0.2em]">{profile.name}</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground">{profile.role}</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
