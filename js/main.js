jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            $('html, body').animate({
                scrollTop: $('#main').offset().top
            }, 500);
            console.log($('.accordion ' + currentAttrValue).prev().prev());
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown('#accordion').addClass('open');
        }

        e.preventDefault();
    });
});
