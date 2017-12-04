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


	//upload photo account
	$(".upload-icon").click(function () {
		$(this).siblings(".upload-file").trigger('click');
	});

	//upload photo document
	$(".upload-icon-document").click(function () {
		$(this).siblings(".upload-file-document").trigger('click');
	});

	//close modal
	$('.back').click(function(){
		$(".uk-modal-close").trigger('click');
	})

})(jQuery);


