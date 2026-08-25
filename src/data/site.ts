/**
 * サイト内のテキスト・制作実績データをまとめたファイル。
 * ここを編集するだけで、実績や文言を差し替えられます。
 */
import shopSite from "@/assets/shop-site.png";
import flowerSite from "@/assets/flower-site.png";
import dayserviceSite from "@/assets/dayservice-site.png";
import wataribuneSite from "@/assets/wataribune-site.png";

export const profile = {
  name: "中嶋 海晴（KAISEI NAKAJIMA）",
  role: "Web制作（HTML / CSS / JavaScript）",
  email: "kaisei2004311@gmail.com",
};

export const skills = [
  {
    title: "HTML",
    description: "見出しや文章の構造が伝わりやすいよう、整理されたマークアップを心がけています。",
  },
  {
    title: "CSS",
    description: "FlexboxやGridを使い、意図したレイアウトが崩れにくいスタイルを組み立てます。",
  },
  {
    title: "JavaScript",
    description: "スライダーやアコーディオンなど、必要な動きをシンプルに実装します。",
  },
  {
    title: "Responsive Design",
    description: "PC・タブレット・スマートフォンそれぞれで見やすい表示になるよう調整します。",
  },
];

export const services = [
  {
    title: "LP制作",
    description:
      "広告やキャンペーン用の1ページサイトを、デザインをもとにHTML / CSS / JavaScriptで実装します。",
  },
  {
    title: "Webサイト制作",
    description: "店舗・個人・小規模な紹介サイトなど、数ページ程度のサイト制作に対応します。",
  },
  {
    title: "レスポンシブ対応",
    description: "スマホ表示の崩れや見づらさを整え、各画面幅で使いやすい表示に調整します。",
  },
  {
    title: "既存サイト修正",
    description:
      "文言・画像の差し替え、レイアウト調整、ちょっとした動きの追加など、既存サイトの修正に対応します。",
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

/** 制作作品（すべて自主制作・練習作品です） */
export const works: Work[] = [
  {
    id: "shop-site",
    title: "ショップサイト",
    image: shopSite,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    description:
      "架空のショップを想定して制作した自主制作・練習作品です。商品一覧やカート操作など、買い物の流れが分かりやすい構成にしています。",
    url: "https://kaisei2004311-boop.github.io/shop-site/",
  },
  {
    id: "flower-site",
    title: "花屋サイト",
    image: flowerSite,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    description:
      "架空の花屋を想定して制作した自主制作・練習作品です。コレクション紹介からお問い合わせまでを、上品なトーンで1ページにまとめています。",
    url: "https://kaisei2004311-boop.github.io/flower-site/",
  },
  {
    id: "dayservice-site",
    title: "デイサービスサイト",
    image: dayserviceSite,
    tags: ["HTML", "CSS", "Responsive"],
    description:
      "架空のデイサービス施設を想定して制作した自主制作・練習作品です。サービス内容や1日の流れ、アクセス情報を分かりやすく整理しています。",
    url: "https://kaisei2004311-boop.github.io/dayservice-site/",
  },
  {
    id: "wataribune-site",
    title: "渡船サイト",
    image: wataribuneSite,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    description:
      "架空の渡船・釣り船サービスを想定して制作した自主制作・練習作品です。出船情報・料金・予約案内を見やすくまとめています。",
    url: "https://kaisei2004311-boop.github.io/wataribune-site/",
  },
];

export const flow = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "メールにてご連絡ください。ご相談の段階でも問題ありません。",
  },
  {
    step: "02",
    title: "ヒアリング",
    description:
      "サイトの目的・ご希望のイメージ・ページ数・ご予算・納期をお伺いし、内容の整理と目安のお見積りをお伝えします。",
  },
  {
    step: "03",
    title: "制作",
    description: "内容にご同意いただいた後、コーディングを開始します。進捗は途中でもご報告します。",
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
      "データのお渡し、またはサーバーへのアップロードを行って納品完了です。納品後の簡単なご質問にもお答えします。",
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
