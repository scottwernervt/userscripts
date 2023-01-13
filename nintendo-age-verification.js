// ==UserScript==
// @name        Autofill Nintendo Age Verification Form
// @author      Scott Werner <scott.werner.vt@protonmail.com>
// @namespace   https://github.com/scottwernervt
// @include     https://github.com/*
// @include     https://gist.github.com/*
// @match       https://www.nintendo.com/store/*
// @grant       none
// @run-at      document-idle
// @version     2023.01.23
// @icon        https://assets.nintendo.com/image/upload/ncom/icons/fav-icons/apple-touch-icon.png
// @description Automatically fill out Nintendo Age verification form to view mature games.
// ==/UserScript==

window.addEventListener(
    "load",
    function () {
        setTimeout(function () {
            const content = document.body.textContent || document.body.innerText;
            const isAgeVerification = content.indexOf("Age verification") !== -1;

            if (isAgeVerification) {
                document.getElementById("MM-Month").value = "01";
                document.getElementById("DD-Day").value = "01";
                document.getElementById("YYYY-Year").value = "2000";

                const continueBtn = document.querySelector('button[type="submit"]');
                continueBtn.disabled = false;
                continueBtn.click();
            }
        }, 4000);
    },
    false
);
