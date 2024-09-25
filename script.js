/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 



  $(".slick-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow">></button>',
    autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      // dots: false, Boolean
     // arrows: false, Boolean
   });

   $(".slick4-slider4").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="slide4-arrow prev-arrow"><</button>',
    nextArrow: '<button class="slide4-arrow next-arrow">></button>',
    autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      // dots: false, Boolean
     // arrows: false, Boolean
   });
 
 
 // Image Slider Demo:
 // https://codepen.io/vone8/pen/gOajmOo




 $(".slicks-sliders").slick({
  slidesToShow: 5,
  infinite:true,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<button class="slides-arrow prev-arrow"><</button>',
  nextArrow: '<button class="slides-arrow next-arrow">></button>',
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    // dots: false, Boolean
   // arrows: false, Boolean
 });

 $(".slick3-slider3").slick({
  slidesToShow: 2,
  infinite:true,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
  nextArrow: '<button class="slide-arrow next-arrow">></button>',
  autoplaySpeed: 2000,
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    // dots: false, Boolean
   // arrows: false, Boolean
 });


 $(".slickss-sliderss").slick({
  slidesToShow: 1,
  infinite:true,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<button class="slides-arrow prev-arrow"><</button>',
  nextArrow: '<button class="slides-arrow next-arrow">></button>',
  autoplaySpeed: 2000
    // dots: false, Boolean
   // arrows: false, Boolean
 });


// Image Slider Demo:
// https://codepen.io/vone8/pen/gOajmOo


// $(document).ready(function(){
//   $('.slick-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });


