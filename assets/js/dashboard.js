// BASE FILE IMPORT
// @codekit-prepend '_base.js'

// PAGE FRAMEWORK COMPONENT IMPORT
// import any framework components that are used in this page only:
// @codekit-prepend '../bower_components/uikit/js/components/lightbox.js'
// @codekit-prepend '../bower_components/uikit/js/components/slider.js'
// @codekit-prepend '../bower_components/uikit/js/components/slideshow.js'
// @codekit-prepend '../bower_components/uikit/js/components/htmleditor.js'

// PAGE FUNCTIONS
// define needed page functions here, when document.readyState === "complete":


(function($) {

	console.log('test');

	/* page functions go here */
	$('li.tabs a').click(function() {
		if($(this).attr('class') == 'tab-2'){
			// console.log('tab2');
			$('.listing-layout').show('slow');
		}else{
			// console.log('not');
			$('.listing-layout').hide('fast');
		}
	});

	//allows only one listing layout
	$('.layout').change(function() {
		console.log('test');
		// $('input.layout').not(this).prop('checked', false); 
		
	});

	//upload photo account, post feature img
	$(".upload-icon, .upload-button").click(function () {
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


