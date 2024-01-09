// ==UserScript==
// @name         Thronebutt Additions
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  Thronebutt additions and fixes
// @author       gulebi
// @match        https://thronebutt.com/player/*
// @icon         https://thronebutt.com/ico/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // let styleElement = document.createElement("style");
    // styleElement.textContent = "";

    // document.head.appendChild(styleElement);

    let sidebarElement = document.querySelector(".sidebar");
    let existingContent = sidebarElement.innerHTML;
    let additionalContent = `<div class="sidebar-box">
    <div class="row vault-wall">
      <div class="col-md-12">
        <h4 class="title stroke sidebar-title">Thronebutt Additions</h4>
      </div>
    </div>
    <div class="row vault-floor">
      <div class="col-md-12">
        <p class="profile-scores stroke scoreboard-user">Loading...</p>
      </div>
    </div>
</div>`;
    sidebarElement.innerHTML = existingContent + additionalContent;
    fetch(window.location.href + "?json").then(res => res.json()).then(data => {
        // console.log(data);
        document.querySelector(".records-charused").querySelector(".record-desc").textContent = `runs with ${data.records.most_used_character}`;
        document.querySelector(".records-wepused").querySelector(".record-desc").textContent = `runs with ${data.records.most_used_weapon}`;
    });
})();









