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

    // JW: Add hash to the url so that the back button works to get rid of modals
    $('.testimonial-modal').on('show.bs.modal', function(e) {
        window.location.hash = "testimonial";            
    });
    $(window).on('hashchange', function (event) {
        if(window.location.hash != "#testimonial") {
            $('.testimonial-modal').modal('hide');
        }
    });

})(jQuery); // End of use strict
