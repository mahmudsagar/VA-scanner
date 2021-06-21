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