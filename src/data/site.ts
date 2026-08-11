/**
 * サイト内のテキスト・制作実績データをまとめたファイル。
 * ここを編集するだけで、実績や文言を差し替えられます。
 */
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";

export const profile = {
  name: "Your Name",
  role: "Web Design / Coding",
  email: "your-email@example.com",
};

export const skills = [
  {
    title: "HTML",
    description: "意味の伝わるマークアップを意識し、SEO・アクセシビリティに配慮した構造で記述します。",
  },
  {
    title: "CSS",
    description: "FlexboxやGridを用いて、デザインに忠実で崩れにくいレイアウトを組み立てます。",
  },
  {
    title: "JavaScript",
    description: "スライダーやアコーディオンなど、必要な動きをシンプルな実装で追加します。",
  },
  {
    title: "Responsive Design",
    description: "PC・タブレット・スマートフォンそれぞれで見やすい表示になるよう調整します。",
  },
  {
    title: "Git / GitHub",
    description: "バージョン管理を行い、変更履歴を残しながら安全に制作を進めます。",
  },
];

export const services = [
  {
    title: "LP制作",
    description: "デザインをもとにランディングページをコーディングします。",
  },
  {
    title: "Webサイト制作",
    description: "企業サイト・店舗サイト・個人サイトなどのWebサイト制作に対応します。",
  },
  {
    title: "レスポンシブ対応",
    description: "PC・タブレット・スマートフォンで最適に表示されるサイトを制作します。",
  },
  {
    title: "Webサイト修正",
    description: "HTML / CSS / JavaScriptを使用した既存サイトの修正・調整に対応します。",
  },
];

export type Work = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  url?: string;
};

/** 制作実績（すべて自主制作のサンプルです。画像とテキストを差し替えてご利用ください） */
export const works: Work[] = [
  {
    id: "work-01",
    title: "コーポレートサイト（自主制作）",
    image: work01,
    tags: ["HTML", "CSS", "JavaScript"],
    description: "企業サイトを想定し、会社情報・事業内容・問い合わせまでを1サイトにまとめました。",
  },
  {
    id: "work-02",
    title: "カフェサイト（自主制作）",
    image: work02,
    tags: ["HTML", "CSS", "Responsive"],
    description: "店舗の雰囲気が伝わるよう、写真を大きく使ったレイアウトで構成しました。",
  },
  {
    id: "work-03",
    title: "フィットネスLP（自主制作）",
    image: work03,
    tags: ["HTML", "CSS", "JavaScript"],
    description: "申し込みまで迷わず進めるよう、情報の順序とボタン配置を整理したLPです。",
  },
  {
    id: "work-04",
    title: "レスポンシブ実装サンプル",
    image: work04,
    tags: ["CSS Grid", "Flexbox", "Responsive"],
    description: "同じデザインをPC・タブレット・スマートフォンで最適に表示する実装サンプルです。",
  },
  {
    id: "work-05",
    title: "ポートフォリオサイト（自主制作）",
    image: work05,
    tags: ["HTML", "CSS", "JavaScript"],
    description: "作品を見せることを目的に、余白と写真のバランスを重視して制作しました。",
  },
  {
    id: "work-06",
    title: "サロンサイト（自主制作）",
    image: work06,
    tags: ["HTML", "CSS", "Responsive"],
    description: "メニューやアクセス情報を探しやすく整理した、店舗向けサイトのサンプルです。",
  },
];

export const flow = [
  {
    step: "01",
    title: "お問い合わせ",
    description:
      "フォームまたは各サービスのメッセージ機能からご連絡ください。ご相談の段階でも問題ありません。",
  },
  {
    step: "02",
    title: "ヒアリング",
    description:
      "サイトの目的・ご希望のイメージ・ページ数・ご予算・納期をお伺いし、内容とお見積りをご提示します。",
  },
  {
    step: "03",
    title: "制作",
    description:
      "内容にご同意いただいた後、コーディングを開始します。進捗は途中でもご報告いたします。",
  },
  {
    step: "04",
    title: "確認・修正",
    description:
      "確認用URLをお送りしますので、実際の表示をご覧いただき、気になる点をお知らせください。修正して仕上げます。",
  },
  {
    step: "05",
    title: "納品",
    description:
      "データのお渡し、またはサーバーへのアップロードを行って納品完了です。納品後のご質問にも対応します。",
  },
];

export const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "SERVICE", href: "#service" },
  { label: "WORKS", href: "#works" },
  { label: "FLOW", href: "#flow" },
  { label: "CONTACT", href: "#contact" },
];
