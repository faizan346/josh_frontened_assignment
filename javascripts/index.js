document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide', {
        type   : 'loop',
        perPage: 6,
        perMove: 1,
    } ).mount();
} );