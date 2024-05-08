// TOOGLE MENU 
$(document).ready(function () {
    $(".toogleicon").click(function () {
        $(".main-navlink").slideToggle();
        $(".contactntn").slideToggle();
    })
})
// TOOGLE MENU END


// MOBILE MENU 
$(document).ready(function () {
    $("li.menu-item-has-children").click(function () {
        $(this).children().toggleClass("activesubmenu");
    })
})
// MOBILE MENU END

// VIDEO JS 
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo'); setTimeout(function () {
        video.play();

    }, 500);

});

// VIDEO JS END



// COUNTER JS 
let a = 0;
$(window).scroll(function () {

    let oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            let $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        a = 1;
    }
});
// COUNTER JS END


// CUSTOMER SLIDER 
var swiper = new Swiper(".mySwipercustomer", {
    loop: true,
    speed: 2000,
    autoplay: true,
    autoplay: {
        delay: 1000,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        100: {
            slidesPerView: 3,


        },
        575: {
            slidesPerView: 4,

        },
        767: {
            slidesPerView: 5,

        },
        991: {
            slidesPerView: 5,

        },

        1058: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 6,

        },

        1280: {
            slidesPerView: 6,

        },
        1399: {
            slidesPerView: 6,
        },
    },
});
// CUSTOMER SLIDER END




//   WORK SHOECASE 
var swiper = new Swiper(".mySwiperworkshowcase", {
    slidesPerView: 4.5,
    loop: true,
    speed: 1500,
    autoplay: true,
    autoplay: {
        delay: 1000,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,


        },
        575: {
            slidesPerView: 2,

        },
        767: {
            slidesPerView: 3,

        },
        991: {
            slidesPerView: 3,

        },

        1058: {
            slidesPerView: 3.5,
        },
        1199: {
            slidesPerView: 4,

        },

        1280: {
            slidesPerView: 4,

        },
        1399: {
            slidesPerView: 4.5,
        },
    },

});
//   WORK SHOECASE END

// SCROLL CLASS 
$(document).ready(function () {
    $(".grid-dataancor a").click(function () {
        $(".grid-dataancor a.active").removeClass("active")
        $(this).toggleClass("active");
    })
})
// SCROLL CLASS END

// SCRL TOP JS HERE 
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// SCRL TOP JS HERE END

// ACCORDEAN 

$(function () {
    $(".grid-accordean ").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass("activeacrdean")) {
            $(".acrdean-data").slideUp(400);
            $(".grid-accordean.activeacrdean").removeClass("activeacrdean");
        }
        $this.toggleClass("activeacrdean");
        $this.next().slideToggle();
    });

});


// ACCORDEAN END

// ABOUT ACRDEAN SLIDER MAIN 
var swiper = new Swiper(".mySwiperaboutacrdean", {
    autoplay: true,
    autoplay: {
        delay: 1000,
    },
    effect: 'fade',
    speed: 2000,
    loop: "true",
    fadeEffect: {
        crossFade: true
    },
});
// ABOUT ACRDEAN SLIDER MAIN END

// HEIGHT EQUAL 
$(document).ready(function() {
    var maxHeight = 0;
    $('.projects-holder').each(function() {
      var currentHeight = $(this).height();
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    });
    
    $('.projects-holder').height(maxHeight);
  });
// HEIGHT EQUAL END

// AOS 
AOS.init();
// AOS END

