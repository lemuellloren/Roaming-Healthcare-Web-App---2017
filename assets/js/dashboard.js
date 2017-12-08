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

	// change value of ad views
	$('.ad-calendar-nav').on('click', function(e){
		var ito = $(this),
			$all = $('.ad-calendar-nav'),
			$current = ito.siblings( '.ad-calendar-current' ),
			$count = ito.closest('.ad-calendar').find('.ad-calendar-count'),
			/*
			 *	Determines the direction of the date
			 *	- only possible values are:
			 *		next
			 *		prev
			 */
			nav = ito.data( 'calendarnav' ),

			/*
			 *	Determines the type of span of time
			 *	- only possible values are:
			 *		week
			 *		month
			 *		year
			 */
			type = ito.data( 'calendartype' ),
			/*
			 *	The current value of type
			 *	- example
			 *		if {type} is "week", then possible values are the numerical values of the weeks of the year
			 *		if {type} is "month", then possible values are 1 up to 12
			 */
			current = $current.data( 'calendarcurrent' );

		//--- lets first disable the clicky navs :)
		$all.css('pointer-events', 'none');

		//--- with these values, you are now set to discovering the wonderful world of ajax :)
		$.ajax({
			url: '',
			data: { direction: nav, type: type, current: current },
			dataType: 'json',
			method: 'post',
			success: function( data ){
				//--- replace the text inside .ad-calendar-current
				$current.text( /* data here */ );

				//--- replace the data's current value
				$current.data( 'calendarcurrent', /* data here  */ );

				//--- replace the value for the number of views within the new time span
				$count.text( /* data here */ );
			},
			complete: function(){
				//--- since we are finished with our query, lets reenable the clicky navs :)
				$all.css('pointer-events', 'auto');
			}
		});
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
		}else if( $(active).children('.tab-2').length ){
			setTimeout(function(){
				var services = UIkit.slider('#services-slider-desktop, #services-slider-mobile, #docs-slider-desktop, #docs-slider-mobile', {
					infinite: false
				});
				services.init();
			}, 500);
		}
	});
	

})(jQuery);


