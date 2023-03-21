// ==UserScript==
// @name         Add character and word counter to textarea
// @namespace    satoooh.org
// @version      0.1
// @description  Adds a character and word counter to textarea
// @author       satoooh
// @match        https://chat.openai.com/chat*
// ==/UserScript==

(function () {
  "use strict";

  const textarea = document.querySelector("textarea[data-id='root']");

  const charCountEl = document.createElement("div");
  const wordCountEl = document.createElement("div");
  const separatorEl = document.createElement("div");
  separatorEl.textContent = " / ";

  function updateCounts() {
    const charCount = textarea.value.length;
    const wordCount = textarea.value.split(/\s+/).filter((w) => w).length;
    charCountEl.textContent = `char: ${charCount}`;
    wordCountEl.textContent = `word: ${wordCount}`;
  }

  // initialize
  updateCounts();
  const countContainer = document.createElement("div");
  countContainer.style.display = "flex";
  countContainer.appendChild(charCountEl);
  countContainer.appendChild(separatorEl);
  countContainer.appendChild(wordCountEl);
  textarea.parentNode.parentNode.appendChild(countContainer);

  // Add CSS styles
  const style = document.createElement("style");
  style.innerHTML = `
    .countContainer > div {
      font-size: 0.8em;
      opacity: 0.6;
    }
    .separatorEl {
      margin: 0 0.25em;
    }
  `;
  document.head.appendChild(style);

  // Add CSS classes
  countContainer.classList.add("countContainer");
  separatorEl.classList.add("separatorEl");

  textarea.addEventListener("input", updateCounts);
})();
