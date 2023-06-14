$(function () {

    // MENU

    $(".menu__left-btn, .menu a").on("click", function () {
        $(".menu__left-info").toggleClass("menu__left-info--active");
        $("body").toggleClass("lock");
    });

    // SLIDER

    $(".top-slider__inner").slick({
        dots: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // RATING

    $(".rateYo").rateYo({
        starWidth: "15px",
        rating: 0,
        starSvg:
            '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_711)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.62616 11.554L3.24416 13.832L4.08116 9.008L0.535156 5.592L5.43516 4.888L7.62616 0.5L9.81816 4.888L14.7182 5.592L11.1722 9.008L12.0092 13.832L7.62616 11.554Z"/></g><defs><clipPath id="clip0_1_711"><rect width="15" height="14" fill="white" transform="translate(0.0351562 0.5)"/></clipPath></defs></svg>',
        normalFill: "#333",
        ratedFill: "#FF8C00",
    });

    // fadeIn

    (function () {
        var fadeInLogo = document.querySelector(".top__logo");
        var fadeInTitle = document.querySelector(".top__title");
        var fadeInSubtitle = document.querySelector(".top__subtitle");
        var fadeInImgBox = document.querySelector(".top__img-box");
        var fadeInTopInfo = document.querySelector(".top-info__inner");
        var fadeInTopInfoImg = document.querySelector(".top-info__item-img");
        var fadeInBenefitsTop = document.querySelector(".benefits-top__title");
        var fadeInBenefitsText = document.querySelector(".benefits-top__text");
        var fadeInBenefitsBtn = document.querySelector(".benefits-top__btn");
        var fadeInBenefitsBottom = document.querySelector(".benefits-bottom__inner");
        var fadeInOneScImg = document.querySelector(".one-scoop__img");
        var fadeInOneScTitle = document.querySelector(".one-scoop__info-title");
        var fadeInOneScText = document.querySelector(".one-scoop__text");
        var fadeInOneScBtn = document.querySelector(".one-scoop__btn");
        var fadeInHappyCust = document.querySelector(".happy-customers__title");
        var fadeInHappyInner = document.querySelector(".happy-customers__inner");
        var fadeInownChoiceTitle = document.querySelector(".own-choice__title");
        var fadeInownChoiceText = document.querySelector(".own-choice__text");
        var fadeInownChoiceBtn = document.querySelector(".own-choice__btn");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
                ) 
                {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated");
                    entry.target.classList.add("animate__fadeIn");
                }
            });
        });

        observer.observe(fadeInLogo);
        observer.observe(fadeInTitle);
        observer.observe(fadeInSubtitle);
        observer.observe(fadeInImgBox);
        observer.observe(fadeInTopInfo);
        observer.observe(fadeInTopInfoImg);
        observer.observe(fadeInBenefitsTop);
        observer.observe(fadeInBenefitsText);
        observer.observe(fadeInBenefitsBtn);
        observer.observe(fadeInBenefitsBottom);
        observer.observe(fadeInOneScImg);
        observer.observe(fadeInOneScTitle);
        observer.observe(fadeInOneScText);
        observer.observe(fadeInOneScBtn);
        observer.observe(fadeInHappyCust);
        observer.observe(fadeInHappyInner);
        observer.observe(fadeInownChoiceTitle);
        observer.observe(fadeInownChoiceText);
        observer.observe(fadeInownChoiceBtn);
    })();

    // fadeInRLeft

    (function () {
        var oneScoopTitle = document.querySelector(".one-scoop__title-top");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
                ) 
                {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInLeft");
                    entry.target.classList.add("animate__animated");
                }
            });
        });

        observer.observe(oneScoopTitle);
    })();

    // fadeInRight

    (function () {
        var oneScoopTitleBottom = document.querySelector(
            ".one-scoop__title-bottom"
        );

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
                ) 
                {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInRight");
                    entry.target.classList.add("animate__animated");
                }
            });
        });

        observer.observe(oneScoopTitleBottom);
    })();

});
