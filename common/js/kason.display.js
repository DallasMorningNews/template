/*
 * Kason's simple display
 * http://kason.info
 * Copyright 2013, kason.info
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function(e){

    "use strict";

    // Variables
    var vars = {

            "pluginName": "k_display",
            "currentClass": "is-active",
            "onInit": null,
            "onTrigger": null,
            "onComplete": null
        },

        // Methods
        methods = {

            // Init method, run on initialization
            "init": function (o) {

                // Loop through each instance of this plugin and return it
                return this.each(function () {
                    var $this = $(this),
                        s = $.extend(true, {}, vars, o),

                        // Grab variables

                        trigger             =   $this,
                        original_data       =   trigger.data(),
                        display_target_id   =   trigger.attr("data-display"),
                        display_target      =   $("#" + display_target_id),
                        display_group_id    =   trigger.attr("data-display-group"),
                        display_group       =   $("[data-display-group='" + display_group_id + "']"),

                        // Plugin settings
                        data = {
                            "originalData"      :   original_data,
                            "trigger"           :   trigger,
                            "displayTarget"     :   display_target,
                            "displayGroup"      :   display_group,
                            "currentClass"      :   s.currentClass,
                            "onInit"            :   s.onInit,
                            "onTrigger"         :   s.onTrigger,
                            "onComplete"        :   s.onComplete

                        };

                    // Add settings to data object
                    $this.data("settings", data);

                    // If onInit callback...
                    if (typeof s.onInit === "function") {
                        s.onInit($this);
                    }

                    $this.on("click", function () {

                        // If it has the active class...
                        if ($this.hasClass(s.currentClass)) {

                            methods.hide.call($this);
                            

                        // If it's not active...
                        } else {

                            // Then, reveal this current target
                            methods.display.call($this);
                        }
                        return false;
                    });
                });
            }, 
            "hide": function (o){
                var $this           =   $(this),
                    o               =   $this.data("settings");

                $this.removeClass(o.currentClass);
                o.displayTarget.removeClass(o.currentClass);

                if (typeof o.onDisplay == "function") {
                    o.onHide.call($this, $(this));
                }

            },
            "display": function (o){
                var $this           =   $(this),
                    o               =   $this.data("settings");

                $this.addClass(o.currentClass);
                o.displayTarget.addClass(o.currentClass);

                if (typeof o.onDisplay == "function") {
                    o.onDisplay.call($this, $(this));
                }

            }
        };

    // Initialize plugin
    $.fn[vars.pluginName] = function (m) {

        // If a method is called by name...
        if (methods[m]) {

            // ...return specified method.
            return methods[m].apply(this, Array.prototype.slice.call(arguments, 1));

        // ...else if no method is called or an object is passed...
        } else if (!m || typeof m === "object") {

            // ...return the "init" method.
            return methods.init.apply(this, arguments);

        // ...otherwise...
        } else {

            // ...log an error.
            console.log(vars.pluginName + ": Invalid method passed");
        }
    };

})(jQuery);