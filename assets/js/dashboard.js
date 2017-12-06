// BASE FILE IMPORT
// @codekit-prepend '_base.js'

// PAGE FRAMEWORK COMPONENT IMPORT
// import any framework components that are used in this page only:
// @codekit-prepend '../bower_components/uikit/js/components/lightbox.js'
// @codekit-prepend '../bower_components/uikit/js/components/slider.js'
// @codekit-prepend '../bower_components/uikit/js/components/slideshow.js'
// @codekit-prepend '../bower_components/uikit/js/components/htmleditor.js'
// @codekit-prepend '../bower_components/uikit/js/components/form-select.js'

// PAGE FUNCTIONS
// define needed page functions here, when document.readyState === "complete":


(function($) {

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
	$('input[name="layout"]').on('change', function() {
		$('input[name="layout"]').not(this).prop('checked', false); 
		console.log('test');
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
	});

	// manually initialize sliders inside the tab content
	$('.uk-tab').on('change.uk.tab', function(e, active, prev){
		if( $(active).children('.tab-4').length ){
			setTimeout(function(){
				var slider = UIkit.slider('#ad-calendar-slider', {
					center: true
				});
				slider.init();
			}, 500);
		}
	});
 
})(jQuery);


