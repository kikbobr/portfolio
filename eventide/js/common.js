$('.owl-carousel').owlCarousel({
    loop:true,
    margin:70,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})

function initMap() {
    var myLatLng = {lat: 41.2656026, lng: 69.2002191};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.querySelector('.map'), {
      center: myLatLng,
      zoom: 15
  });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'ProWeb.uz'
  });
}
