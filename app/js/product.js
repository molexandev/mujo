$(function () {

   // SLIDER

   $(".slider-product__big").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-product__thumb'
   });

   $(".slider-product__thumb").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.slider-product__big' 
  });


});