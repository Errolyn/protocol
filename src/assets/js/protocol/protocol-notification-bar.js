/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';
    var dismissButtons = document.querySelectorAll('.mzp-c-notification-bar-button');

    for (var i = 0; i < dismissButtons.length; i++) {
        dismissButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            var banner = e.target.parentNode;
            banner.remove();
        }, false);
    }

})();
