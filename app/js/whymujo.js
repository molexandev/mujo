$(function () {   
    
   // fadeIn

   (function () {
       var fadeInTopWhymujo = document.querySelector(".top-whymujo__inner");
       var fadeInTopWhymujoTitle = document.querySelector(".energy__title");
       var fadeInTopWhymujoText = document.querySelector(".energy__text");
       var fadeInTopWhymujoBtn = document.querySelector(".energy__btn");
       var fadeInTopWhymujoImg = document.querySelector(".energy__img");
       var fadeInStressImg = document.querySelector(".stress__img-box");
       var fadeInStressTitle = document.querySelector(".stress__title");
       var fadeInStressPref = document.querySelector(".stress__preferences");
       var fadeInStressInfo = document.querySelector(".stress__info");
       var fadeInadaptogens = document.querySelector(".adaptogens");
       

       var observer = new IntersectionObserver((entries) => {
           entries.forEach((entry) => {
               if (
                   typeof getCurrentAnimationPreference === "function" &&
                   !getCurrentAnimationPreference()
               ) {
                   return;
               }

               if (entry.isIntersecting) {
                   entry.target.classList.add("animate__animated");
                   entry.target.classList.add("animate__fadeIn");
               }
           });
       });

       observer.observe(fadeInTopWhymujo);
       observer.observe(fadeInTopWhymujoTitle);
       observer.observe(fadeInTopWhymujoText);
       observer.observe(fadeInTopWhymujoBtn);
       observer.observe(fadeInTopWhymujoImg);
       observer.observe(fadeInStressImg);
       observer.observe(fadeInStressTitle);
       observer.observe(fadeInStressPref);
       observer.observe(fadeInStressInfo);
       observer.observe(fadeInadaptogens);
   })();

       // fadeInRLeft

       (function () {
        var oneScoopTitleTop = document.querySelector(".top-whymujo__title-top");
        var ownChoiceFadeinLeft = document.querySelector(".own-choice__fadein_left");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInLeft");
                    entry.target.classList.add("animate__animated");
                }
            });
        });

        observer.observe(oneScoopTitleTop);
        observer.observe(ownChoiceFadeinLeft);
    })();

    // fadeInRight

    (function () {
        var whyMujoTitleBottom = document.querySelector(".top-whymujo__title-right");
        var ownChoiceFadeinRight = document.querySelector(".own-choice__fadein_right");

        var observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (
                    typeof getCurrentAnimationPreference === "function" &&
                    !getCurrentAnimationPreference()
                ) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__fadeInRight");
                    entry.target.classList.add("animate__animated");
                }
            });
        });

        observer.observe(whyMujoTitleBottom);
        observer.observe(ownChoiceFadeinRight);
    })();
   
});