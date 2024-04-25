$(function () {
    // SLIDER

    $(".slider-product__big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-product__thumb",
    });

    $(".slider-product__thumb").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: ".slider-product__big",
    });

    // SlideToggle

    $(".faq-content__title").on("click", function () {
        $(this).toggleClass("faq-content__title--active");
        $(this).next().slideToggle();
    });
});
