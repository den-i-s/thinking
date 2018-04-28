//$(function() {

  $('.directions-blocks').slick({
  	arrows: false,
  	dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
  	{
  		breakpoint: 800,
  		settings: {
  			slidesToShow: 1
  		}
  	}
  	]
  });

//});
