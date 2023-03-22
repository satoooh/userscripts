// ==UserScript==
// @name         Show ITC-LMS unsubmitted items
// @namespace    satoooh.org
// @version      0.1
// @description  Show ITC-LMS unsubmitted items
// @author       satoooh
// @match        https://itc-lms.ecc.u-tokyo.ac.jp/lms/timetable*
// ==/UserScript==

(function () {
  "use strict";

  fetch("/lms/task")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const tasks = doc.querySelectorAll(".block.clearfix")[0];
      tasks
        .querySelectorAll(
          ".online-mobile-hide.contents, .online-display-hide, .result_list_tag"
        )
        .forEach((e) => {
          e.style = "display: none;";
        });
      tasks.querySelectorAll(".result_list_line").forEach((e) => {
        e.style = "gap: 1rem; align-items: space-between;";
      });

      const timetable = document.querySelector("#timetable");
      const header = timetable.querySelector(".header:first-child");
      timetable.insertBefore(tasks, header);
    })
    .catch((error) => {
      console.error("Failed to fetch task data", error);
      alert("課題リストの読み込みに失敗しました");
    });
})();
