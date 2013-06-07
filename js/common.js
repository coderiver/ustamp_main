$(document).ready(function() {

	// ---------- function element exists -------------------- //
		jQuery.fn.exists = function() {
			return $(this).length;
		}

	// ---------- Scrollable for .carousel -------------------- //
		if ($('.js-scrollable').exists()){
			$('.js-scrollable .js-scroll').scrollable({
				next:'.js-scrollable .js-scroll-next',
				prev:'.js-scrollable .js-scroll-prev',
			});
		};

	// ---------- Scrollable for .clients -------------------- //
		if ($(".js-scrollable2").length > 0) {
		  $('.js-scrollable2 .js-scroll2').scrollable({
		    next:'.js-scrollable2 .js-scroll2-next',
		    prev:'.js-scrollable2 .js-scroll2-prev'
		  });
		  var scrollable_list_1 = $(".js-scrollable2 .js-scroll2").data("scrollable");
		  var number_list = 8;
		  scrollable_list_1.onSeek(function(event, index) {
		    if (this.getIndex() >= this.getSize() - number_list) {
		      $(".js-scrollable2 .js-scroll2-next").addClass("disabled");
		    }
		  });
		  scrollable_list_1.onBeforeSeek(function(event, index) {
		    if (this.getIndex() >= this.getSize() - number_list) {
		      if (index > this.getIndex()) {
		        return false;
		      }
		    }
		  });
		};

	// ---------- Scrollto .nav anchors -------------------- //
		jQuery('.js-anchor1').click(function() {
			str = jQuery(this).val();
			jQuery.scrollTo("#js-anchor1", 500);
		});
		jQuery('.js-anchor2').click(function() {
			str = jQuery(this).val();
			jQuery.scrollTo("#js-anchor2", 500);
		});

	// ---------- Popup for contact information -------------------- //
		$('.js-contacts').click(function() {
		 if ($(this).hasClass('is-active')) {
		  $(this).removeClass('is-active');
		  $('.js-popup').fadeOut();
		 }
		 else {
		  $(this).addClass('is-active');
		  $('.js-popup').fadeIn();
		 }
		 return false;
		});

		$(document).click(function() {
		 $('.js-contacts').removeClass('is-active');
		 $('.js-popup').fadeOut();
		});
		$('.js-popup').click(function(event){
		    event.stopPropagation();
		});

	// ---------- Map -------------------- //
		jQuery('.js-result').click(function(event) {
			jQuery('.js-map').slideToggle();
	    jQuery('.js-result').toggleClass('is-active');
			return false;
		});

	// ----------------  -------------------- //
		$(".chzn-select").chosen({disable_search_threshold: 100});

});