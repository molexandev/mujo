$(function () {   
    
   // fadeIn

   (function () {
       var topAbout = document.querySelector(".top-about");
       

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
   })();

       // fadeInRLeft

       (function () {
        var coffeMadeFadLeft = document.querySelector(".coffee-made__fadein_left");

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
    })();

    // fadeInRight

    (function () {
        var coffeMadeFadRight = document.querySelector(".coffee-made__fadein_right");

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
    })();
   
});