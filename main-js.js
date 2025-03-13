/**
 * main.js - shift48.com
 * 
 * メインのJavaScriptファイル
 * - ハンバーガーメニューの動作
 * - 広告関連の初期化
 * - その他インタラクション
 */

document.addEventListener('DOMContentLoaded', function() {
  // ハンバーガーメニューの制御
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const closeMenuButton = document.querySelector('.close-menu');
  const mainNav = document.querySelector('.main-nav');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  // ハンバーガーメニューを開く
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', function() {
      mainNav.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // スクロールを無効化
    });
  }
  
  // ハンバーガーメニューを閉じる
  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
  }
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }
  
  function closeMenu() {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // スクロールを有効化
  }
  
  // メニューリンククリック時にメニューを閉じる（モバイル時）
  const menuLinks = document.querySelectorAll('.main-nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });
  
  // 広告ロード（Google AdSense）
  // 注: これはAdSense審査後に有効にする必要があります
  function loadAdsense() {
    // AdSenseのコードがここに入ります
    console.log('AdSense広告が読み込まれました');
  }
  
  // ページ読み込み完了時に広告を初期化
  window.addEventListener('load', function() {
    // AdSenseが存在していればロード
    if (typeof adsbygoogle !== 'undefined') {
      loadAdsense();
    }
  });
  
  // シェアボタンの機能実装
  const twitterShareButtons = document.querySelectorAll('.twitter-share');
  twitterShareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const url = this.getAttribute('data-url') || window.location.href;
      const text = this.getAttribute('data-text') || document.title;
      
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        'twitterShare',
        'width=550,height=450'
      );
    });
  });
  
  // コードブロックなどがあれば、シンタックスハイライトの初期化
  if (typeof hljs !== 'undefined') {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
  
  // 記事内リンクへのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
