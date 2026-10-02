import { createFileRoute } from "@tanstack/react-router";
import { createElement, useEffect, useState } from "react";
import { Braces, Code2, LayoutTemplate, Monitor, Palette, Smartphone, Wrench } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { flow, navItems, profile, services, skills, works } from "@/data/site";
import profilePhoto from "@/assets/profile.jpeg";

const skillIcons = [Code2, Palette, Braces, Smartphone];
const serviceIcons = [LayoutTemplate, Monitor, Smartphone, Wrench];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(distance > 0 ? (window.scrollY / distance) * 100 : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div aria-hidden="true" className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "中嶋 海晴｜Web制作ポートフォリオ（HTML / CSS / JavaScript）" },
      {
        name: "description",
        content:
          "HTML / CSS / JavaScriptを中心に、Webサイト制作・LP制作・レスポンシブ対応・既存サイトの修正に対応しています。見やすく使いやすいサイトづくりを大切にしています。",
      },
      {
        property: "og:title",
        content: "中嶋 海晴｜Web制作ポートフォリオ（HTML / CSS / JavaScript）",
      },
      {
        property: "og:description",
        content:
          "HTML / CSS / JavaScriptを中心に、Webサイト制作・LP制作・レスポンシブ対応・既存サイトの修正に対応しています。制作の流れと自主制作作品を掲載しています。",
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
          name: "中嶋 海晴｜Web制作ポートフォリオ",
          description:
            "HTML / CSS / JavaScriptによるWebサイト制作・LP制作・レスポンシブ対応・既存サイト修正。",
          areaServed: "JP",
          serviceType: ["LP制作", "Webサイト制作", "レスポンシブ対応", "既存サイト修正"],
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
      <ScrollProgress />
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 font-display text-sm font-bold tracking-[0.28em]"
        >
          <span
            aria-hidden="true"
            className="brand-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150"
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
        {id === "works-title" ? <span className="handwritten-heading">{title}</span> : title}
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

function WorkShowcase() {
  const [active, setActive] = useState(0);
  const work = works[active]!;
  const move = (step: number) => setActive((index) => (index + step + works.length) % works.length);

  return (
    <FadeIn className="mb-16 md:mb-24">
      <div className={`work-showcase work-showcase-${active} relative overflow-hidden rounded-[1.5rem] text-white`}>
        <span aria-hidden="true" className="work-showcase-number">0{active + 1}</span>
        <div className="relative z-10 grid gap-8 p-6 md:grid-cols-[minmax(0,1.15fr)_minmax(270px,0.85fr)] md:items-center md:gap-12 md:p-12 lg:gap-20 lg:p-16">
          <div className="showcase-art" key={`art-${work.id}`}>
            <div className="showcase-art-back" aria-hidden="true" />
            <div className="showcase-browser relative overflow-hidden rounded-xl bg-white shadow-[0_35px_75px_-25px_rgba(0,0,0,0.55)]">
              <div aria-hidden="true" className="browser-bar browser-bar-works"><span /><span /><span /></div>
              <img src={work.image} alt={`${work.title}のサイトイメージ`} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
            </div>
          </div>
          <div className="showcase-copy" key={`copy-${work.id}`} aria-live="polite">
            <p className="font-display text-[0.65rem] tracking-[0.3em] text-white/65">WORKS &nbsp; / &nbsp; 0{active + 1} — 0{works.length}</p>
            <h3 className="mt-6 font-display text-2xl leading-[1.5] font-bold md:text-3xl">{work.title}</h3>
            <p className="mt-5 text-sm leading-8 text-white/75">{work.description}</p>
            <a href={work.url ?? "#works"} target={work.url ? "_blank" : undefined} rel={work.url ? "noopener noreferrer" : undefined} className="showcase-link mt-8 inline-flex min-h-11 items-center gap-3 border-b border-white/50 text-sm tracking-[0.12em] transition-colors hover:border-white">
              詳しく見る <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/20 px-6 py-4 md:px-12 lg:px-16">
          <div className="flex gap-2" aria-label="作品の切り替え">
            {works.map((item, index) => (
              <button key={item.id} type="button" onClick={() => setActive(index)} aria-label={`${item.title}を表示`} aria-current={index === active ? "true" : undefined} className={`showcase-dot ${index === active ? "is-active" : ""}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="前の作品" className="showcase-arrow">←</button>
            <button type="button" onClick={() => move(1)} aria-label="次の作品" className="showcase-arrow">→</button>
          </div>
        </div>
      </div>
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
          className="hero-stage relative flex min-h-dvh items-center overflow-hidden px-6 pt-32 pb-20 lg:px-8"
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
          <div aria-hidden="true" className="hero-shape hero-shape-coral" />
          <div aria-hidden="true" className="hero-shape hero-shape-sun" />

          <div className="relative mx-auto w-full max-w-5xl">
              <FadeIn>
                <p className="flex items-center gap-4 font-display text-[0.7rem] tracking-[0.32em] text-muted-foreground">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  PORTFOLIO / {new Date().getFullYear()}
                </p>
              </FadeIn>

              <FadeIn delay={120}>
                <h1
                  id="hero-title"
                  className="mt-9 font-display text-[2.25rem] leading-[1.45] font-bold tracking-[-0.01em] sm:text-[3.25rem] sm:leading-[1.4] lg:text-[3.15rem] lg:leading-[1.4] xl:text-[3.55rem]"
                >
                  <span className="block">見やすく、使いやすいWebサイトを、</span>
                  <span className="mt-1 block">
                    <span className="hero-highlight handwritten-accent relative inline-block">
                      丁寧
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 140 20"
                        preserveAspectRatio="none"
                        className="hero-highlight-line absolute -bottom-2 left-0 w-full"
                      >
                        <path d="M4 12 C 38 4, 90 5, 136 9" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" pathLength="1" />
                      </svg>
                    </span>
                    に作ります。
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={240}>
                <p className="mt-9 max-w-2xl text-sm leading-8 text-muted-foreground">
                  HTML / CSS /
                  JavaScriptを中心に、LP制作・レスポンシブ対応・既存サイトの修正など、Web制作のご相談に対応しています。
                </p>
              </FadeIn>

              <FadeIn delay={360}>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#works"
                    className="cta-primary group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-sm tracking-[0.15em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_18px_40px_-18px_rgba(39,89,195,0.5)]"
                  >
                    作品を見る
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
              title="丁寧なやりとりと、分かりやすい実装を。"
            />
            <div className="grid gap-12 md:grid-cols-[300px_minmax(0,1fr)] md:gap-20">
              <FadeIn>
                <div className="portrait-frame relative mx-auto w-full max-w-[300px]">
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 -left-3 h-full w-full border border-accent/30"
                  />
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                    <img
                      src={profilePhoto}
                      alt="中嶋 海晴のプロフィール画像"
                      width={600}
                      height={750}
                      className="h-full w-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={120}>
                <h3 className="font-display text-xl leading-[1.7] font-bold md:text-2xl">
                  HTML / CSS / JavaScriptを中心に、Web制作をしています。
                </h3>
                <div className="mt-8 space-y-6 text-[0.9rem] leading-9 text-muted-foreground">
                  <p>
                    HTML / CSS /
                    JavaScriptを中心に、見やすく使いやすいWebサイトづくりを心がけています。
                  </p>
                  <p>
                    ご希望や現状のサイトの困りごとを丁寧に伺いながら、進め方をひとつずつご説明します。
                    専門用語はできるだけかみくだいてお伝えするので、はじめての方も気軽にご相談ください。
                  </p>
                </div>
                <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  {[
                    { term: "NAME", desc: profile.name },
                    { term: "ROLE", desc: profile.role },
                    { term: "AREA", desc: "オンライン対応（リモート）" },
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
          className="skills-stage px-6 py-24 md:py-36 lg:px-8"
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
                  <div className="skill-row group grid gap-3 border-b border-border py-8 transition-colors duration-500 hover:bg-background md:grid-cols-[80px_260px_minmax(0,1fr)] md:items-center md:gap-10 md:px-6">
                    <span className="skill-icon" aria-hidden="true">
                      {createElement(skillIcons[i]!, { size: 21, strokeWidth: 1.7 })}
                      <span className="skill-index">0{i + 1}</span>
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
                  <div className={`service-card service-tone-${i} group relative h-full overflow-hidden p-10 transition-colors duration-500 hover:bg-surface md:p-14`}>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                    />
                    <span className="service-icon" aria-hidden="true">
                      {createElement(serviceIcons[i]!, { size: 25, strokeWidth: 1.5 })}
                    </span>
                    <span className="mt-8 block font-display text-4xl font-bold text-border transition-colors duration-500 group-hover:text-accent/40">
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
          className="works-stage px-6 py-24 md:py-32 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              id="works-title"
              index="04"
              label="WORKS"
              title="制作作品"
              lead="掲載しているものは、スキルをご確認いただくための自主制作サイトです。"
            />

            <WorkShowcase />

            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
              {works.map((work, i) => (
                <FadeIn as="li" key={work.id} delay={(i % 2) * 80} className={`h-full ${i === works.length - 1 && works.length % 2 === 1 ? "md:col-span-2" : ""}`}>
                  <article className={`work-card work-tone-${i} group flex h-full flex-col ${i === works.length - 1 && works.length % 2 === 1 ? "work-card-feature" : ""}`}>
                    <a
                      href={work.url ?? "#works"}
                      className="relative block overflow-hidden rounded-t-lg bg-muted"
                      aria-label={`${work.title}を見る`}
                      {...(work.url
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div aria-hidden="true" className="browser-bar browser-bar-works relative z-10"><span /><span /><span /></div>
                      <img
                        src={work.image}
                        alt={`${work.title}のサイトイメージ`}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/15"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-5 left-5 inline-flex h-10 items-center rounded-full bg-background px-5 font-display text-[0.6rem] tracking-[0.28em] transition-all duration-500 group-hover:opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0"
                      >
                        VIEW
                      </span>
                    </a>
                    <div className="work-card-body mt-6 flex flex-1 flex-col">
                      <span className="font-display text-[0.65rem] tracking-[0.28em] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 font-display text-lg leading-[1.6] font-bold">{work.title}</h3>
                      <ul className="mt-4 flex min-h-[2rem] flex-wrap gap-2">
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
                        className="link-underline mt-auto inline-flex items-center gap-2 pt-6 text-xs tracking-[0.2em]"
                        {...(work.url
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
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
              lead="お問い合わせから納品までの流れです。進め方をあらかじめご案内します。"
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
          className="contact-stage relative overflow-hidden bg-primary px-6 py-28 text-primary-foreground md:py-40 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="hairline-grid pointer-events-none absolute inset-0 text-primary-foreground opacity-[0.18]"
          />
          <div aria-hidden="true" className="contact-orbit pointer-events-none absolute -right-24 top-1/2 hidden h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-white/10 lg:block" />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="font-display text-[0.7rem] tracking-[0.32em] text-primary-foreground/60">
                06 / CONTACT
              </p>
              <h2
                id="contact-title"
                className="mt-7 font-display text-[1.6rem] leading-[1.6] font-bold md:text-[2.25rem] md:leading-[1.5]"
              >
                Web制作の
                <br className="sm:hidden" />
                ご相談はこちら
              </h2>
              <p className="mt-7 text-[0.9rem] leading-8 text-primary-foreground/70">
                「どこを直せばいいか分からない」「まずは話を聞いてほしい」という段階でも大丈夫です。
                内容を伺ったうえで、できることと目安のお見積りをお伝えします。
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
