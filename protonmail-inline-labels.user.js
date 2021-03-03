// ==UserScript==
// @name        ProtonMail - Inline Labels
// @namespace   Violentmonkey Scripts
// @version     2020.02.15
// @match       https://mail.protonmail.com/*
// @match       https://beta.protonmail.com/*
// @grant       none
// @run-at      document-end
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @require     https://gist.github.com/BrockA/2625891/raw/waitForKeyElements.js
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @description Toggle labels from stack to inline.
// ==/UserScript==

function setInlineLabels(elements) {
  elements.attr("data-format", "inline");
}

waitForKeyElements(".labelsElement-container", setInlineLabels);
