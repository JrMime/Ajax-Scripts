/* Copyright (C) 2013 Princess Platinum
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/*jshint curly:false laxbreak:true smarttabs:true jquery:true es5:true */
/*global mediaWiki */

(function (window, $, mw) {
    //Global Variables
    var page_name = mw.config.get("wgPageName"),
        server = mw.config.get("wgServer"),
        token = mw.user.tokens.values.editToken,
        page_id = mw.config.get("wgArticleId"),
        namespace = mw.config.get("wgNamespaceNumber"),
        signature = "~~" + "~~",
        modal_title,
        modal_html,
        modal_id,
        modal_button_name,
        modal_function_to_call;

    //Un-urlencoding pagename
    page_name = page_name.replace(/_/g, ' ');

    //Main menu modal
    mainMenu();
    function mainMenu() {
        $.showCustomModal("Advanced Tools", '<form class="WikiaForm" method="" name=""><fieldset><div style="text-align: center;"><a class="wikia-button" onclick="modal(\'block\');">Block user</a>&nbsp;<a class="wikia-button" onclick="modal(\'delete\');">Delete page</a>&nbsp;<a class="wikia-button" onclick="modal(\'move\');">Move page</a>&nbsp;<a class="wikia-button" onclick="modal("protect");">(Un)Protect page</a>&nbsp;<a class="wikia-button" onclick="modal(\'purge\');">Purge page</a><br><br><a class="wikia-button" onclick="modal(\'redirect\');">Redirect page</a>&nbsp;<a class="wikia-button" onclick="modal(\'redlinks\');">Remove redlinks</a>&nbsp;<a class="wikia-button" href="/index.php?title=' + encodeURIComponent(page_name) + '&amp;useskin=monobook">Switch skin</a>&nbsp;<a class="wikia-button" onclick="modal(\'template\');">Add template</a>&nbsp;<a class="wikia-button" onclick="modal(\'unsigned\');">Add unsigned</a>&nbsp;<a class="wikia-button" onclick="modal(\'batch\');">Batch delete</a></div></fieldset></form>', {
            id: "advancedtools",
            width: 650,
            buttons: [{
                id: "close-menu",
                defaultButton: true,
                message: "Close form",
                handler: function () {
                    $("#advancedtools").closeModal();
                }
            }]
        });
    }

    function modal(mode) {
        //Switch function (more compact?)
        switch(mode) {
            case "block":
                alert("Working");
                break;
            case "delete":
                alert("Working");
                break;
            case "move":
                modal("move");
                break;
            case "protect":
                modal("protect");
                break;
        }
    }
}(this, this.jQuery, this.mediaWiki));
