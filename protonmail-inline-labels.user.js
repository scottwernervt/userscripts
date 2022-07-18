// ==UserScript==
// @name        ProtonMail - Inline Labels
// @version     2022.07.18
// @description Toggle labels from stack to inline.
// @license     MIT
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @namespace   https://github.com/scottwernervt
// @include     https://github.com/*
// @include     https://gist.github.com/*
// @run-at      document-idle
// @grant       GM_addStyle
// @match       https://mail.proton.me/*
// @match       https://beta.proton.me/*
// @icon        https://mail.proton.me/assets/apple-touch-icon-120x120.png
// @updateURL   https://raw.githubusercontent.com/scottwernervt/userscripts/master/protonmail-inline-labels.user.js
// @downloadURL https://raw.githubusercontent.com/scottwernervt/userscripts/master/protonmail-inline-labels.user.js
// @supportURL  https://github.com/scottwernervt/userscripts/issues
// ==/UserScript==

GM_addStyle (`
  .label-stack.is-stacked .label-stack-item:not(:first-child) {
    --button-opacity: unset;
    max-width: var(--item-wide);
    transform:  unset;
    margin-left: 0.25rem;
  }
`);
