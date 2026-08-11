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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 font-display text-sm font-bold tracking-[0.28em]"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150"
          />
          <span className="truncate">PORTFOLIO</span>
        </a>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.7rem] font-medium tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-primary px-5 text-[0.7rem] tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-accent"
          >
            CONTACT
          </a>
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
          className="animate-fade-in border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-sm tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="font-display text-[0.65rem] text-accent">
                    0{i + 1}
                  </span>
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

function SectionHeading({
  id,
  label,
  index,
  title,
  lead,
  tone = "light",
}: {
  id: string;
  label: string;
  index: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
}) {
  return (
    <FadeIn className="mb-14 md:mb-20">
      <div className="flex items-center gap-4">
        <span
          className={`font-display text-[0.7rem] tracking-[0.3em] ${tone === "dark" ? "text-accent" : "text-accent"}`}
        >
          {index}
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
        <span
          className={`font-display text-[0.7rem] tracking-[0.3em] ${tone === "dark" ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          {label}
        </span>
      </div>
      <h2
        id={id}
        className="mt-6 font-display text-[1.75rem] leading-[1.45] font-bold tracking-tight md:text-[2.5rem] md:leading-[1.35]"
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-6 max-w-2xl text-[0.9rem] leading-8 ${tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {lead}
        </p>
      )}
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ */
/* ページ本体                                                          */
/* ------------------------------------------------------------------ */

function HomePage() {
  const [featured, ...restWorks] = works;

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-32 pb-20 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="hairline-grid pointer-events-none absolute inset-0 text-foreground opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 hidden h-[34rem] w-[34rem] rounded-full border border-border/70 md:block"
          />

          <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div>
              <FadeIn>
                <p className="flex items-center gap-4 font-display text-[0.7rem] tracking-[0.32em] text-muted-foreground">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  PORTFOLIO / {new Date().getFullYear()}
                </p>
              </FadeIn>

              <FadeIn delay={120}>
                <h1
                  id="hero-title"
                  className="mt-9 font-display text-[2.25rem] leading-[1.45] font-bold tracking-[-0.01em] sm:text-[3.25rem] sm:leading-[1.4] lg:text-[4rem] lg:leading-[1.35]"
                >
                  <span className="block">Webサイト制作で、</span>
                  <span className="mt-1 block">
                    あなたの
                    <span className="relative inline-block">
                      想い
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1 h-[0.35em] -z-10 bg-accent/15"
                      />
                    </span>
                    をカタチに。
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={240}>
                <p className="mt-9 max-w-xl text-sm leading-8 text-muted-foreground">
                  HTML / CSS / JavaScriptを使い、見やすく・使いやすく・崩れないWebサイトを制作します。
                </p>
              </FadeIn>

              <FadeIn delay={360}>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#works"
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
                  >
                    制作実績を見る
                    <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-border px-10 text-sm tracking-[0.15em] transition-all duration-500 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    お問い合わせ
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={480} className="lg:pb-2">
              <ul className="space-y-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                {["Web Design", "Coding", "Responsive"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-display text-[0.7rem] tracking-[0.28em] text-muted-foreground"
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <span
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-display text-[0.6rem] tracking-[0.35em] text-muted-foreground md:block"
          >
            SCROLL
          </span>
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title" className="px-6 py-24 md:py-36 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="about-title"
              index="01"
              label="ABOUT"
              title="丁寧なやりとりと、崩れない実装を。"
            />
            <div className="grid gap-12 md:grid-cols-[300px_minmax(0,1fr)] md:gap-20">
              {/* 顔写真スペース：src/assets に画像を追加して <img> に差し替えできます */}
              <FadeIn>
                <div className="relative max-w-[300px]">
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 -left-3 h-full w-full border border-accent/30"
                  />
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-surface">
                    <span className="text-[0.7rem] tracking-[0.28em] text-muted-foreground">PHOTO</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={120}>
                <h3 className="font-display text-xl leading-[1.7] font-bold md:text-2xl">
                  Web制作・フロントエンド開発を行っています。
                </h3>
                <div className="mt-8 space-y-6 text-[0.9rem] leading-9 text-muted-foreground">
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
                <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  {[
                    { term: "NAME", desc: profile.name },
                    { term: "ROLE", desc: profile.role },
                    { term: "AREA", desc: "オンライン対応（全国）" },
                  ].map((item) => (
                    <div key={item.term}>
                      <dt className="font-display text-[0.65rem] tracking-[0.28em] text-muted-foreground">
                        {item.term}
                      </dt>
                      <dd className="mt-2 text-sm">{item.desc}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          aria-labelledby="skills-title"
          className="bg-surface px-6 py-24 md:py-36 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="skills-title"
              index="02"
              label="SKILLS"
              title="制作で使用している技術です。"
            />
            <ul className="border-t border-border">
              {skills.map((skill, i) => (
                <FadeIn as="li" key={skill.title} delay={i * 60}>
                  <div className="group grid gap-3 border-b border-border py-8 transition-colors duration-500 hover:bg-background md:grid-cols-[80px_260px_minmax(0,1fr)] md:items-baseline md:gap-10 md:px-6">
                    <span className="font-display text-[0.7rem] tracking-[0.28em] text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-wide transition-transform duration-500 md:group-hover:translate-x-1">
                      {skill.title}
                    </h3>
                    <p className="text-[0.9rem] leading-8 text-muted-foreground">{skill.description}</p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE */}
        <section id="service" aria-labelledby="service-title" className="px-6 py-24 md:py-36 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="service-title"
              index="03"
              label="SERVICE"
              title="ご対応できる制作内容です。"
            />
            <ul className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {services.map((service, i) => (
                <FadeIn as="li" key={service.title} delay={i * 80} className="bg-background">
                  <div className="group relative h-full p-10 transition-colors duration-500 hover:bg-surface md:p-14">
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                    />
                    <span className="font-display text-4xl font-bold text-border transition-colors duration-500 group-hover:text-accent/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-4 text-[0.9rem] leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* WORKS */}
        <section
          id="works"
          aria-labelledby="works-title"
          className="bg-surface px-6 py-24 md:py-36 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="works-title"
              index="04"
              label="WORKS"
              title="制作実績"
              lead="掲載しているものは、制作スキルをご確認いただくための自主制作サンプルです。"
            />

            {/* 1件目は大きく見せる */}
            <FadeIn>
              <article className="group grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center md:gap-14">
                <a
                  href={featured.url ?? "#works"}
                  className="relative block overflow-hidden bg-muted"
                  aria-label={`${featured.title}を見る`}
                >
                  <img
                    src={featured.image}
                    alt={`${featured.title}のサイトイメージ`}
                    width={1280}
                    height={860}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/15"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-6 left-6 inline-flex h-11 items-center rounded-full bg-background px-6 font-display text-[0.65rem] tracking-[0.28em] opacity-0 transition-all duration-500 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0"
                  >
                    VIEW
                  </span>
                </a>
                <div>
                  <span className="font-display text-[0.65rem] tracking-[0.28em] text-accent">FEATURED</span>
                  <h3 className="mt-4 font-display text-2xl leading-[1.6] font-bold">{featured.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-3 py-1 text-[0.7rem] tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[0.9rem] leading-8 text-muted-foreground">
                    {featured.description}
                  </p>
                  <a
                    href={featured.url ?? "#works"}
                    className="link-underline mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em]"
                  >
                    詳しく見る
                    <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </FadeIn>

            <ul className="mt-16 grid gap-x-10 gap-y-16 md:mt-24 md:grid-cols-2">
              {restWorks.map((work, i) => (
                <FadeIn as="li" key={work.id} delay={(i % 2) * 100} className={i % 2 === 1 ? "md:mt-16" : ""}>
                  <article className="group">
                    <a
                      href={work.url ?? "#works"}
                      className="relative block overflow-hidden bg-muted"
                      aria-label={`${work.title}を見る`}
                    >
                      <img
                        src={work.image}
                        alt={`${work.title}のサイトイメージ`}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/15"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-5 left-5 inline-flex h-10 items-center rounded-full bg-background px-5 font-display text-[0.6rem] tracking-[0.28em] opacity-0 transition-all duration-500 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0"
                      >
                        VIEW
                      </span>
                    </a>
                    <div className="mt-6">
                      <span className="font-display text-[0.65rem] tracking-[0.28em] text-muted-foreground">
                        0{i + 2}
                      </span>
                      <h3 className="mt-3 font-display text-lg leading-[1.6] font-bold">{work.title}</h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <li
                            key={tag}
                            className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wider text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-[0.9rem] leading-8 text-muted-foreground">{work.description}</p>
                      <a
                        href={work.url ?? "#works"}
                        className="link-underline mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em]"
                      >
                        詳しく見る
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        >
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
        <section id="flow" aria-labelledby="flow-title" className="px-6 py-24 md:py-36 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="flow-title"
              index="05"
              label="FLOW"
              title="制作の流れ"
              lead="お問い合わせから納品までの流れです。はじめての方にも分かるようにご案内します。"
            />
            <ol className="border-t border-border">
              {flow.map((item, i) => (
                <FadeIn as="li" key={item.step} delay={i * 60}>
                  <div className="group grid gap-4 border-b border-border py-9 transition-colors duration-500 hover:bg-surface md:grid-cols-[110px_240px_minmax(0,1fr)] md:items-baseline md:gap-10 md:px-6">
                    <span className="font-display text-3xl font-bold text-border transition-colors duration-500 group-hover:text-accent">
                      {item.step}
                    </span>
                    <h3 className="font-display text-lg font-bold transition-transform duration-500 md:group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] leading-8 text-muted-foreground">{item.description}</p>
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
          className="relative overflow-hidden bg-primary px-6 py-28 text-primary-foreground md:py-40 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="hairline-grid pointer-events-none absolute inset-0 text-primary-foreground opacity-[0.18]"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="font-display text-[0.7rem] tracking-[0.32em] text-primary-foreground/60">
                06 / CONTACT
              </p>
              <h2
                id="contact-title"
                className="mt-7 font-display text-[1.6rem] leading-[1.6] font-bold md:text-[2.25rem] md:leading-[1.5]"
              >
                Webサイト制作・修正の
                <br className="sm:hidden" />
                ご相談はこちら
              </h2>
              <p className="mt-7 text-[0.9rem] leading-8 text-primary-foreground/70">
                「何から相談すればいいか分からない」という段階でも大丈夫です。
                ご希望をお伺いしたうえで、内容とお見積りをご案内します。
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-12 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-12 text-sm tracking-[0.15em] text-accent-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]"
              >
                お問い合わせ
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <p className="mt-6 text-xs tracking-[0.12em] text-primary-foreground/50">{profile.email}</p>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.22em]">{profile.name}</p>
            <p className="mt-3 text-[0.7rem] tracking-[0.24em] text-muted-foreground">{profile.role}</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-[0.7rem] tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-[0.7rem] tracking-[0.1em] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
