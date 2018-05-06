//$(function() {
    document.ondragstart = noselect; 
    // запрет на перетаскивание 
    document.onselectstart = noselect; 
    // запрет на выделение элементов страницы 
    document.oncontextmenu = noselect; 
    // запрет на выведение контекстного меню 
    function noselect() {return false;}

$(document).ready(function() {
    var menuBtn = $('.top-nav_btn');
    var sidebarBtn = $('.left-sidebar_btn');
    var menu = $('.top-nav_menu');
    var sidebarMenu = $('.left-sidebar_menu');

    menuBtn.on('click', function(event) {
      event.preventDefault();
      menu.toggleClass('top-nav_menu__active');  
    });
    sidebarBtn.on('click', function(event) {
      event.preventDefault();
      sidebarMenu.toggleClass('left-sidebar_menu__active');  
    });
  });    

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
  			slidesToShow: 2
  		}
  	},
    {
      breakpoint: 524,
      settings: {
        slidesToShow: 1
      }
    },  
  	]
  });

  $('.gallery-blocks').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });


var elem = document.querySelector('.calc-range');
var init = new Powerange(elem, { min: 10000, max: 1500000, start: 10000, hideRange: true, step:10000 });
var per, month, result, total, monthly;
var money = +$('.calc-range').val();

$('input[name="programs"]').on('change', function(event) {
  month = +$(this).attr('data-month');
  per = +$(this).attr('data-per');
  result = Math.round(per / 12 * month * money);
  total = result + money;
  monthly = parseInt(result / month);
  $('.calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
  $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
});

$('.calc-range').on('change', function(event) {
  $('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
  var radio = $('input[name="programs"]:checked');
  money = +$(this).val()
  month = radio.attr('data-month');
  per = radio.attr('data-per');
  result = Math.round(per / 12 * month * money);
  total = result + money;
  monthly = parseInt(result / month);
  $('.calc-total span').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
  $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
});

//});
