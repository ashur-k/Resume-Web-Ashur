  function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                ZOOM: 3,
                zoom: 2,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
            {
                lat: 40.785091,
                lng: -73.968285
            }, 
            {
                lat: 40.084045,
                lng: -73.874256
            }, 
            {
                lat: 40.754932,
                lng: -73.984016
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
                    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

