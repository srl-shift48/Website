---
layout: layouts/default.njk
title: プロフィール
description: shift48.comの運営者プロフィール。AI技術とガジェットが大好きなITエンジニアです。
eleventyNavigation:
  key: Profile
  order: 4
---

{% block content %}
<div class="two-column">
  <div class="primary-content">
    <article class="profile-content card">
      <h1>プロフィール</h1>
      
      <div class="profile-section">
        <div class="profile-header">
          <div class="profile-image">
            <img src="/images/profile.jpg" alt="プロフィール画像" width="150" height="150" style="border-radius: 50%;">
          </div>
          <div class="profile-intro">
            <h2>サイト運営者</h2>
            <div class="profile-social mt-2">
              <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" class="btn">
                Xでフォローする
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -2px; margin-left: 4px;">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="profile-bio mt-3">
          <h3>自己紹介</h3>
          <p>こんにちは！shift48.comを運営しています。AI技術とガジェットが大好きなITエンジニアです。</p>
          <p>大規模言語モデル（LLM）やプロンプトエンジニアリングに関する知識を深めつつ、日々の学びや発見をこのブログで共有しています。また、実際に使ってみて良かったガジェットの紹介や活用法なども発信しています。</p>
          <p>特に最新のAI技術を生活やビジネスに活かす方法に興味があり、実践的な情報を提供することを心がけています。</p>
        </div>
      </div>
      
      <div class="profile-section mt-4">
        <h3>サイトについて</h3>
        <p>shift48.comは、AI技術の学習記録とガジェットレビューを中心に情報を発信するブログです。</p>
        <p>主なコンテンツは以下の通りです：</p>
        
        <ul class="profile-list mt-2">
          <li><strong>AI技術の学習記録</strong>: LLM、プロンプトエンジニアリング、生成AI、AI開発など</li>
          <li><strong>ガジェットレビュー</strong>: スマートフォン、イヤホン、スマートホームデバイスなどの紹介と活用法</li>
          <li><strong>テクノロジートレンド</strong>: 最新のテクノロジートレンドや注目のプロダクト情報</li>
        </ul>
        
        <p class="mt-2">記事の内容に関するご意見やご質問、取り上げて欲しいトピックなどがありましたら、お気軽にXでメッセージをお送りください。</p>
      </div>
      
      <div class="profile-section mt-4">
        <h3>免責事項</h3>
        <p>当サイトでは、アフィリエイトプログラムを利用しており、記事内で紹介する商品やサービスの一部については、当サイトがアフィリエイト報酬を受け取る場合があります。</p>
        <p>商品やサービスのレビューにあたっては、客観的かつ公正な評価を心がけていますが、すべての情報は投稿時点のものであり、最新情報とは異なる場合があります。実際の購入や利用を検討される際は、公式サイトなどで最新情報をご確認ください。</p>
      </div>
    </article>
  </div>
  
  {# サイドバー #}
  <div class="sidebar">
    {% include "includes/sidebar.njk" %}
  </div>
</div>

<style>
  .profile-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  
  .profile-image {
    flex-shrink: 0;
  }
  
  .profile-section {
    margin-bottom: var(--spacing-xl);
  }
  
  .profile-list {
    margin-left: var(--spacing-lg);
    line-height: 1.8;
  }
  
  @media (max-width: 768px) {
    .profile-header {
      flex-direction: column;
      text-align: center;
      gap: var(--spacing-md);
    }
  }
</style>
{% endblock %}
