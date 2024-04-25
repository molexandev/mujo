$(function () {   
    
   // fadeIn

   (function () {
       var topAbout = document.querySelector(".top-about");
       var adaptogens = document.querySelector(".adaptogens");
       

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


       observer.observe(topAbout);
       observer.observe(adaptogens);
   })();

       // fadeInRLeft

       (function () {
        var coffeMadeFadLeft = document.querySelector(".coffee-made__fadein_left");
        var existingCoffeeImg = document.querySelector(".existing-coffee__img");
        var ownChoiceItem = document.querySelector(".own-choice__item");

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


        observer.observe(coffeMadeFadLeft);
        observer.observe(existingCoffeeImg);
        observer.observe(ownChoiceItem);
    })();

    // fadeInRight

    (function () {
        var coffeMadeFadRight = document.querySelector(".coffee-made__fadein_right");
        var existingCoffeeInfo = document.querySelector(".existing-coffee__info");
        var ownChoiceImg = document.querySelector(".own-choice__img");

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

        observer.observe(coffeMadeFadRight);
        observer.observe(existingCoffeeInfo);
        observer.observe(ownChoiceImg);
    })();
   
});