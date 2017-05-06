$(document).ready(function() {
    $("#why-us .slider").slick({
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    centerMode: true,
                    speed: 500,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    speed: 500,
                    arrows: false
                }
            }
        ],
    })
})