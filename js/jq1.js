$(document).ready(function () {
  $('.wrapperList>ul').hide()

  $('.wrapperList>h1:nth-of-type(2n+1)').click(function () {
    var findArticle = $(this).next()
    var findWrapper = $(this).closest('.wrapperList')

    if (findArticle.is(':visible')) {
      findArticle.slideUp('fast')
    } else {
      findWrapper.find('>ul').slideUp('fast')
      findArticle.slideDown('fast')
    }
  })
})

// $(function () {
//   $('#crossslide').crossSlide({
//     speed: 45,
//     fade: 1
//   }, [
//     { src: './img/0825a59167eda50797afad84342f7f89.jpg', time: 0, dir: 'up' },
//     { src: './img/16a4401c8660209d5b5424d4ad4172bb.jpg', time: 0, dir: 'up' }
//   ])
// })

// $(function () {
//   $('#crossslide').crossSlide({
//     sleep: 10,
//     fade: 3
//   }, [
//     { src: './img/0825a59167eda50797afad84342f7f89.jpg', time: 5 },
//     { src: './img/16a4401c8660209d5b5424d4ad4172bb.jpg', time: 5 }
//   ])
// })

$(document).ready(function () {
  $('.imgBox').slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow')
  })
})

$(document).ready(function () {
  $('.bpImgWrapper').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    // appendDots: $('.point'),
    variableWidth: false,
    slidesToScroll: 1,
    prevArrow: $('.prevArrow1'),
    nextArrow: $('.nextArrow1')
  })
})

$(document).ready(function () {
  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  })
})

$('.headerContacts').click(function () {
  $('.absTest').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.cross').click(function () {
  $('.absTest').addClass('fadeOutRight')
  setTimeout(function () {
    $('.absTest').removeClass('animated fadeInRight fadeOutRight').css({ 'display': 'none' })
  }, 700)
})

$('.icon1').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon1').addClass('iconActive')
  $('.descCardsWrapper2').css({ 'display': 'none' })
  $('.descCardsWrapper3').css({ 'display': 'none' })
  $('.descCardsWrapper4').css({ 'display': 'none' })
  $('.descCardsWrapper5').css({ 'display': 'none' })
  $('.descCardsWrapper6').css({ 'display': 'none' })
  $('.descCardsWrapper1').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.icon2').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon2').addClass('iconActive')
  $('.descCardsWrapper3').css({ 'display': 'none' })
  $('.descCardsWrapper1').css({ 'display': 'none' })
  $('.descCardsWrapper4').css({ 'display': 'none' })
  $('.descCardsWrapper5').css({ 'display': 'none' })
  $('.descCardsWrapper6').css({ 'display': 'none' })
  $('.descCardsWrapper2').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.icon3').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon3').addClass('iconActive')
  $('.descCardsWrapper2').css({ 'display': 'none' })
  $('.descCardsWrapper1').css({ 'display': 'none' })
  $('.descCardsWrapper4').css({ 'display': 'none' })
  $('.descCardsWrapper5').css({ 'display': 'none' })
  $('.descCardsWrapper6').css({ 'display': 'none' })
  $('.descCardsWrapper3').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.icon4').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon4').addClass('iconActive')
  $('.descCardsWrapper2').css({ 'display': 'none' })
  $('.descCardsWrapper3').css({ 'display': 'none' })
  $('.descCardsWrapper1').css({ 'display': 'none' })
  $('.descCardsWrapper5').css({ 'display': 'none' })
  $('.descCardsWrapper6').css({ 'display': 'none' })
  $('.descCardsWrapper4').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.icon5').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon5').addClass('iconActive')
  $('.descCardsWrapper2').css({ 'display': 'none' })
  $('.descCardsWrapper3').css({ 'display': 'none' })
  $('.descCardsWrapper4').css({ 'display': 'none' })
  $('.descCardsWrapper1').css({ 'display': 'none' })
  $('.descCardsWrapper6').css({ 'display': 'none' })
  $('.descCardsWrapper5').addClass('animated fadeInRight').css({ 'display': 'block' })
})

$('.icon6').click(function () {
  $('.icon1').removeClass('iconActive')
  $('.icon2').removeClass('iconActive')
  $('.icon3').removeClass('iconActive')
  $('.icon4').removeClass('iconActive')
  $('.icon5').removeClass('iconActive')
  $('.icon6').removeClass('iconActive')
  $('.icon6').addClass('iconActive')
  $('.descCardsWrapper2').css({ 'display': 'none' })
  $('.descCardsWrapper3').css({ 'display': 'none' })
  $('.descCardsWrapper4').css({ 'display': 'none' })
  $('.descCardsWrapper5').css({ 'display': 'none' })
  $('.descCardsWrapper1').css({ 'display': 'none' })
  $('.descCardsWrapper6').addClass('animated fadeInRight').css({ 'display': 'block' })
})
// 1920
$('.prevArrowFix').click(function () {
  $('.entryHeader').addClass('fadeOutLeft')
  $('.fixMenu').addClass('fadeInLeft').css({ 'display': 'block', 'position': 'fixed' })
  $('.entryHeader').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
  $('.fixMenu').removeClass('fadeOutLeft fadeInRight')
})

$('.imgFix').click(function () {
  $('.fixMenu').addClass('fadeOutLeft')
  $('.entryHeader').addClass('fadeInLeft').css({ 'display': 'block' })
  $('.entryHeader').removeClass('fadeOutLeft fadeInRight')
  $('.fixMenu').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
})
// 640
$('.prevArrowFix').click(function () {
  $('.entryHeader').addClass('fadeOutLeft')
  $('.fixMenu640').addClass('fadeInTop').css({ 'display': 'block', 'position': 'fixed' })
  $('.entryHeader').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
  $('.fixMenu640').removeClass('fadeOutTop fadeInTop')
})

$('.imgFix640').click(function () {
  $('.fixMenu640').addClass('fadeOutTop')
  $('.entryHeader').addClass('fadeInLeft').css({ 'display': 'block' })
  $('.entryHeader').removeClass('fadeOutLeft fadeInRight')
  $('.fixMenu640').removeClass('fadeOutTop fadeInTop').css({ 'display': 'none' })
})

$('.infSpan2').click(function () {
  $('.imgInf').attr('src', 'img/228.png')
  $('.infSpan2').css({ 'font-family': 'Roboto-Bold', 'text-decoration': 'none' })
  $('.infSpan1').css({ 'font-family': 'Roboto-Light', 'text-decoration': 'underline' })
})

$('.infSpan1').click(function () {
  $('.imgInf').attr('src', 'img/Слой 23.png')
  $('.infSpan1').css({ 'font-family': 'Roboto-Bold', 'text-decoration': 'none' })
  $('.infSpan2').css({ 'font-family': 'Roboto-Light', 'text-decoration': 'underline' })
})

window.onload = function () {
  $('.preloader').css({ 'display': 'none' })
  setTimeout(function () { window.scrollTo(0, 0) })
}

var HeightScreen = $(window).height()

var lastScrollTop = 0
$(window).scroll(function (event) {
  var st = $(this).scrollTop()
  if (st > lastScrollTop && window.screen.width > 1000) {
    $('.entryHeader').addClass('fadeOutLeft')
    $('.fixMenu').addClass('fadeInLeft').css({ 'display': 'block', 'position': 'fixed' })
    $('.entryHeader').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
    $('.fixMenu').removeClass('fadeOutLeft fadeInRight')
  } else if ($(document).scrollTop() < 1200 && window.screen.width > 1000) {
    $('.fixMenu').addClass('fadeOutLeft')
    $('.entryHeader').addClass('fadeInLeft').css({ 'display': 'block' })
    $('.entryHeader').removeClass('fadeOutLeft fadeInRight')
    $('.fixMenu').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
  }
  lastScrollTop = st
})

if (window.screen.width < 1000) {
  $('.entryHeader').removeClass('fadeOutLeft fadeInRight').css({ 'display': 'none' })
  $('.fixMenu').addClass('fadeInLeft').css({ 'display': 'block' })
}
