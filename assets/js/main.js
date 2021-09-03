$('.hero-slide').slick({
    prevArrow: $('.btn-slide-prev'),
    nextArrow: $('.btn-slide-next'),
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.btn-search').click(function() {
    $('#modal-search').css('display', 'grid');
})

$('.btn-close-modal').click(function() {
    $('#modal-search').css('display', 'none');
})

const header = $('.header'); 
const headerAbout = $('.header-about'); 
const nav = $('.nav'); 
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > headerAbout.height()) {
    header.addClass("scrolled");
    nav.addClass("scrolled");
    $('.btn-arrow').css('transform', 'translateX(0px)');
  }  else {
    header.removeClass("scrolled");
    nav.removeClass("scrolled");
    $('.btn-arrow').css('transform', 'translateX(500px)');
  } 
})

$('.btn-arrow').click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
})

$('.btn-bars').click(function() {
  $('.nav-vertical').toggleClass('active-nav');
}) 

$('.btn-close-nav').click(function() {
  $('.nav-vertical').removeClass('active-nav');
}) 

// Add current page
$('a.nav-link').click((e) => {
  $('.nav-link.current-page').removeClass('current-page');
  $(e.target).addClass('current-page');
})

$('.popular-slide, .feedback-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: false
});


		