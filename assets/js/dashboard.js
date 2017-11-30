// BASE FILE IMPORT
// @codekit-prepend '_base.js'

// PAGE FRAMEWORK COMPONENT IMPORT
// import any framework components that are used in this page only:
// @codekit-prepend '../bower_components/uikit/js/components/lightbox.js'
// @codekit-prepend '../bower_components/uikit/js/components/slider.js'
// @codekit-prepend '../bower_components/uikit/js/components/slideshow.js'


// PAGE FUNCTIONS
// define needed page functions here, when document.readyState === "complete":


(function($) {

	/* page functions go here */


	//upload photo
	$("#upload-icon").click(function () {
		$("#upload-file").trigger('click');
	});

	//close modal
	$('.back').click(function(){
		$("#cancel-acct .uk-modal-close").trigger('click');
	})

})(jQuery);


