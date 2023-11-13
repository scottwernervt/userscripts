// ==UserScript==
// @name         Sway Popup Window Detector
// @namespace    https://gist.github.com/b0o/f00de53aa44ff53b39f997d83b7b5585
// @version      0.1
// @description  Detect "pop-up" windows and float them in swaywm. Test with
// https://webbrowsertools.com/popup-blocker/
// @author       Scott Werner
// @include      /^.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {
    const isTitlebarVisible = window.hasOwnProperty("titlebar") && window.titlebar.visible;
    // const isMenubarVisible = window.menubar && window.menubar.visible === false;
    if (isTitlebarVisible) {
        document.title = `<-POPUP-> ${document.title}`;
    }
})()
