// JW Custom JavaScript

(function($) {
    "use strict"; // Start of use strict

    // JW: Wire-up Woodburn & Portrait inquiry buttons
    $('#woodburnButton').click(function(event) {
        $("#woodburnCheckbox").prop("checked", true);        
    }); 
    $('#paintingButton').click(function(event) {
        $("#paintingCheckbox").prop("checked", true);        
    }); 

})(jQuery); // End of use strict
