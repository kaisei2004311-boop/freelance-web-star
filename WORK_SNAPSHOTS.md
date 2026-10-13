# 作品の固定版

`public/works/` にある5作品は、ポートフォリオから見るための静的な保存版です。元の作品リポジトリと独立しているため、元サイトを編集してもここに反映されません。更新したいときだけ、元サイトの新しい版をビルドして保存版を差し替えます。

| 作品 | 保存元コミット | 保存方式 |
| --- | --- | --- |
| ショップサイト | `5e9d77b168f0fd194c274d4c227ade631ac81396` | `index.html` をコピー |
| 花屋サイト | `0181807a3336dbf707dc89a0eacbfbb007d73d46` | `index.html` をコピー |
| デイサービスサイト | `b97c52dc5feec834b8ac6ffa01ae584322945f09` | `index.html` をコピー |
| 渡船サイト | `1763c58ac8aec99bc0a55e8859f9b2f92479aeff` | `index.html` をコピー |
| プロポーズ演出サイト | `2bb555eb3cc2578c4012af3440abca7650510bc3` | Next.js の静的出力をコピー |

プロポーズ演出サイトは、保存版を作るときに `next.config.ts` の `basePath` / `assetPrefix` を `/freelance-web-star/works/proposal-service` に設定し、画像の参照パスも同じ接頭辞へ変更して `next build` しています。これらの変更は元サイトへ反映していません。

保存版のリンクは `src/data/site.ts` の `works[].url` で指定しています。検索エンジン向けに保存版には `noindex` を設定しています。
