// ==UserScript==
// @name        ProtonMail - Inline Labels
// @version     2020.03.03
// @description Toggle labels from stack to inline.
// @license     MIT
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @namespace   https://github.com/scottwernervt
// @include     https://github.com/*
// @include     https://gist.github.com/*
// @run-at      document-idle
// @grant       none
// @match       https://mail.protonmail.com/*
// @match       https://beta.protonmail.com/*
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @require     https://gist.github.com/BrockA/2625891/raw/waitForKeyElements.js
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js?updated=20180103
// @require     https://greasyfork.org/scripts/28721-mutations/code/mutations.js?version=882023
// @icon        https://mail.protonmail.com/assets/favicons/apple-touch-icon-180x180.png
// @updateURL   https://raw.githubusercontent.com/scottwernervt/userscripts/master/protonmail-inline-labels.user.js
// @downloadURL https://raw.githubusercontent.com/scottwernervt/userscripts/master/protonmail-inline-labels.user.js
// @supportURL  https://github.com/scottwernervt/userscripts/issues
// ==/UserScript==

function setInlineLabels(elements) {
  elements.attr("data-format", "inline");
}

waitForKeyElements(".labelsElement-container", setInlineLabels);
