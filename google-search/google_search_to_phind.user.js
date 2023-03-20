// ==UserScript==
// @name         Google Search Link to phind.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a link to phind.com for any Google search
// @author       satoooh
// @match        https://www.google.com/search*
// @grant        none
// @icon         https://i.gyazo.com/743be66fa6d808617f683b22ed9d5248.png
// ==/UserScript==

(function () {
  "use strict";

  // Google 検索結果の親コンテナを取得
  const searchResultContainer = document.querySelector("#center_col");

  // 検索キーワードを取得
  const query = new URL(window.location.href).searchParams.get("q");

  // 新しいリンクを作成
  const link = document.createElement("a");
  link.href = `https://phind.com/search?q=${query}`;
  link.innerHTML = `
    <img src="https://i.gyazo.com/743be66fa6d808617f683b22ed9d5248.png" style="width: 34px; height: 34px; border-radius: 50%; position: absolute; top: 0; left: 0;">Search on phind.com
  `;
  link.style.display = "inline-block";
  link.style.margin = "10px 4px 32px";
  link.style.background = "#202124";
  link.style.border = "1px solid #3c4043";
  link.style.color = "#bdc1c6";
  link.style.boxSizing = "border-box";
  link.style.borderRadius = "18px";
  link.style.cursor = "pointer";
  link.style.height = "36px";
  link.style.minWidth = "36px";
  link.style.position = "relative";
  link.style.lineHeight = "34px";
  link.style.paddingLeft = "42px";
  link.style.paddingRight = "14px";
  link.style.fontSize = "14px";
  link.style.textDecoration = "none";
  link.style.transition = "all 0.1s ease-in-out";

  // リンクを追加
  searchResultContainer.insertBefore(link, searchResultContainer.firstChild);

  // hover時のスタイル
  link.addEventListener("mouseenter", function () {
    link.style.background = "#3c4043";
    link.style.color = "#fff";
    link.style.opacity = "0.8";
  });

  link.addEventListener("mouseleave", function () {
    link.style.background = "#202124";
    link.style.color = "#bdc1c6";
    link.style.opacity = "1";
  });
})();
