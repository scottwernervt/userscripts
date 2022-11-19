// ==UserScript==
// @name         Treasury Direct Password Paste
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allow pasting in password field on TreasuryDirect login
// @author       github.com/nbelisle11
// @icon         https://www.treasurydirect.gov/images/favicon.svg
// @match        https://www.treasurydirect.gov/RS/PW-Display.do
// @icon         https://www.treasurydirect.gov/favicon.ico
// @source       https://gist.github.com/nbelisle11/8ce14adb91ecf38292e527c653f24ef6
// ==/UserScript==

(function() {
    'use strict';
    const element = document.getElementsByClassName("pwordinput")[0];
    if (element){
        element.removeAttribute("autocomplete");
        element.removeAttribute("readonly");
    }
})();
