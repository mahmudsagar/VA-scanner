$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    autoplay: true,
    dots: false,
    nav: true,
    items: 2,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

function resourceSlider() {
    $('#resource-slider').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        items: 1,
    })
}

function priceSlider() {
    $('#price-slider').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        items: 1,
    })
}
$(document).ready(function () {
    const windowWidth = $(window).width();
    if (windowWidth <= 768) {
        $('#resource-slider').addClass('owl-carousel owl-theme')
        $('#price-slider').addClass('owl-carousel owl-theme')
        $('.accordion-button').addClass('collapsed');
        $('.accordion-collapse').removeClass('show');
        $('.accordion-button').prop('disabled', false);
        priceSlider()
        resourceSlider()
    }  
    if(windowWidth>768) {
        $('#price-slider').removeClass('owl-carousel owl-theme')
        $('#resource-slider').removeClass('owl-carousel owl-theme')
        $('.accordion-button').removeClass('collapsed');
        $('.accordion-collapse').addClass('show');
        $('.accordion-button').prop('disabled', true);
    }
})

$(window).on('resize', function () {
    const windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth <= 768) {
        $('#resource-slider').addClass('owl-carousel owl-theme')
        $('#price-slider').addClass('owl-carousel owl-theme')
        $('.accordion-button').addClass('collapsed');
        $('.accordion-collapse').removeClass('show');
        $('.accordion-button').prop('disabled', false);
        resourceSlider()
        priceSlider()
    } else {
        $('#price-slider').removeClass('owl-carousel owl-theme')
        $('#resource-slider').removeClass('owl-carousel owl-theme')
        $('.accordion-button').removeClass('collapsed');
        $('.accordion-collapse').addClass('show');
        $('.accordion-button').prop('disabled', true);
    }
});