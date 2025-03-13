/**
 * .eleventy.js - shift48.com
 * 
 * 11ty/Boltの設定ファイル
 * - テンプレートエンジンの設定
 * - フィルターの定義
 * - ショートコードの定義
 * - コレクションの定義
 * - ウォッチターゲットの設定
 * - パススルーコピーの設定
 */

const { DateTime } = require('luxon');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  // プラグイン
  eleventyConfig.addPlugin(pluginNavigation);
  
  // パススルーコピー
  // 静的ファイルをそのままコピー
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('public');
  
  // フィルター
  
  // 日付をISO形式に変換
  eleventyConfig.addFilter('isoDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });
  
  // 日付を読みやすい形式に変換（例：2025年3月10日）
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('ja').toFormat('yyyy年LL月dd日');
  });
  
  // 文字数制限（概要用）
  eleventyConfig.addFilter('truncate', (text, length) => {
    if (text && text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  });
  
  // 現在の年を取得
  eleventyConfig.addFilter('currentYear', () => {
    return new Date().getFullYear();
  });
  
  // 配列を指定した数で制限
  eleventyConfig.addFilter('limit', (arr, limit) => {
    return arr.slice(0, limit);
  });
  
  // 関連記事を取得（タグベース）
  eleventyConfig.addFilter('relatedTo', (collection, tags, limit = 3) => {
    if (!tags) return collection.slice(0, limit);
    
    // タグが配列でない場合は配列に変換
    const targetTags = Array.isArray(tags) ? tags : [tags];
    
    // 関連度でソート（同じタグが多いほど関連度が高い）
    return collection
      .filter(item => {
        // 自分自身は除外
        const itemTags = item.data.tags || [];
        let matchCount = 0;
        
        targetTags.forEach(tag => {
          if (itemTags.includes(tag)) {
            matchCount++;
          }
        });
        
        return matchCount > 0;
      })
      .sort((a, b) => {
        const aTags = a.data.tags || [];
        const bTags = b.data.tags || [];
        
        let aMatchCount = 0;
        let bMatchCount = 0;
        
        targetTags.forEach(tag => {
          if (aTags.includes(tag)) aMatchCount++;
          if (bTags.includes(tag)) bMatchCount++;
        });
        
        return bMatchCount - aMatchCount;
      })
      .slice(0, limit);
  });
  
  // コレクション
  
  // 全記事
  eleventyConfig.addCollection('posts', (collectionApi) => {
    return collectionApi.getFilteredByGlob('content/**/*.md');
  });
  
  // AI記事
  eleventyConfig.addCollection('aiPosts', (collectionApi) => {
    return collectionApi.getFilteredByGlob('content/ai/**/*.md');
  });
  
  // ガジェット記事
  eleventyConfig.addCollection('gadgetPosts', (collectionApi) => {
    return collectionApi.getFilteredByGlob('content/gadget/**/*.md');
  });
  
  // 人気記事（将来的にはアクセス解析から自動取得）
  eleventyConfig.addCollection('popularPosts', (collectionApi) => {
    // 仮実装：人気記事として表示する記事を手動で設定
    const popular = [
      'content/ai/llm-prompt-engineering.md',
      'content/gadget/wireless-earbuds-review.md',
      // 他の人気記事...
    ];
    
    return collectionApi.getFilteredByGlob(popular);
  });
  
  // Markdown設定
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '#',
    permalinkSpace: false,
    level: [1, 2, 3, 4],
    slugify: (s) => s.toLowerCase().replace(/[^\w]+/g, '-')
  });
  
  eleventyConfig.setLibrary('md', markdownLibrary);
  
  // ブラウザシンク設定
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  });
  
  // ディレクトリ設定
  return {
    dir: {
      input: '.',
      includes: 'src/includes',
      layouts: 'src/layouts',
      data: 'src/data',
      output: '_site'
    },
    // テンプレート形式
    templateFormats: ['md', 'njk', 'html'],
    // マークダウンファイルはNunjucksテンプレートとして処理
    markdownTemplateEngine: 'njk',
    // HTMLファイルもテンプレートとして処理
    htmlTemplateEngine: 'njk',
    // データとしてのNunjucksファイルを有効化
    dataTemplateEngine: 'njk',
    // パスプレフィックスを設定（必要に応じて変更）
    pathPrefix: '/'
  };
};
