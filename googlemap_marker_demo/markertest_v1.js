function initMap() {
    var position = {lat: 40.754500, lng: -74.030132};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position
    });

    var contentString =
        '<a href=""><img src="./1.jpg"></a>' +
        '<div><a href="">Entire home/apt</a></div>' +
        '<div><a href="">Downtown Charmer - 17 Mins to NYC!</a></div>' +
        '<div><a href="">313 7th St, Jersey City, NJ 07302 USA</a></div>' +
        '<div><a href="">$4730 per month</a></div>'
    ;

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        label: {
            text: '$4730',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            fontSize: '18px'
        }
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}