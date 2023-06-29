// ==UserScript==
// @name        Reddit Old Redirect
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @namespace   https://github.com/scottwernervt
// @include     https://github.com/*
// @include     https://gist.github.com/*
// @match       https://www.reddit.com/*
// @grant       none
// @run-at      document-idle
// @version     2023.06.29
// @icon        https://www.redditstatic.com/shreddit/assets/favicon/180x180.png
// @description Automatically redirect from Reddit Redesign to Reddit Old UI.
// ==/UserScript==

(function() {
    'use strict';

    const URL = window.location.toString();
    const oldURL = URL.replace(
        "https://www.reddit.com/",
        "https://old.reddit.com/"
    );
    window.location.replace(oldURL);
})();
