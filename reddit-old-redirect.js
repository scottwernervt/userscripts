// ==UserScript==
// @name        Reddit Old Redirect
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @namespace   https://github.com/scottwernervt
// @version     2023.09.25
// @description Automatically redirect from Reddit Redesign to Reddit Old UI.
// @icon        https://www.redditstatic.com/shreddit/assets/favicon/180x180.png
// @match       https://www.reddit.com/*
// @match       https://reddit.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function () {
    "use strict";

    const currentUrl = new URL(window.location.href);
    if (currentUrl.hostname === "old.reddit.com") {
        return;
    }

    // Skip redirect if path matches below
    const excludedPaths = [
        /^\/community-points/,
        /^\/gallery/,
        /^\/media/,
        /^\/poll/,
        /^\/rpan/,
        /^\/settings/,
        /^\/topics/,
        /^\/r\/[a-zA-Z0-9_]+\/s\/.*/, // eg https://reddit.com/r/comics/s/TjDGhcl22d
    ];
    for (const path of excludedPaths) {
        if (path.test(currentUrl.pathname)) {
            return;
        }
    }

    // Redirect to old.reddit.com
    const newOldUrl = [
        window.location.protocol,
        "//old.reddit.com",
        window.location.pathname,
        window.location.search,
        window.location.hash,
    ].join("");
    window.location.replace(newOldUrl);
})();
