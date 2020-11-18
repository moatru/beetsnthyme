$(document).ready(function() {
	//make sure the page is ready before running the scripts

  // hamburger 2
  $( document ).ready(function() {
     $(".burger-button").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });

    $(".burger-menu").click(function(){
      $(".burger-button").toggleClass("active");
      $(".burger-menu").slideToggle();
    });
  });
  // end


  // NAV SCROLL CHANGE
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "5px 1%";
      document.getElementById("logo").style.width = "55%";
    } else {
      document.getElementById("navbar").style.padding = "20px 1%";
      document.getElementById("logo").style.width = "100%";
    }
  }
  // END

	// This is the pop-up gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
  // end

// FAQ Accordian
	var allPanels = $('.accordion > dd').hide();

		$('.accordion > dt > a').click(function() {

			allPanels.slideUp();

	    $(this).filter('.open').removeClass('open').addClass('closing')
	    $('.accordion > dt > a').removeClass('open');
	  $(this).not(".closing").addClass('open').parent().next().slideDown();
	    $('.accordion > dt > a').removeClass('closing');

	    return false;
		});

});
// end accordian

// SLIDER
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//END
