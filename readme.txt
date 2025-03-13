# shift48.com - AI学習記録 & ガジェット紹介ブログ

## 概要

shift48.comは、AI技術の学習記録とガジェットレビューを中心に情報を発信するブログサイトです。11ty/Boltを使用した静的サイトで、Netlifyでホスティングされています。

## 特徴

- レスポンシブデザイン（PC/スマホ/タブレット対応）
- AIを連想させるパステル系カラーを使用したデザイン
- ハンバーガーメニューを含むモバイルフレンドリーなナビゲーション
- SEOフレンドリーな構造
- マネタイズ（広告、アフィリエイト）に対応したレイアウト

## 技術スタック

- **静的サイトジェネレーター**: 11ty/Bolt
- **テンプレートエンジン**: Nunjucks
- **コンテンツ形式**: Markdown
- **スタイリング**: CSS（フレームワークなし）
- **ホスティング**: Netlify
- **バージョン管理**: Git

## インストール方法

### 前提条件

- Node.js (v18以上)
- npm

### セットアップ

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/shift48-blog.git
cd shift48-blog
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm start
```

ブラウザで `http://localhost:8080` にアクセスして開発サイトを確認できます。

## デプロイ方法

### Netlifyへのデプロイ

1. GitHubリポジトリにプッシュ

```bash
git add .
git commit -m "コミットメッセージ"
git push origin main
```

2. Netlifyでサイトを作成
   - Netlifyにログイン
   - 「New site from Git」をクリック
   - GitHubリポジトリを選択
   - ビルド設定を確認（`netlify.toml`が適用されます）
   - 「Deploy site」をクリック

3. カスタムドメイン設定
   - Netlifyサイト設定の「Domain settings」から「Add domain」
   - `shift48.com`を入力し、DNSレコードを設定

## ディレクトリ構造

```
shift48/
├── .github/                  # GitHub Actions用の設定
├── public/                   # 静的アセット（画像、フォント等）
│   ├── images/
│   ├── fonts/
│   ├── favicon.ico
│   └── robots.txt
├── src/                      # ソースコード
│   ├── layouts/              # ページレイアウト
│   ├── includes/             # 再利用可能なコンポーネント
│   ├── pages/                # 固定ページ
│   └── styles/               # スタイルシート
├── content/                  # コンテンツ（Markdown記事）
│   ├── ai/                   # AI関連記事
│   └── gadget/               # ガジェット関連記事
├── .eleventy.js              # 11ty/Bolt設定ファイル
├── netlify.toml              # Netlify設定ファイル
└── package.json              # npm設定ファイル
```

## 記事の追加方法

### 新しい記事を作成

1. 記事のカテゴリーに合わせた場所に新しいMarkdownファイルを作成
   - AI関連記事: `content/ai/your-article-slug.md`
   - ガジェット関連記事: `content/gadget/your-article-slug.md`

2. 記事のメタデータを設定（frontmatter）

```markdown
---
title: 記事のタイトル
description: 記事の概要（150文字程度）
date: 2025-03-15
category: ai または gadget
tags:
  - タグ1
  - タグ2
  - タグ3
layout: layouts/post.njk
---

# 記事のタイトル

本文を記述...
```

3. 記事を書く
   - Markdownの構文を使用して記事を作成
   - 見出しは適切な階層を維持（h1は記事タイトルのみ、セクションはh2から開始）
   - 画像を使用する場合は`public/images/posts/`に配置し、相対パスで参照

4. 記事をプレビュー
   ```bash
   npm start
   ```

5. 記事を公開
   ```bash
   git add .
   git commit -m "記事: XXXを追加"
   git push origin main
   ```

## カスタマイズ方法

### デザインの変更

- **カラースキーム**: `src/styles/main.css`の`:root`セクションで定義されている変数を変更
- **レイアウト**: `src/styles/main.css`のレイアウト関連セクションを変更
- **フォント**: `src/styles/main.css`のフォント定義を変更

### ナビゲーションの変更

- `src/includes/header.njk`のナビゲーションリンクを編集

### サイドバーの変更

- `src/includes/sidebar.njk`を編集してサイドバーの内容をカスタマイズ

## マネタイズの設定

### Google AdSense

1. `src/layouts/default.njk`内のAdSenseコメントアウト部分を編集
2. あなたのAdSenseパブリッシャーIDを設定

### アフィリエイト

記事内の適切な箇所にアフィリエイトリンクを挿入：

```markdown
[製品名](アフィリエイトリンク){:target="_blank" rel="nofollow sponsored"}
```

## トラブルシューティング

- **ビルドエラー**: `npm run debug`を実行してデバッグ情報を確認
- **デプロイ問題**: Netlifyダッシュボードでビルドログを確認
- **レイアウト崩れ**: ブラウザの開発者ツールでCSS問題を特定

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSEファイルを参照してください。

## コントリビューション

バグ報告や機能リクエストは、GitHubイシューで受け付けています。プルリクエストも歓迎です。