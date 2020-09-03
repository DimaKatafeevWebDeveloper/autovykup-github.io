jQuery(document).ready(function ($) {

   //burger
   $('.icon-menu').on('click', function () {
      $('.icon-menu').toggleClass('active') && $('.menu__list').toggleClass('show') && $('.menu__list').toggleClass('animDown');
   });
});

//цвет шапки

let scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 100) {
      $(".header").addClass('bg');
   }
   if (100 > scrolled) {
      $(".header").removeClass('bg');
   }
}


//анимация

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);

}

//табы

$(function () {
   $('.tabs__nav').on('click', 'li:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.tabs').find('.tabs__description').removeClass('active').eq($(this).index()).addClass('active');
   });
});

//faq

$(function () {
   $('.faq__nav').on('click', 'li:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('.faq__content').find('.faq__answer').removeClass('active').eq($(this).index()).addClass('active');
   });
});

//slider
$('.slider-ex').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   speed: 700,
   responsive: [
      {
         breakpoint: 993,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 769,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});

$('.slider-tes').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   speed: 700,

});