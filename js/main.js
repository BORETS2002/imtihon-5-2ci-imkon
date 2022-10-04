
$('.center').slick({
  Infinity: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
  
    {
      breakpoint: 320,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },

    {
      breakpoint: 768,
      settings: {
  
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },

    {
      breakpoint: 998,
      settings: {
  
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },


    {
      breakpoint: 1200,
      settings: {
  
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },

  ]
});