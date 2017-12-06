// BASE FILE IMPORT
// @codekit-prepend '_base.js'

// PAGE FRAMEWORK COMPONENT IMPORT
// import any framework components that are used in this page only:
// @codekit-prepend '../bower_components/uikit/js/components/slider.js'
// @codekit-prepend '../bower_components/uikit/js/components/slideshow.js'
// @codekit-prepend '../bower_components/uikit/js/components/form-select.js'


// PAGE FUNCTIONS
// define needed page functions here, when document.readyState === "complete":


(function($) {

    /* page functions go here */

    //slider init when tab was clicked
    $('.uk-tab').on('change.uk.tab', function(e, active, prev){
        if( $(active).children('.tab-2').length ){
           setTimeout(function(){
            var services = UIkit.slider('#services-slider-desktop, #services-slider-mobile, #docs-slider-desktop, #docs-slider-mobile', {
                infinite: false
            });
            services.init();
        }, 500);
       }
   });

    $("#upload-icon").click(function () {
        $("#upload-file").trigger('click');
    });

    $(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input-fields-wrap"); //Fields wrapper
    var add_button      = $(".add-field-button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">X Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

//wrap 2

$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input-fields-wrap2"); //Fields wrapper
    var add_button      = $(".add-field-button2"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field2">X Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field2", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
 //hideshow
 $(document).ready(function(){
    $("#hide").click(function(){
        $('.proceed-btn').show();
        $(".listing-layout").hide();
    });
    $("#show").click(function(){
        $('.proceed-btn').hide();
        $(".listing-layout").show();
    });
});

})(jQuery);


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#upload-img')
            .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}